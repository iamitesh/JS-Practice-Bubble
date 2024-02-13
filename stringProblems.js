const str = "JS is an interesting game";

//reverse each word in the string
const reverseStr = (str) => {
    let strArr = str.split(' ');
    strArr = strArr.map(element => {
        return element.split('').reverse().join('')
    });
    return strArr.join(' ')

}
console.log(reverseStr(str));

const customReverseStr = (str) => {
    const words = [];
    let currentWord = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' ') {
            currentWord += str[i];
        }
        else {
            reverseWord = ''
            for (let j = currentWord.length-1; j >= 0; j--) {
                reverseWord += currentWord[j]
            }
            words.push(reverseWord)
            currentWord = ''
        }
    }
    let reversedLastWord = '';
    for (let j = currentWord.length - 1; j >= 0; j--) {
        reversedLastWord += currentWord[j];
    }
    words.push(reversedLastWord);
    return words.join(' ')
}

console.log(customReverseStr(str))
