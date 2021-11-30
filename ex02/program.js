function pocketMoney(coins){
    coins.sort((a,b)=> a-b);
    let addNum=0;
    for (let i = 0; i < coins.length; i++) {
        if ( coins[i] > addNum+1) {
            return addNum+1
        }
        addNum+=coins[i];
    }
    return addNum+1
}
//let coins = [1,2,3,4,5];
//console.log(pocketMoney(coins));

exports.pocketMoney =  pocketMoney;
