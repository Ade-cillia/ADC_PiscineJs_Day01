function pocketMoney(coins){
    let objectifFind = {
        "stop":false,
        "objectif":0
    };
    let testNum = false;
    let sumAll= coins.reduce((a,b)=> a+b);
    
    for (let i = 1; i <= sumAll; i++) {
        
        if (!objectifFind["stop"]) {
            testNum = false
            for (let j = 0; j < coins.length; j++) {
                if (!testNum) {
                    objectifFind = searchCombine(coins.filter((_,key) => key !== j),0,i)
                    if (!objectifFind["stop"]) {
                        testNum=true;
                    }
                }
                
            }
            console.log(objectifFind)
        } else if(objectifFind["stop"]) {
            return objectifFind["objectif"];
        }    
    }
    return sumAll+1;
}
function searchCombine(array,sum,objectif){
    let remontada = false;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        sum=sum+array[i]
        console.log("sum="+ (sum) );
        if (sum == objectif) {
            console.log("sum=oui");
            remontada=true;
            return {
                "stop":false,
                "objectif":objectif
            };
        }
    }
    if (array.length == 1 && !remontada) {
        return {
            "stop":true,
            "objectif":objectif
        };
    } 
    sum=0
    return searchCombine(array.filter((_,key) => key !== 0),sum,objectif);
}

//let coins = [ 1,2,3,4,5];
//console.log(pocketMoney(coins));

exports.pocketMoney =  pocketMoney;
