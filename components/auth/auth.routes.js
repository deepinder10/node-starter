const { Router } = require('express');
const { logger } = require('../../loaders/pino-logger');
const AuthService = require('./auth.service');

const route = Router();
route.get('/signup',
  async (req, res, next) => {
    try {
      const data = req.body;
      const response = await AuthService.signup(data);
      res.send(response);
    } catch (error) {
      logger.fatal(error);
      next(error);
    }
  });

module.exports = route;