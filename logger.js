'use strict';
const momenet = require('moment')

module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'CI/CD demo',
      version: 'v-1-0',
      time : momenet().unix()
    }, null, 2),
  };
};
