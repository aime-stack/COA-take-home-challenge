function transformString(input) {
    const length = input.length;

    if (length % 3 === 0 && length % 5 === 0) {
        return reverseString(asciiEncode(input));
    } else if (length % 3 === 0) {
        return reverseString(input);
    } else if (length % 5 === 0) {
        return asciiEncode(input);
    } else {
        return input;
    }
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function asciiEncode(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

// Get user input
const userInput = prompt("Enter a string:");
const transformedString = transformString(userInput);

console.log("Transformed String:", transformedString);
