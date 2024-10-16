const fs = require('fs');

const inputFile = './datahub-iso4217.json';
const outputFile = './iso4217.json';

const inputData = require(inputFile);

(() => {
    console.log('Start here');
    const codes = new Set();

    const outputData = inputData.reduce((acc, item) => {
        if (codes.has(item.AlphabeticCode)) {
            return acc;
        }

        codes.add(item.AlphabeticCode);

        acc.push({
            name: item.Currency,
            code: item.AlphabeticCode,
            number: item.NumericCode,
            minorUnits: item.MinorUnit,
        });

        return acc;
    }, []);

    fs.writeFileSync(outputFile, JSON.stringify(outputData));
})();

