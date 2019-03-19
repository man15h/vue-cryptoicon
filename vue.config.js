const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isProd ? '/vue-jazzicon/' : '/',
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
