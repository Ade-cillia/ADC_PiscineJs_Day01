function runLengthEncoding(string) {
    let encodedString="";
    let nbLetter;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i-1]) {
            nbLetter+=1;
        } else if (string[i] != string[i-1]){
            nbLetter=1;
        }
        if (nbLetter==9 || !string[i+1] || string[i] != string[i+1]) {
            //encodedString+= (nbLetter==1)?string[i]:nbLetter+string[i]
            encodedString+= nbLetter+string[i]
            nbLetter=0;
        }
    }
    return encodedString;
}

const string = "AAAAYAAaAAAAAABBCCCCDDY"
console.log(runLengthEncoding(string))

exports.runLengthEncoding = runLengthEncoding;