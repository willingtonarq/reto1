function calculatePrimeNumber(){
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        
    }

    if (isPrime) {
        result.innerHTML = num + " is a prime number.";
    } else {
        result.innerHTML = num + " is not a prime number.";
    }
}