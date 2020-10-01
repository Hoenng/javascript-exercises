const reverseString = function(forWord) {
 var splitWord = forWord.split("");
 var reverseWord = splitWord.reverse();
 var joinWord = reverseWord.join("");
 return joinWord;
}

module.exports = reverseString
