function validIPAdresses(string) {
    let ipArr = [];
    let ip;
    for (let i = 0; i < 3; i++) {
        for (let j = i+1; j <= i+3; j++) {
            for (let k = j+1; k < j+3+1; k++) {
                ipFirst = string.slice(0,i+1);
                ipSecond = string.slice(i+1,j+1);
                ipThird = string.slice(j+1,k+1);
                ipFourth = string.slice(k+1);
                if (ipFirst <= 255 && ipSecond <= 255 && ipThird <= 255 && ipFourth <= 255) {
                    if (ipFirst != "" && ipSecond != "" && ipThird != "" && ipFourth != "") {
                        if (!(ipFirst[1] && ipFirst[0] == 0) && !(ipSecond[1] && ipSecond[0] == 0) && !(ipThird[1] && ipThird[0] == 0) && !(ipFourth[1] && ipFourth[0] == 0)) {
                            ip = ipFirst+"."+ipSecond+"."+ipThird+"."+ipFourth;
                            ipArr.push(ip);
                        }
                    }
                }
            }
        }
    }
    return ipArr
}

const string = '255255255255';
console.log(validIPAdresses(string));

// Merci de ne pas effacer la ligne en dessous.
exports.validIPAddresses = validIPAdresses;