const sumAll = function(num1, num2) {
    let sum = 0;
    
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }

    if (typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "ERROR"
    }

    for (let i = 0; i <= Math.abs(num2 - num1); i++){
        if (num2 > num1){
            sum = sum + (num1 + i);
        }
        if (num2 < num1){
            sum = sum + (num2 + i);
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
