function firstDuplicateValue(array){
    let stockedInt=[];
    for (let i = 0; i < array.length; i++) {
        if (stockedInt.indexOf(array[i]) !== -1) {
            return (array[i]);
        }
        stockedInt.push(array[i]);
    }
    return -1
}

//array = [ 1, 2, 3, 4, 5, 2];
//console.log(firstDuplicateValue(array));

exports.firstDuplicateValue =  firstDuplicateValue;