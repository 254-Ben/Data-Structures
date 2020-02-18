// write a function that accepts a positive number N.
// The function should consol log a pyramid shape
// with N levels using the # charcter. Make sure the
// pyramid has spaces on both the left *and* right hand sides
// ---Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//      ' # '
//      ' ###'
//   pyramid(3)
//      ' # '
//      ' ### '
//      '#####'
// Method 1
// function pyramid(n) {

//     for(let i=1; i<= n; i++){
  
//       let str = ' '.repeat(n-i);
  
//       let str2 = '#'. repeat(i*2 -1)
  
//       console.log(str + str2 + str);
  
//     }
  
//   }
//   pyramid(3);

//Method 2
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)

    for (let row = 0; row < n; row ++) {
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level);
    }
}
pyramid(10);