/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var t = n.toString(2).split("");
    num= t.reduce((total,x) => total+(x==1), 0)
    return num;
};
