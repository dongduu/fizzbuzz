
for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("fuzzbuzz");
    } else if (i % 3 === 0) {
        console.log ("fizz");
    } else if (i % 5 === 0) {
        console.log ("buzz");
    } else {
        console.log (i);
    }
}

let array = [];

for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        array.push("fuzzbuzz");
    } else if (i % 3 === 0) {
        array.push("fizz");
    } else if (i % 5 === 0) {
        array.push("buzz");
    } else {
        array.push(i);
    }
}

console.log(array);