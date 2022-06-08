for (let i = 0; i < 7; i += 1) {
    const hashes = "#######";
    const triangleRow = hashes.substring(0, i+1)
    console.log(triangleRow);
}


for (let i = 0; i < 100; i ++) {
    const number = i+1;
    if ( (number % 3) == 0 ) {
        console.log("Fizz");
    } else if ( (number % 5) == 0 ) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

let chessBoard = "";
let gridQuantity = 8;

for (let i = 0; i < gridQuantity; i ++) {
    for (let j = 0 ; j < gridQuantity; j++) {
        if ((i+j) % 2 == 0) {
            chessBoard += "#"
        } else {
            chessBoard += " "
        }
        if((j+1) % gridQuantity == 0) {
            chessBoard += "\n";
        }
    }
}

console.log(chessBoard);