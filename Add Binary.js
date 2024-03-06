/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);//toString with base 2 a sum of 2 large integers that are binary 
  //hence 0b at the start

    
};
