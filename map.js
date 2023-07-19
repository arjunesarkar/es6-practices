const num = [3, 6, 9, 7, 8];
// const output = [];
// for(let i=0; i<num.length; i++){
//     const element = num[i];
//     const result = element*element;
//     output.push(result);
// }
// const result = num.map(function(element){
//     return element*element;
// })

const result = num.filter(x => x>5);
console.log(result);