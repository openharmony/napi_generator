cmd_Release/napitest.node := ln -f "Release/obj.target/napitest.node" "Release/napitest.node" 2>/dev/null || (rm -rf "Release/napitest.node" && cp -af "Release/obj.target/napitest.node" "Release/napitest.node")
