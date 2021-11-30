function tabTriCarre(array){
    multipliedArr = [];
    array.forEach(element =>{
        multipliedArr.push(element*element)
    })
    multipliedArr.sort((a,b) =>a-b)
    return multipliedArr
}

array = [1, 2, 3, 4, 5]
console.log(tabTriCarre(array))
exports.tabTriCarre =  tabTriCarre;