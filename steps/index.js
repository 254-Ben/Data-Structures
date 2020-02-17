// function steps(n) {
//     let step = ''
//     for (i = 0; i < n; i++) {
//         console.log(step+= 2)
//     }
// }
// steps(3)

function steps(n, i = 1) {
    if (i > n) {
        return;
    }
    console.log('#'.repeat(i) + ' '.repeat(n - 1))
    steps(n, i + 1)
}
console.log(steps(3))