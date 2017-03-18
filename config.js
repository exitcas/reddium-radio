const _ = require('lodash');
const dotenv = require('dotenv');

dotenv.config();

const {
  NODE_ENV,
  PROTOCOL,
  HOST,
  PORT
} = _.defaults(process.env, {
  PROTOCOL: 'http',
  HOST: process.env.OPENSHIFT_NODEJS_IP || 'localhost',
  PORT: process.env.OPENSHIFT_NODEJS_PORT || '4000'
});

const IS_PROD = NODE_ENV === 'production';
const IS_DEV = !IS_PROD;

module.exports = {
  IS_PROD,
  IS_DEV,
  PROTOCOL,
  HOST,
  PORT
};
