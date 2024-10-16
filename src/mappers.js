const currencies = require('../iso4217.json');

const mapNamesEnum = ['code', 'name', 'number'];

class CurrencyMappers {
    #mappers = {
        code: null,
        name: null,
        number: null,
    };

    getMapper(groupBy, hardUpdate = false) {
        if (!groupBy) {
            throw new Error('Mapper name is required');
        }

        if (!mapNamesEnum.includes(groupBy)) {
            throw new Error(`Wrong name ${groupBy}, mapper is not exists`);
        }

        if (!hardUpdate && this.#mappers[groupBy]) {
            return this.#mappers[groupBy];
        }

        this.#mappers[groupBy] = new Map();

        for (const currency of currencies) {
            this.#mappers[groupBy].set(currency[groupBy], currency);
        }

        return this.#mappers[groupBy];
    }
}

module.exports = new CurrencyMappers();
