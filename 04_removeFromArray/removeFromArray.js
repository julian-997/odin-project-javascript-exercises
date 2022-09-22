const removeFromArray = function(array, ...remove ) {
    let index;
    for (let item of remove) {
        index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
The function saves the array given as the first argument
in the variable "array".
All other arguments, which are elements to be removed from the array,
are saved in a array named "remove".
The function checks for the index of each item (line 4), and if present (line 5)
splices the array at this index to remove 1 item.
After it went through every item in the "remove" array it returns the modified array.
*/