import { coinFlip, coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
var output = [];
if (args['number'] == null) {
    output.push(coinFlip());
}
else {
    output = coinFlips(args['number']);
}
console.log(output);
console.log(countFlips(output));
