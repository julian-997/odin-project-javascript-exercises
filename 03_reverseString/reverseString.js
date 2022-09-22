const reverseString = function(string) {
    if (string == "") {
        return "";
    }
    let newString = string[string.length - 1];
    for (let i = string.length - 2; i >=0 ; i--) {
        newString = newString + string[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
