import { DirTemp, DtscppRootInfo, FuncInfo, InterfaceList, TypeList } from "./datatype";
import { replaceAll } from "./common/tool";
import fs = require('fs');
import path = require("path");
import { napiFuncHTemplate, napiFuncInitTemplate } from "./template/func_template";
import { dtscppout } from "./template/dtscpp/dtscppdir";
import { analyzeRootFunction, genDtsInterface, genTsFunction } from "./gendts";
import { generateDirectFunction } from "./gencpp";
import { generateFuncTestCase } from "./gentest";

interface GenResult {
  dtsContent: string; // dts文件中的内容
  testContet: string; // abilitytest文件中的内容
  napiHContent: string; // h文件中的内容
  napiInitContent: string,
  napiCppContent: string
}

function genHFunction(func: FuncInfo, rawFileName: string) {
  let funcParams = '';
  for (let i = 0; i < func.params.length; ++i) {
      funcParams += i > 0 ? ', ' : '';
      funcParams += func.params[i].name + ': ' + func.params[i].type;
  }
  let hContent = replaceAll(napiFuncHTemplate, '[file_introduce_replace]', rawFileName);
  hContent = replaceAll(hContent, '[func_introduce_replace]', func.name);
  hContent = replaceAll(hContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
  hContent = replaceAll(hContent, '[func_name_replace]', func.genName);
  hContent = replaceAll(hContent, '[func_param_replace]', funcParams);
  hContent = replaceAll(hContent, '[func_return_replace]', func.retType === ''? 'void': func.retType);

  return hContent;
}

function replaceContent(fileContent: string, funcContent: GenResult, rootInfo: DtscppRootInfo) {
  let upperFileName = rootInfo.fileName.toLocaleUpperCase();

  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[upper_filename]', upperFileName);
  fileContent = replaceAll(fileContent, '[dts_content_template]', funcContent.dtsContent);
  fileContent = replaceAll(fileContent, '[init_replace]', funcContent.napiInitContent);
  fileContent = replaceAll(fileContent, '[func_declare_replace]', funcContent.napiHContent);
  fileContent = replaceAll(fileContent, '[func_content_replace]', funcContent.napiCppContent);
  fileContent = replaceAll(fileContent, '[testAbilityFunctions]', funcContent.testContet);

  return fileContent;
}

function genDir(dirItem: DirTemp, funcContent: GenResult, rootInfo: DtscppRootInfo, out: string) 
{
  let dirPath = path.join(out, dirItem.name);
  let lowerFileName = rootInfo.fileName.toLocaleLowerCase();

  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } 

  // 遍历文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[fileName]', lowerFileName);
    let filePath = path.join(dirPath, fileName);
    // 将content写入文件， 这里的content是模板，需要replace里面的部分内容
    if (!fs.existsSync(filePath)) {
      // replace file content
      // 这里的替换是替换模板公共的东西，方法的替换在哪里生成呢？
      let fileContent = replaceContent(file.content, funcContent, rootInfo);
      fs.writeFileSync(filePath, fileContent);
    }
  })

  // 递归遍历子目录
  dirItem.dirs.forEach(subDir => {
    genDir(subDir, funcContent, rootInfo, dirPath);
  })
}

function generateFuncCode(rootInfo: DtscppRootInfo) {
  let genResult: GenResult = {
    dtsContent: '',
    testContet: '',
    napiHContent: '', 
    napiInitContent: '',
    napiCppContent: '',
  }

  let typeList: TypeList[] = []
  let interfaceList: InterfaceList[] = []

  // 分析的时候拿到typeList和interfaceList
  let interDef = genDtsInterface(rootInfo.rawFilePath, typeList, interfaceList);
  let tsFuncContent = '';
  // analyze
  let tsfunctions: FuncInfo[] = [];  
  let cppfunctions: FuncInfo[] = [];
  analyzeRootFunction(tsfunctions, cppfunctions, rootInfo.funcs);
  let rawFileName = path.basename(rootInfo.rawFilePath);
  // gen
  for (let i = 0; i < rootInfo.funcs.length; i++) {
    // gen dts function
    tsFuncContent += genTsFunction(tsfunctions[i], rawFileName);
    // 每个napi方法的init
    genResult.napiInitContent += replaceAll(napiFuncInitTemplate, '[func_name_replace]', tsfunctions[i].genName);
    // 每个napi方法的h声明
    genResult.napiHContent += genHFunction(cppfunctions[i], rawFileName);
    // 每个Napi方法的cpp说明
    genResult.napiCppContent += generateDirectFunction(cppfunctions[i], rawFileName, typeList, interfaceList);
    // gen test function
    genResult.testContet += generateFuncTestCase(cppfunctions[i], rawFileName, typeList, interfaceList);

  }
  genResult.dtsContent = interDef + tsFuncContent;
  return genResult;
}

export function genDtsCppFile(rootInfo: DtscppRootInfo, out: string) {
  // 生成dts声明文件 xxx.d.ts
  let res: GenResult = generateFuncCode(rootInfo);

  // h2dtscpp应该没有版本吧
  genDir(dtscppout, res, rootInfo, out);

  console.info('generate success!')
}

