var ran = Math.floor(Math.random() * 100) + 1;

let a = prompt("Guess the number between 1 to 100.")

if (ran === a) {
    console.log(true)
}
else{
    console.log(false)
}