
{
    "targets": [
        {
          "target_name": "napitest",
          "sources": [
              "./napitest.cpp",
              "./napitest_middle.cpp",
              "./x_napi_tool.cpp"],
          "include_dirs": ["."],
          "cflags_cc": [ "-frtti","-std=c++17" ]
        }
    ]
}
