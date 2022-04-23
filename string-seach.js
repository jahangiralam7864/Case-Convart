const products = [
    'dell hardcore i19 200gb laptop',
    'iphone amar onek posondo',
    'black color amar onek posondo',
    'hallo bangladesh',
    'phone amar valo lage na kamon lage bolo to'
];
const searching = 'laptop';
// indexOf diye j contant search kora hobe shudu sei sonkha search kore return korbe

const output = [];
for (const product of products){
    if (product.toLowerCase().indexOf(searching .toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);

// kono array jodi sob gulo document print korty cai taile amra includes use korbo
const output = [];
for (const product of products){
    if (product.toLowerCase().includes(searching .toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);

// startWirh same kaj kore thake includes ar moto
const output = [];
for (const product of products){
    if (product.toLowerCase().startsWith(searching .toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);