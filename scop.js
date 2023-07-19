const bonus = 10;

function sum(fitst, secound){
    const result = fitst + secound + bonus;
    // console.log(bonus);
    if(result>9){
        console.log('happy');
    }
    return result;
}
const value = sum(5,7);
// console.log(value);