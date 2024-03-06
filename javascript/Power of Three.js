/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n===1) return true;
    while(n/3!==1){
        n=n/3;
        if(n<3 && n>-3) return false;
    }
    return true;
    
};
