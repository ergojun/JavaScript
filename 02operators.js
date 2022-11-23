// + - * /
console.log( 1 + 1 );       // 2
console.log( 3 - 1 );       // 2
console.log( 2 * 3 );       // 6
console.log( 10 / 4);       // 2.5

//---------------------------------------------------------
//power operation
console.log( 2 ** 3 );      // 8

// % 
console.log( 10 % 4 );      // 2

//---------------------------------------------------------
//Structure assignment
// array structure assignment
let [a,b,c] = [1,2,3];
console.log(c);                     // 3

// object structure assignment
let {foo, bar} = {
    foo: 'foostr',
    bar: 'barstr'
}

console.log(foo);                   // foostr

// string structure assignment
let [ d,,,,e ] = "hello";
console.log(d);                     // h
console.log(e);                     // o

//---------------------------------------------------------
//Bit arithmetic
//oneNote have more detail about bit arithmetic
//原码反码补码 true code； one's complement code；complement code；
//positive number one's complement code complement code is themselft
//negative number one's complement code is anti- except symbol bit;
//negative number complement code is one's complement +1
//原码变补码：按位取反+1
//补码变原码：按位取反+1 （符号位不变）
console.log( 7&5 );                    // 5; 111 & 101 -> 101 
console.log( 2|1 );                    // 3; 10 | 1 -> 11
console.log( ~3 );                    // -4; 0000 0011(补码) -> 按位非 -> 1111 1100(补码) -> 转原码 -> 1000 0100(原码)
//you can calculat bitwise not by '-(x + 1)' for example: ~3 -> -(3 + 1) = -4
console.log( 7^5 );                   // 2; 111 ^ 101 -> 010
console.log( 3<<2 );                  // 12; 0011 << 2 -> 1100 (left move 2 bit)
console.log( 7>>2 );                  // 1; 0111 >> 2 -> 0001 (right move 2 bit)
console.log( 6>>>2 );                 // 1; 0110 >>> 2 -> 0001 (right move 2 bit)