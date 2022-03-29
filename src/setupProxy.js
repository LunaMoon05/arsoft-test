const createProxyMiddleware = require('http-proxy-middleware'); // версия этой библиотеки ОБЯЗАТЕЛЬНО должна быть 0.21.0
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/account', {
      target: 'http://23.111.202.224:8093',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/auth', {
      target: 'http://23.111.202.224:8093',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/auth/reg', {
      target: 'http://23.111.202.224:8093',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/organization', {
      target: 'http://23.111.202.224:8093',
      changeOrigin: true,
    })
  );
};