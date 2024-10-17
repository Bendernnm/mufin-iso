const currencyMappers = require('../src/mappers');
const currencies = require('../iso4217.json');

describe('CurrencyMappers', () => {
  test('throws error when no groupBy parameter is provided', () => {
    expect(() => {
      currencyMappers.getMapper();
    }).toThrow('Mapper name is required');
  });

  test('throws error when invalid groupBy parameter is provided', () => {
    expect(() => {
      currencyMappers.getMapper('invalidMapper');
    }).toThrow('Wrong name invalidMapper, mapper is not exists');
  });

  test('returns a valid mapper for "code"', () => {
    const mapper = currencyMappers.getMapper('code');

    expect(mapper).toBeInstanceOf(Map);

    currencies.forEach((currency) => {
      expect(mapper.has(currency.code)).toBe(true);
      expect(mapper.get(currency.code)).toEqual(currency);
    });
  });

  test('returns a valid mapper for "name"', () => {
    const mapper = currencyMappers.getMapper('name');

    expect(mapper).toBeInstanceOf(Map);

    currencies.forEach((currency) => {
      expect(mapper.has(currency.name)).toBe(true);
      expect(mapper.get(currency.name)).toEqual(currency);
    });
  });

  test('returns a valid mapper for "number"', () => {
    const mapper = currencyMappers.getMapper('number');

    expect(mapper).toBeInstanceOf(Map);

    currencies.forEach((currency) => {
      expect(mapper.has(currency.number)).toBe(true);
      expect(mapper.get(currency.number)).toEqual(currency);
    });
  });

  test('does not recreate mapper if called again without hardUpdate', () => {
    const firstMapper = currencyMappers.getMapper('code');
    const secondMapper = currencyMappers.getMapper('code');

    expect(firstMapper).toBe(secondMapper); // same reference
  });

  test('recreates mapper if hardUpdate is true', () => {
    const firstMapper = currencyMappers.getMapper('code');
    const secondMapper = currencyMappers.getMapper('code', true);

    expect(firstMapper).not.toBe(secondMapper);
  });
});
