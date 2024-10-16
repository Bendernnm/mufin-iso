const { getCIBy } = require('./index');

console.log(getCIBy.code('USD'));
console.log(getCIBy.number(840));
console.log(getCIBy.name('US Dollar'.toLowerCase()));
