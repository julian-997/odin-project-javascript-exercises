const fibonacci = function(num) {
    let fibonacciArray = [0, 1];

    if (typeof(num) === "string"){
        num = parseInt(num);
    }
    if (num >= 0){
        for (let i = 2; i <= num; i++){
            fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
        }
        return fibonacciArray[num];
        console.log(fibonacciArray);
    }
    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
