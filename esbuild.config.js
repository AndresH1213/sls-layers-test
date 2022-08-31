const { nodeExternalsPlugin } = require('esbuild-node-externals');

module.exports = () => ({
  external: ['/opt/services/models'],
  plugins: [nodeExternalsPlugin()],
});
