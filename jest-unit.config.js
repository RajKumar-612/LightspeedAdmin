// eslint-disable-next-line
const config = require('./jest.config')

module.exports = {
  ...config,
  testMatch: ['**/??(*.unit.)+(spec|test).[jt]s??(x)']
}
