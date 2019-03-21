module.exports = function getZerosCount(number, base) {
  function getAllFactorsFor(base) {
    var factors = [];
    for (i = 2; i <= base; i++) {
      while ((base % i) === 0) {
        factors.push(i);
        base /= i;
      }
    }
  return factors;
}

  let baseFactors = getAllFactorsFor(base);
  let maxFactor = Math.max(...baseFactors);

  for (sum = 0, i = 1;  ; i++) {
    if (Math.floor( number / Math.pow(maxFactor, i) ) == 0) break;
    sum += Math.floor( number / Math.pow(maxFactor, i) );
  }

  for (i = 0, counter = 0; i < baseFactors.length; i++) {
    if (baseFactors[i] == maxFactor) counter++;
  }

  return Math.floor(sum / counter);  
}