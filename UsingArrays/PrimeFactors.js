var prompt = require('prompt-sync')();
console.log("ENTER THE NUMBER");
var integer = prompt();
var primeArray = new Array();
let isPrime;
for (i = 2; i < integer/2; i++) {
  if (integer % i == 0) {

    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
    if (isPrime == true) {
      integer /= i
      primeArray.push(i);
    }
  }
}

for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}
