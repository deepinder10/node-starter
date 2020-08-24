const path = require('path');
const dest = path.join(__dirname, '/../logs/info.log');
const pino = require('pino')(dest);

const expressPino = require('express-pino-logger')({
  serializers: {
    req(req) {
      req.body = req.raw.body;
      return req;
    },
    res(res) {
      res.body = res.raw.body;
      return res;
    }
  },
  logger: pino
})
exports.expressPino = expressPino;
exports.logger = pino;