function min (value1, value2) {
    return (value1 === value2) ? "valor 1 y valor 2 son iguales" :
    (value1 < value2) ? value1 : value2
}
console.log(min(0, 0));

function isEven(number) {
    if(number >= 0) {
        if(number === 0) {
            return true
        } else if (number === 1) {
            return false;
        } else {
            return isEven(number - 2);
        }
    } else {
        return "Negative number"
    }
}
console.log(isEven(10))

function countBs(word) {
    let counter = 0;
    for(let count = 0; count < word.length; count++) {
        if (word[count] === "B")
            counter++
    }
    return counter;
}

function countChar(word, char) {
    let counter = 0;
    for(let count = 0; count < word.length; count++) {
        if (word[count] === char) counter++
    }
    return counter;
}

console.log(countChar("BBCB", "C"));
