
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-webpack',
    ['snowpack-plugin-less', {javascriptEnabled: true}],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv'
  ],
  alias: {
    '@components': './src/components',
    '@context': './src/context',
  },
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
}
