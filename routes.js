const { Router } = require('express');
const authRoutes = require('./components/auth/auth.routes');

module.exports = function () {
  const app = Router();

  app.use('/auth', authRoutes);

  return app;
};
