module.exports = function reverse (n) {
    let a=Math.abs(n);
    return (String(a)).split('').reverse().join('');
  
}
