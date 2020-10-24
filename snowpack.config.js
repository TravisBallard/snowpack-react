
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [['snowpack-plugin-less', {javascriptEnabled: true}], '@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
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
  alias: {
    /* ... */
  },
}
