const repeatString = function(inWord, repeat) {
    if (repeat < 0) return 'ERROR';
    
    let string = ''
    for (x =1; x <= repeat; x++) {
        string+= inWord
        }
        return string;
        
}

module.exports = repeatString
