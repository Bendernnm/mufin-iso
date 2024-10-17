const getCIBy = require('../src/get-ci'); // Змінити на правильний шлях до файлу
const currencyMappers = require('../src/mappers'); // Змінити на правильний шлях до файлу мапперів
const currencies = require('../iso4217.json');

jest.mock('../src/mappers', () => ({
  getMapper: jest.fn(),
}));

describe('getCIBy', () => {
  test('returns correct currency information when valid groupByLabel and groupByValue are provided', () => {
    const mockMapper = new Map();
    mockMapper.set('USD', currencies.find((c) => c.code === 'USD'));

    currencyMappers.getMapper.mockReturnValue(mockMapper);

    const result = getCIBy('code', 'USD');

    expect(currencyMappers.getMapper).toHaveBeenCalledWith('code');
    expect(result).toEqual(currencies.find((c) => c.code === 'USD'));
  });

  test('returns undefined when no matching groupByValue is found', () => {
    const mockMapper = new Map();
    mockMapper.set('USD', currencies.find((c) => c.code === 'USD'));

    currencyMappers.getMapper.mockReturnValue(mockMapper);

    const result = getCIBy('code', 'EUR'); // 'EUR' is not in the mockMapper

    expect(currencyMappers.getMapper).toHaveBeenCalledWith('code');
    expect(result).toBeUndefined();
  });

  test('throws error when invalid groupByLabel is provided', () => {
    currencyMappers.getMapper.mockImplementation(() => {
      throw new Error('Wrong name invalidMapper, mapper is not exists');
    });

    expect(() => getCIBy('invalidMapper', 'USD')).toThrow('Wrong name invalidMapper, mapper is not exists');
    expect(currencyMappers.getMapper).toHaveBeenCalledWith('invalidMapper');
  });

  test('returns correct currency when groupByLabel is "name"', () => {
    const mockMapper = new Map();
    mockMapper.set('US Dollar', currencies.find((c) => c.name === 'US Dollar'));

    currencyMappers.getMapper.mockReturnValue(mockMapper);

    const result = getCIBy('name', 'US Dollar');

    expect(currencyMappers.getMapper).toHaveBeenCalledWith('name');
    expect(result).toEqual(currencies.find((c) => c.name === 'US Dollar'));
  });

  test('returns correct currency when groupByLabel is "number"', () => {
    const mockMapper = new Map();
    mockMapper.set('840', currencies.find((c) => c.number === '840'));

    currencyMappers.getMapper.mockReturnValue(mockMapper);

    const result = getCIBy('number', '840');

    expect(currencyMappers.getMapper).toHaveBeenCalledWith('number');
    expect(result).toEqual(currencies.find((c) => c.number === '840'));
  });
});
