//Method 1
// function toUpper(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(word) {
//             return word[0].toUpperCase() + word.substr(1);
//         })
//         .join(' ');
//      }
//      console.log(toUpper("a lazy fox"))

// Method 2

function capitalize(str) {
    const words = []

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}
console.log(capitalize("a lazy fox"))
