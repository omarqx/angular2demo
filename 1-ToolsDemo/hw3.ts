import * as _ from "lodash"

var numberList = _(_.range(0,100)).shuffle().chunk(10);

let print = x=>console.log(x);

numberList.forEach(print);
