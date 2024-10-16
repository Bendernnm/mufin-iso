const getCI = require('./src/get-ci');

module.exports = {
  getCI,
  getCIBy: {
    code: (code) => getCI('code', code),
    name: (name) => getCI('name', name),
    number: (number) => getCI('number', number),
  },
};
