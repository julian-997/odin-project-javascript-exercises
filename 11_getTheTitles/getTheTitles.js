const getTheTitles = function(books) {
    let titles = [];
    i = 0;
    for (let book in books){
        titles.push(books[i].title);
        i++;
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
