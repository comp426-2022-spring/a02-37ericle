import { coinFlip } from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
var result = '';
var flip = coinFlip();
var call = args['call'];
if (call == null){
    console.error('Error: no input.');
    console.error('Usage: node guess-flip --call=[heads|tails]')
    process.exit(0);
}
if (call != "tails" && call != "heads") {
    console.log('Usage: node guess-flip --call=[heads|tails]')
    process.exit(0);
}
if (call == flip) {
    result = 'win';
}
else {
    result = 'lose';
}
let o = {call: call, flip: flip, result: result};
console.log(o);
