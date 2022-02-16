import { coinFlip } from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
var result = '';
var flip = coinFlip();
var call = args['call'];
// if (call == null){
//     var e = new Error('no input.');
//     throw e;
// }
// 
// figure out error messages
if (call == flip) {
    result = 'win';
}
else {
    result = 'lose';
}
let o = {call: call, flip: flip, result: result};
console.log(o);
