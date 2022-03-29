const createProxyMiddleware = require('http-proxy-middleware'); // версия этой библиотеки ОБЯЗАТЕЛЬНО должна быть 0.21.0
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/account', {
      target: 'http://23.111.202.224:8093',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/auth/login', {
      target: 'http://23.111.202.224:8093',
      changeOrigin: true,
    })
  );
};