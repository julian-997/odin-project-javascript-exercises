const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    string = string.replace(/\s+/g,'');
    string = string.toLowerCase();
    let reverseString = '';
    //console.log(string);
    stringArray = string.split('');
    for (let i = stringArray.length - 1; i >= 0; i--){
        reverseString = reverseString + stringArray[i];
        //console.log(reverseString);
    }
    if (string === reverseString) {
        return true;
    }
    else {
        return false;
    }
};

//palindromes('Animal loots foliated detail of stool lamina.');
// Do not edit below this line
module.exports = palindromes;