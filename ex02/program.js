function pocketMoney(coins){
    let objectifFind = {
        "stop":false,
        "objectif":0
    };
    let testNum = false;
    let sumAll= coins.reduce((a,b)=> a+b);
    coins.sort((a,b)=>a-b)
    for (let i = 1; i <= sumAll; i++) {
        if (!objectifFind["stop"]) {
            //console.log(i)
            testNum = false
            for (let j = 0; j < coins.length; j++) {           
                if (!testNum) {
                    objectifFind = searchCombine(coins.filter((_,key) => key !== j),coins[j],i)
                    if (!objectifFind["stop"]) {
                        testNum=true;
                    }
                }
                
            }
            //console.log(objectifFind)
        } else if(objectifFind["stop"]) {
            return objectifFind["objectif"];
        }    
    }
    return sumAll+1;
}
function searchCombine(array,sum,objectif){
    //console.log(sum)
    let remontada = false;
    //console.log(array);
    for (let i = 0; i <= array.length; i++) {
        //console.log("sum="+ (sum) );
        if (sum == objectif) {
            remontada=true;
            return {
                "stop":false,
                "objectif":objectif
            };
        }
        sum=sum+array[i]
    }
    if (array.length == 1 && !remontada) {
        return {
            "stop":true,
            "objectif":objectif
        };
    } 
    sum=array[0]
    return searchCombine(array.filter((_,key) => key !== 0),sum,objectif);
}

//let coins = [ 1,2,3,4,5];
//let coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
//let coins = [1];
//let coins = [1,1];
//let coins = [ 5, 7, 1, 1, 2, 3, 22];
//let coins = [23, 25, 9, 26, 2, 19, 24, 18, 25, 17, 13, 3, 14, 17, 9, 20, 26, 15, 21, 2, 6, 11, 2, 12, 23, 5, 4, 20];
//console.log(pocketMoney(coins));

exports.pocketMoney =  pocketMoney;