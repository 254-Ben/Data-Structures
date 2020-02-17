// Method 1
//function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
 //   stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

//    return sortString(stringA) === sortString(stringB)
//}

/*This function sorts the strings*/ 
//function sortString(string) {
 //   return string.split('').sort().join('');
//}
//console.log(anagrams('rai=l saf-ety', 'fai)ry $%tales'));

// Method 2

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str) {
//     return str
//     .replace(/[^w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
// }
// console.log(anagrams('rai=l saf-ety', 'fai)ry $%tales'));

//  Method 3

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}
console.log(anagrams('rai=l saf-ety', 'fai)ry $%tales'));
