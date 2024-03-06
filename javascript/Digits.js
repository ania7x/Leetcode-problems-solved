/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10) return num;
   const lastDigit = num % 10;
   const remainingNum = Math.floor(num / 10);
   return addDigits(lastDigit + addDigits(remainingNum)); 
};
