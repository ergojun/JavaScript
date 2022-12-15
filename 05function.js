// can call function before statement
foo();

function foo (a) {
    console.log( a );
}


//return value
function f1(){};

function bar(){
    return "";
};

f1();      // -> undefined
bar();      // -> ""


//----------------------------------------------------
// Arrow function
// () => {...}

// for exemple
const f2 = x => {
    x++;
    return x*x;
}

const hello = () => { console.log( 'log' ); }
hello();

// equles the follow
const f3 = function(x) {
    x++;
    return x*x;
}

console.log( f2(2) );           // 9
console.log( f3(3) );           // 16

//-------------------------------------------------------
function Person() {
    // this point to function person
    this.age = 0;
    setInterval(() => {
        console.log( this === window );
        this.age ++;
    },10000);     // this 1000 is a time , ms
}
let p = new Person();
setInterval (function() {
    console.log( p.age );
},1000);

