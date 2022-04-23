const bangladesh = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = bangladesh.split(' ');
// result : [ 'Amar', 'Sonar', 'Bangla', 'Ami', 'Tomai', 'Valobashi' ]
const withoutA = bangladesh.split('a');
// result : [
//  [ 'Am',       'r Son',
//   'r B',      'ngl',
//   ' Ami Tom', 'i V',
//   'lob',      'shi'
// ]
const smallSlice = bangladesh.slice(5, 13);
// result : Sonar Ba // 5 theke suru kore 13 ager sonkha pawa jabe
const anotherPart = bangladesh.substr(11, 6);
// result : Bangla  sbustr sue kore amra koto number index theke suru korbo, than koto sonkha pojonto count korbo seta khuje dibe.
const AnotherPart = bangladesh.substring(11, 15);
// result : substring diye amara kono kisur man koto number index theke suru hobe , than koto number index ar age pojonto print hobe seta dekhano holo Bang

// console.log(AnotherPart);
// sob gulo mathord k check korty amra just console a variable ta change kore try korbo.

const first = "amar";
const second = "city";
// amra caile ai vabe kono array k jora lagate pari
// const result = first + second;
// console.log(result);

const fullString = first.concat(second).concat('any variable add').concat('jahangir alam joy');
// result : amarcityany variable addjahangir alam joy
console.log(fullString);