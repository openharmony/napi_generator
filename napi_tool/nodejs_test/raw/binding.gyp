{
    "targets": [
        {
          "target_name": "test",
          "sources": [
              "./test.cpp",
              "./x_napi_tool.cpp"],
          "include_dirs": ["."],
          "cflags_cc": [ "-frtti","-std=c++17" ]
        }
    ]
}