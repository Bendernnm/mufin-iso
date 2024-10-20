interface CurrencyItem {
    name: string;
    code: string;
    number: number;
    minorUnits: number;
}

// Import the type for getCI
declare function getCI(type: 'code' | 'name' | 'number', value: string): CurrencyItem;

// Define the module export types
declare const moduleExports: {
    getCI: typeof getCI;
    getCIBy: {
        code: (code: string) => CurrencyItem;
        name: (name: string) => CurrencyItem;
        number: (number: number) => CurrencyItem;
    };
};

export = moduleExports;
