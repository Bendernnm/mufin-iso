const currencyMappers = require('./mappers');

module.exports = function getCIBy(groupByLabel, groupByValue) {
  const mapper = currencyMappers.getMapper(groupByLabel);

  return mapper.get(groupByValue);
};
