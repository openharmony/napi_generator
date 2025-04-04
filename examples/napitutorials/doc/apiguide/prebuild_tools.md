# Prebuild tools

The distribution of a native add-on is just as important as its implementation.
In order to install a native add-on it's important to have all the necessary
dependencies installed and well configured (see the [setup](setup.md) section).
The end-user will need to compile the add-on when they will do an `npm install`
and in some cases this could create problems. To avoid the compilation process it's
possible to distribute the native add-on in pre-built form for different platform
and architectures. The prebuild tools help to create and distribute the pre-built
form of a native add-on.

The following list report known tools that are compatible with **Node-API**:

- **[node-pre-gyp](/package/node-pre-gyp)**
- **[prebuild](/package/prebuild)**
- **[prebuildify](/package/prebuildify)**
