const product = [
    'dell hardcore i19 200gb laptop',
    'iphone amar onek posondo',
    'black color amar onek posondo',
    'hallo bangladesh',
    'phone amar valo lage na kamon lage bolo to'
];
const searching = 'laptop';
// indexOf
const output = [];
for (const product of products){
    if (product.to>toLowerCase().indexOf(searching .toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);