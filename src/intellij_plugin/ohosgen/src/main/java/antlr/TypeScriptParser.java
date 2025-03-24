/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package antlr;

// Generated from TypeScriptParser.g4 by ANTLR 4.13.2
import antlr.TypeScriptParserBase;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class TypeScriptParser extends TypeScriptParserBase {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MultiLineComment=1, SingleLineComment=2, RegularExpressionLiteral=3, OpenBracket=4, 
		CloseBracket=5, OpenParen=6, CloseParen=7, OpenBrace=8, TemplateCloseBrace=9, 
		CloseBrace=10, SemiColon=11, Comma=12, Assign=13, QuestionMark=14, QuestionMarkDot=15, 
		Colon=16, Ellipsis=17, Dot=18, PlusPlus=19, MinusMinus=20, Plus=21, Minus=22, 
		BitNot=23, Not=24, Multiply=25, Divide=26, Modulus=27, Power=28, NullCoalesce=29, 
		Hashtag=30, LeftShiftArithmetic=31, LessThan=32, MoreThan=33, LessThanEquals=34, 
		GreaterThanEquals=35, Equals_=36, NotEquals=37, IdentityEquals=38, IdentityNotEquals=39, 
		BitAnd=40, BitXOr=41, BitOr=42, And=43, Or=44, MultiplyAssign=45, DivideAssign=46, 
		ModulusAssign=47, PlusAssign=48, MinusAssign=49, LeftShiftArithmeticAssign=50, 
		RightShiftArithmeticAssign=51, RightShiftLogicalAssign=52, BitAndAssign=53, 
		BitXorAssign=54, BitOrAssign=55, PowerAssign=56, NullishCoalescingAssign=57, 
		ARROW=58, NullLiteral=59, BooleanLiteral=60, DecimalLiteral=61, HexIntegerLiteral=62, 
		OctalIntegerLiteral=63, OctalIntegerLiteral2=64, BinaryIntegerLiteral=65, 
		BigHexIntegerLiteral=66, BigOctalIntegerLiteral=67, BigBinaryIntegerLiteral=68, 
		BigDecimalIntegerLiteral=69, Break=70, Do=71, Instanceof=72, Typeof=73, 
		Case=74, Else=75, New=76, Var=77, Catch=78, Finally=79, Return=80, Void=81, 
		Continue=82, For=83, Switch=84, While=85, Debugger=86, Function_=87, This=88, 
		With=89, Default=90, If=91, Throw=92, Delete=93, In=94, Try=95, As=96, 
		From=97, ReadOnly=98, Async=99, Await=100, Yield=101, YieldStar=102, Class=103, 
		Enum=104, Extends=105, Super=106, Const=107, Export=108, Import=109, Implements=110, 
		Let=111, Private=112, Public=113, Interface=114, Package=115, Protected=116, 
		Static=117, Any=118, Number=119, Never=120, Boolean=121, String=122, Unique=123, 
		Symbol=124, Undefined=125, Object=126, Of=127, KeyOf=128, TypeAlias=129, 
		Constructor=130, Namespace=131, Require=132, Module=133, Declare=134, 
		Abstract=135, Is=136, At=137, Identifier=138, StringLiteral=139, BackTick=140, 
		WhiteSpaces=141, LineTerminator=142, HtmlComment=143, CDataComment=144, 
		UnexpectedCharacter=145, TemplateStringEscapeAtom=146, TemplateStringStartExpression=147, 
		TemplateStringAtom=148;
	public static final int
		RULE_initializer = 0, RULE_bindingPattern = 1, RULE_typeParameters = 2, 
		RULE_typeParameterList = 3, RULE_typeParameter = 4, RULE_constraint = 5, 
		RULE_typeArguments = 6, RULE_typeArgumentList = 7, RULE_typeArgument = 8, 
		RULE_type_ = 9, RULE_unionOrIntersectionOrPrimaryType = 10, RULE_primaryType = 11, 
		RULE_predefinedType = 12, RULE_typeReference = 13, RULE_typeGeneric = 14, 
		RULE_typeName = 15, RULE_objectType = 16, RULE_typeBody = 17, RULE_typeMemberList = 18, 
		RULE_typeMember = 19, RULE_arrayType = 20, RULE_tupleType = 21, RULE_tupleElementTypes = 22, 
		RULE_functionType = 23, RULE_constructorType = 24, RULE_typeQuery = 25, 
		RULE_typeQueryExpression = 26, RULE_propertySignatur = 27, RULE_typeAnnotation = 28, 
		RULE_callSignature = 29, RULE_parameterList = 30, RULE_requiredParameterList = 31, 
		RULE_parameter = 32, RULE_optionalParameter = 33, RULE_restParameter = 34, 
		RULE_requiredParameter = 35, RULE_accessibilityModifier = 36, RULE_identifierOrPattern = 37, 
		RULE_constructSignature = 38, RULE_indexSignature = 39, RULE_methodSignature = 40, 
		RULE_typeAliasDeclaration = 41, RULE_constructorDeclaration = 42, RULE_interfaceDeclaration = 43, 
		RULE_interfaceExtendsClause = 44, RULE_classOrInterfaceTypeList = 45, 
		RULE_enumDeclaration = 46, RULE_enumBody = 47, RULE_enumMemberList = 48, 
		RULE_enumMember = 49, RULE_namespaceDeclaration = 50, RULE_namespaceName = 51, 
		RULE_importAliasDeclaration = 52, RULE_decoratorList = 53, RULE_decorator = 54, 
		RULE_decoratorMemberExpression = 55, RULE_decoratorCallExpression = 56, 
		RULE_program = 57, RULE_sourceElement = 58, RULE_statement = 59, RULE_block = 60, 
		RULE_statementList = 61, RULE_abstractDeclaration = 62, RULE_importStatement = 63, 
		RULE_importFromBlock = 64, RULE_importModuleItems = 65, RULE_importAliasName = 66, 
		RULE_moduleExportName = 67, RULE_importedBinding = 68, RULE_importDefault = 69, 
		RULE_importNamespace = 70, RULE_importFrom = 71, RULE_aliasName = 72, 
		RULE_exportStatement = 73, RULE_exportFromBlock = 74, RULE_exportModuleItems = 75, 
		RULE_exportAliasName = 76, RULE_declaration = 77, RULE_variableStatement = 78, 
		RULE_variableDeclarationList = 79, RULE_variableDeclaration = 80, RULE_emptyStatement_ = 81, 
		RULE_expressionStatement = 82, RULE_ifStatement = 83, RULE_iterationStatement = 84, 
		RULE_varModifier = 85, RULE_continueStatement = 86, RULE_breakStatement = 87, 
		RULE_returnStatement = 88, RULE_yieldStatement = 89, RULE_withStatement = 90, 
		RULE_switchStatement = 91, RULE_caseBlock = 92, RULE_caseClauses = 93, 
		RULE_caseClause = 94, RULE_defaultClause = 95, RULE_labelledStatement = 96, 
		RULE_throwStatement = 97, RULE_tryStatement = 98, RULE_catchProduction = 99, 
		RULE_finallyProduction = 100, RULE_debuggerStatement = 101, RULE_functionDeclaration = 102, 
		RULE_classDeclaration = 103, RULE_classHeritage = 104, RULE_classTail = 105, 
		RULE_classExtendsClause = 106, RULE_implementsClause = 107, RULE_classElement = 108, 
		RULE_propertyMemberDeclaration = 109, RULE_propertyMemberBase = 110, RULE_indexMemberDeclaration = 111, 
		RULE_generatorMethod = 112, RULE_generatorFunctionDeclaration = 113, RULE_generatorBlock = 114, 
		RULE_generatorDefinition = 115, RULE_iteratorBlock = 116, RULE_iteratorDefinition = 117, 
		RULE_classElementName = 118, RULE_privateIdentifier = 119, RULE_formalParameterList = 120, 
		RULE_formalParameterArg = 121, RULE_lastFormalParameterArg = 122, RULE_functionBody = 123, 
		RULE_sourceElements = 124, RULE_arrayLiteral = 125, RULE_elementList = 126, 
		RULE_arrayElement = 127, RULE_objectLiteral = 128, RULE_propertyAssignment = 129, 
		RULE_getAccessor = 130, RULE_setAccessor = 131, RULE_propertyName = 132, 
		RULE_arguments = 133, RULE_argumentList = 134, RULE_argument = 135, RULE_expressionSequence = 136, 
		RULE_singleExpression = 137, RULE_asExpression = 138, RULE_assignable = 139, 
		RULE_anonymousFunction = 140, RULE_arrowFunctionDeclaration = 141, RULE_arrowFunctionParameters = 142, 
		RULE_arrowFunctionBody = 143, RULE_assignmentOperator = 144, RULE_literal = 145, 
		RULE_templateStringLiteral = 146, RULE_templateStringAtom = 147, RULE_numericLiteral = 148, 
		RULE_bigintLiteral = 149, RULE_getter = 150, RULE_setter = 151, RULE_identifierName = 152, 
		RULE_identifier = 153, RULE_identifierOrKeyWord = 154, RULE_reservedWord = 155, 
		RULE_keyword = 156, RULE_eos = 157;
	private static String[] makeRuleNames() {
		return new String[] {
			"initializer", "bindingPattern", "typeParameters", "typeParameterList", 
			"typeParameter", "constraint", "typeArguments", "typeArgumentList", "typeArgument", 
			"type_", "unionOrIntersectionOrPrimaryType", "primaryType", "predefinedType", 
			"typeReference", "typeGeneric", "typeName", "objectType", "typeBody", 
			"typeMemberList", "typeMember", "arrayType", "tupleType", "tupleElementTypes", 
			"functionType", "constructorType", "typeQuery", "typeQueryExpression", 
			"propertySignatur", "typeAnnotation", "callSignature", "parameterList", 
			"requiredParameterList", "parameter", "optionalParameter", "restParameter", 
			"requiredParameter", "accessibilityModifier", "identifierOrPattern", 
			"constructSignature", "indexSignature", "methodSignature", "typeAliasDeclaration", 
			"constructorDeclaration", "interfaceDeclaration", "interfaceExtendsClause", 
			"classOrInterfaceTypeList", "enumDeclaration", "enumBody", "enumMemberList", 
			"enumMember", "namespaceDeclaration", "namespaceName", "importAliasDeclaration", 
			"decoratorList", "decorator", "decoratorMemberExpression", "decoratorCallExpression", 
			"program", "sourceElement", "statement", "block", "statementList", "abstractDeclaration", 
			"importStatement", "importFromBlock", "importModuleItems", "importAliasName", 
			"moduleExportName", "importedBinding", "importDefault", "importNamespace", 
			"importFrom", "aliasName", "exportStatement", "exportFromBlock", "exportModuleItems", 
			"exportAliasName", "declaration", "variableStatement", "variableDeclarationList", 
			"variableDeclaration", "emptyStatement_", "expressionStatement", "ifStatement", 
			"iterationStatement", "varModifier", "continueStatement", "breakStatement", 
			"returnStatement", "yieldStatement", "withStatement", "switchStatement", 
			"caseBlock", "caseClauses", "caseClause", "defaultClause", "labelledStatement", 
			"throwStatement", "tryStatement", "catchProduction", "finallyProduction", 
			"debuggerStatement", "functionDeclaration", "classDeclaration", "classHeritage", 
			"classTail", "classExtendsClause", "implementsClause", "classElement", 
			"propertyMemberDeclaration", "propertyMemberBase", "indexMemberDeclaration", 
			"generatorMethod", "generatorFunctionDeclaration", "generatorBlock", 
			"generatorDefinition", "iteratorBlock", "iteratorDefinition", "classElementName", 
			"privateIdentifier", "formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
			"functionBody", "sourceElements", "arrayLiteral", "elementList", "arrayElement", 
			"objectLiteral", "propertyAssignment", "getAccessor", "setAccessor", 
			"propertyName", "arguments", "argumentList", "argument", "expressionSequence", 
			"singleExpression", "asExpression", "assignable", "anonymousFunction", 
			"arrowFunctionDeclaration", "arrowFunctionParameters", "arrowFunctionBody", 
			"assignmentOperator", "literal", "templateStringLiteral", "templateStringAtom", 
			"numericLiteral", "bigintLiteral", "getter", "setter", "identifierName", 
			"identifier", "identifierOrKeyWord", "reservedWord", "keyword", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'['", "']'", "'('", "')'", "'{'", null, "'}'", 
			"';'", "','", "'='", "'?'", "'?.'", "':'", "'...'", "'.'", "'++'", "'--'", 
			"'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'**'", "'??'", "'#'", 
			"'<<'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", 
			"'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", 
			"'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'**='", 
			"'??='", "'=>'", "'null'", null, null, null, null, null, null, null, 
			null, null, null, "'break'", "'do'", "'instanceof'", "'typeof'", "'case'", 
			"'else'", "'new'", "'var'", "'catch'", "'finally'", "'return'", "'void'", 
			"'continue'", "'for'", "'switch'", "'while'", "'debugger'", "'function'", 
			"'this'", "'with'", "'default'", "'if'", "'throw'", "'delete'", "'in'", 
			"'try'", "'as'", "'from'", "'readonly'", "'async'", "'await'", "'yield'", 
			"'yield*'", "'class'", "'enum'", "'extends'", "'super'", "'const'", "'export'", 
			"'import'", "'implements'", "'let'", "'private'", "'public'", "'interface'", 
			"'package'", "'protected'", "'static'", "'any'", "'number'", "'never'", 
			"'boolean'", "'string'", "'unique'", "'symbol'", "'undefined'", "'object'", 
			"'of'", "'keyof'", "'type'", "'constructor'", "'namespace'", "'require'", 
			"'module'", "'declare'", "'abstract'", "'is'", "'@'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral", 
			"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
			"TemplateCloseBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
			"QuestionMarkDot", "Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", 
			"Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", 
			"NullCoalesce", "Hashtag", "LeftShiftArithmetic", "LessThan", "MoreThan", 
			"LessThanEquals", "GreaterThanEquals", "Equals_", "NotEquals", "IdentityEquals", 
			"IdentityNotEquals", "BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", 
			"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
			"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
			"BitXorAssign", "BitOrAssign", "PowerAssign", "NullishCoalescingAssign", 
			"ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
			"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case", 
			"Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue", 
			"For", "Switch", "While", "Debugger", "Function_", "This", "With", "Default", 
			"If", "Throw", "Delete", "In", "Try", "As", "From", "ReadOnly", "Async", 
			"Await", "Yield", "YieldStar", "Class", "Enum", "Extends", "Super", "Const", 
			"Export", "Import", "Implements", "Let", "Private", "Public", "Interface", 
			"Package", "Protected", "Static", "Any", "Number", "Never", "Boolean", 
			"String", "Unique", "Symbol", "Undefined", "Object", "Of", "KeyOf", "TypeAlias", 
			"Constructor", "Namespace", "Require", "Module", "Declare", "Abstract", 
			"Is", "At", "Identifier", "StringLiteral", "BackTick", "WhiteSpaces", 
			"LineTerminator", "HtmlComment", "CDataComment", "UnexpectedCharacter", 
			"TemplateStringEscapeAtom", "TemplateStringStartExpression", "TemplateStringAtom"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TypeScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TypeScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InitializerContext extends ParserRuleContext {
		public TerminalNode Assign() { return getToken(TypeScriptParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterInitializer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitInitializer(this);
		}
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_initializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			match(Assign);
			setState(317);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BindingPatternContext extends ParserRuleContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public BindingPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bindingPattern; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterBindingPattern(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitBindingPattern(this);
		}
	}

	public final BindingPatternContext bindingPattern() throws RecognitionException {
		BindingPatternContext _localctx = new BindingPatternContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_bindingPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBracket:
				{
				setState(319);
				arrayLiteral();
				}
				break;
			case OpenBrace:
				{
				setState(320);
				objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeParametersContext extends ParserRuleContext {
		public TerminalNode LessThan() { return getToken(TypeScriptParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(TypeScriptParser.MoreThan, 0); }
		public TypeParameterListContext typeParameterList() {
			return getRuleContext(TypeParameterListContext.class,0);
		}
		public TypeParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTypeParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTypeParameters(this);
		}
	}

	public final TypeParametersContext typeParameters() throws RecognitionException {
		TypeParametersContext _localctx = new TypeParametersContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_typeParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			match(LessThan);
			setState(325);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LessThan || ((((_la - 96)) & ~0x3f) == 0 && ((1L << (_la - 96)) & 5016517607467L) != 0)) {
				{
				setState(324);
				typeParameterList();
				}
			}

			setState(327);
			match(MoreThan);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeParameterListContext extends ParserRuleContext {
		public List<TypeParameterContext> typeParameter() {
			return getRuleContexts(TypeParameterContext.class);
		}
		public TypeParameterContext typeParameter(int i) {
			return getRuleContext(TypeParameterContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TypeScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TypeScriptParser.Comma, i);
		}
		public TypeParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameterList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTypeParameterList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTypeParameterList(this);
		}
	}

	public final TypeParameterListContext typeParameterList() throws RecognitionException {
		TypeParameterListContext _localctx = new TypeParameterListContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_typeParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			typeParameter();
			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(330);
				match(Comma);
				setState(331);
				typeParameter();
				}
				}
				setState(336);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeParameterContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ConstraintContext constraint() {
			return getRuleContext(ConstraintContext.class,0);
		}
		public TerminalNode Assign() { return getToken(TypeScriptParser.Assign, 0); }
		public TypeArgumentContext typeArgument() {
			return getRuleContext(TypeArgumentContext.class,0);
		}
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public TypeParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTypeParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTypeParameter(this);
		}
	}

	public final TypeParameterContext typeParameter() throws RecognitionException {
		TypeParameterContext _localctx = new TypeParameterContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_typeParameter);
		int _la;
		try {
			setState(346);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(337);
				identifier();
				setState(339);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Extends) {
					{
					setState(338);
					constraint();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(341);
				identifier();
				setState(342);
				match(Assign);
				setState(343);
				typeArgument();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(345);
				typeParameters();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstraintContext extends ParserRuleContext {
		public TerminalNode Extends() { return getToken(TypeScriptParser.Extends, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public ConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constraint; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterConstraint(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitConstraint(this);
		}
	}

	public final ConstraintContext constraint() throws RecognitionException {
		ConstraintContext _localctx = new ConstraintContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_constraint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			match(Extends);
			setState(349);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeArgumentsContext extends ParserRuleContext {
		public TerminalNode LessThan() { return getToken(TypeScriptParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(TypeScriptParser.MoreThan, 0); }
		public TypeArgumentListContext typeArgumentList() {
			return getRuleContext(TypeArgumentListContext.class,0);
		}
		public TypeArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArguments; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTypeArguments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTypeArguments(this);
		}
	}

	public final TypeArgumentsContext typeArguments() throws RecognitionException {
		TypeArgumentsContext _localctx = new TypeArgumentsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_typeArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(LessThan);
			setState(353);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4035230767977070928L) != 0) || ((((_la - 73)) & ~0x3f) == 0 && ((1L << (_la - 73)) & 5188111586719465737L) != 0) || _la==Identifier || _la==StringLiteral) {
				{
				setState(352);
				typeArgumentList();
				}
			}

			setState(355);
			match(MoreThan);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeArgumentListContext extends ParserRuleContext {
		public List<TypeArgumentContext> typeArgument() {
			return getRuleContexts(TypeArgumentContext.class);
		}
		public TypeArgumentContext typeArgument(int i) {
			return getRuleContext(TypeArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TypeScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TypeScriptParser.Comma, i);
		}
		public TypeArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArgumentList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTypeArgumentList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTypeArgumentList(this);
		}
	}

	public final TypeArgumentListContext typeArgumentList() throws RecognitionException {
		TypeArgumentListContext _localctx = new TypeArgumentListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_typeArgumentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			typeArgument();
			setState(362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(358);
				match(Comma);
				setState(359);
				typeArgument();
				}
				}
				setState(364);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeArgumentContext extends ParserRuleContext {
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TypeArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArgument; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTypeArgument(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTypeArgument(this);
		}
	}

	public final TypeArgumentContext typeArgument() throws RecognitionException {
		TypeArgumentContext _localctx = new TypeArgumentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_typeArgument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Type_Context extends ParserRuleContext {
		public UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType() {
			return getRuleContext(UnionOrIntersectionOrPrimaryTypeContext.class,0);
		}
		public TerminalNode BitOr() { return getToken(TypeScriptParser.BitOr, 0); }
		public TerminalNode BitAnd() { return getToken(TypeScriptParser.BitAnd, 0); }
		public FunctionTypeContext functionType() {
			return getRuleContext(FunctionTypeContext.class,0);
		}
		public ConstructorTypeContext constructorType() {
			return getRuleContext(ConstructorTypeContext.class,0);
		}
		public TypeGenericContext typeGeneric() {
			return getRuleContext(TypeGenericContext.class,0);
		}
		public Type_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterType_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitType_(this);
		}
	}

	public final Type_Context type_() throws RecognitionException {
		Type_Context _localctx = new Type_Context(_ctx, getState());
		enterRule(_localctx, 18, RULE_type_);
		int _la;
		try {
			setState(374);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(368);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BitAnd || _la==BitOr) {
					{
					setState(367);
					_la = _input.LA(1);
					if ( !(_la==BitAnd || _la==BitOr) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(370);
				unionOrIntersectionOrPrimaryType(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(371);
				functionType();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(372);
				constructorType();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(373);
				typeGeneric();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnionOrIntersectionOrPrimaryTypeContext extends ParserRuleContext {
		public UnionOrIntersectionOrPrimaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionOrIntersectionOrPrimaryType; }
	 
		public UnionOrIntersectionOrPrimaryTypeContext() { }
		public void copyFrom(UnionOrIntersectionOrPrimaryTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntersectionContext extends UnionOrIntersectionOrPrimaryTypeContext {
		public List<UnionOrIntersectionOrPrimaryTypeContext> unionOrIntersectionOrPrimaryType() {
			return getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext.class);
		}
		public UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType(int i) {
			return getRuleContext(UnionOrIntersectionOrPrimaryTypeContext.class,i);
		}
		public TerminalNode BitAnd() { return getToken(TypeScriptParser.BitAnd, 0); }
		public IntersectionContext(UnionOrIntersectionOrPrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterIntersection(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitIntersection(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryContext extends UnionOrIntersectionOrPrimaryTypeContext {
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public PrimaryContext(UnionOrIntersectionOrPrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitPrimary(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnionContext extends UnionOrIntersectionOrPrimaryTypeContext {
		public List<UnionOrIntersectionOrPrimaryTypeContext> unionOrIntersectionOrPrimaryType() {
			return getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext.class);
		}
		public UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType(int i) {
			return getRuleContext(UnionOrIntersectionOrPrimaryTypeContext.class,i);
		}
		public TerminalNode BitOr() { return getToken(TypeScriptParser.BitOr, 0); }
		public UnionContext(UnionOrIntersectionOrPrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterUnion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitUnion(this);
		}
	}

	public final UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType() throws RecognitionException {
		return unionOrIntersectionOrPrimaryType(0);
	}

	private UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		UnionOrIntersectionOrPrimaryTypeContext _localctx = new UnionOrIntersectionOrPrimaryTypeContext(_ctx, _parentState);
		UnionOrIntersectionOrPrimaryTypeContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_unionOrIntersectionOrPrimaryType, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(377);
			primaryType(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(387);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(385);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new UnionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_unionOrIntersectionOrPrimaryType);
						setState(379);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(380);
						match(BitOr);
						setState(381);
						unionOrIntersectionOrPrimaryType(4);
						}
						break;
					case 2:
						{
						_localctx = new IntersectionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_unionOrIntersectionOrPrimaryType);
						setState(382);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(383);
						match(BitAnd);
						setState(384);
						unionOrIntersectionOrPrimaryType(3);
						}
						break;
					}
					} 
				}
				setState(389);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryTypeContext extends ParserRuleContext {
		public PrimaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryType; }
	 
		public PrimaryTypeContext() { }
		public void copyFrom(PrimaryTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RedefinitionOfTypeContext extends PrimaryTypeContext {
		public TypeReferenceContext typeReference() {
			return getRuleContext(TypeReferenceContext.class,0);
		}
		public TerminalNode Is() { return getToken(TypeScriptParser.Is, 0); }
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public RedefinitionOfTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterRedefinitionOfType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitRedefinitionOfType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PredefinedPrimTypeContext extends PrimaryTypeContext {
		public PredefinedTypeContext predefinedType() {
			return getRuleContext(PredefinedTypeContext.class,0);
		}
		public PredefinedPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterPredefinedPrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitPredefinedPrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArrayPrimTypeContext extends PrimaryTypeContext {
		public List<PrimaryTypeContext> primaryType() {
			return getRuleContexts(PrimaryTypeContext.class);
		}
		public PrimaryTypeContext primaryType(int i) {
			return getRuleContext(PrimaryTypeContext.class,i);
		}
		public TerminalNode OpenBracket() { return getToken(TypeScriptParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(TypeScriptParser.CloseBracket, 0); }
		public ArrayPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterArrayPrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitArrayPrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenthesizedPrimTypeContext extends PrimaryTypeContext {
		public TerminalNode OpenParen() { return getToken(TypeScriptParser.OpenParen, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TerminalNode CloseParen() { return getToken(TypeScriptParser.CloseParen, 0); }
		public ParenthesizedPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterParenthesizedPrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitParenthesizedPrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ThisPrimTypeContext extends PrimaryTypeContext {
		public TerminalNode This() { return getToken(TypeScriptParser.This, 0); }
		public ThisPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterThisPrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitThisPrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TuplePrimTypeContext extends PrimaryTypeContext {
		public TerminalNode OpenBracket() { return getToken(TypeScriptParser.OpenBracket, 0); }
		public TupleElementTypesContext tupleElementTypes() {
			return getRuleContext(TupleElementTypesContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(TypeScriptParser.CloseBracket, 0); }
		public TuplePrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterTuplePrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitTuplePrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class KeyOfTypeContext extends PrimaryTypeContext {
		public TerminalNode KeyOf() { return getToken(TypeScriptParser.KeyOf, 0); }
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public KeyOfTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterKeyOfType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitKeyOfType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ObjectPrimTypeContext extends PrimaryTypeContext {
		public ObjectTypeContext objectType() {
			return getRuleContext(ObjectTypeContext.class,0);
		}
		public ObjectPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterObjectPrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitObjectPrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReferencePrimTypeContext extends PrimaryTypeContext {
		public TypeReferenceContext typeReference() {
			return getRuleContext(TypeReferenceContext.class,0);
		}
		public ReferencePrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterReferencePrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitReferencePrimType(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class QueryPrimTypeContext extends PrimaryTypeContext {
		public TypeQueryContext typeQuery() {
			return getRuleContext(TypeQueryContext.class,0);
		}
		public QueryPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).enterQueryPrimType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TypeScriptParserListener ) ((TypeScriptParserListener)listener).exitQueryPrimType(this);
		}
	}

	public final PrimaryTypeContext primaryType() throws RecognitionException {
		return primaryType(0);
	}

	private PrimaryTypeContext primaryType(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PrimaryTypeContext _localctx = new PrimaryTypeContext(_ctx, _parentState);
		PrimaryTypeContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_primaryType, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				_localctx = new ParenthesizedPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(391);
				match(OpenParen);
				setState(392);
				type_();
				setState(393);
				match(CloseParen);
				}
				break;
			case 2:
				{
				_localctx = new PredefinedPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(395);
				predefinedType();
				}
				break;
			case 3:
				{
				_localctx = new ReferencePrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(396);
				typeReference();
				}
				break;
			case 4:
				{
				_localctx = new ObjectPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(397);
				objectType();
				}
				break;
			case 5:
				{
				_localctx = new TuplePrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(398);
				match(OpenBracket);
				setState(399);
				tupleElementTypes();
				setState(400);
				match(CloseBracket);
				}
				break;
			case 6:
				{
				_localctx = new QueryPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(402);
				typeQuery();
				}
				break;
			case 7:
				{
				_localctx = new ThisPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(403);
				match(This);
				}
				break;
			case 8:
				{
				_localctx = new RedefinitionOfTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(404);
				typeReference();
				setState(405);
				match(Is);
				setState(406);
				primaryType(2);
				}
				break;
			case 9:
				{
				_localctx = new KeyOfTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(408);
				match(KeyOf);
				setState(409);
				primaryType(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(421);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayPrimTypeContext(new PrimaryTypeContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_primaryType);
					setState(412);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(413);
					if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
					setState(414);
					match(OpenBracket);
					setState(416);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4035225266123964752L) != 0) || ((((_la - 73)) & ~0x3f) == 0 && ((1L << (_la - 73)) & 5188111586719465729L) != 0) || _la==Identifier || _la==StringLiteral) {
						{
						setState(415);
						primaryType(0);
						}
					}

					setState(418);
					match(CloseBracket);
					}
					} 
				}
				setState(423);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}




}