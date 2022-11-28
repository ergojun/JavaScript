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

// equles the follow
const f3 = function(x) {
    x++;
    return x*x;
}

console.log( f2(2) );           // 9
console.log( f3(3) );           // 16

//-------------------------------------------------------

