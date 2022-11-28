// closure is which can visit free variable

let a = 1;      //free variable

function foo() {
    console.log( a );
}

foo();   // 1

//------------------------------------------------------------
(function () {
    let a = 2;
    foo();     // 1
})();

//------------------------------------------------------------
let foo1 = function() {
    let a = 1;
    return {
        add: function(){
            return ++a;             //now a = 2
        },
        sub: function(){
            return --a;             //now a = 1
        }
    }
}

let f = foo1();
console.log( f.add() );           // 2
console.log( f.sub() );           // 1

//------------------------------------------------------------------
let data = [];
for ( let i = 0; i < 3; i++) {
    data[i] = function (){
        console.log(i);
    };
}

console.log( data[0]() );       //3
console.log( data[1]() );       //3
console.log( data[2]() );       //3
console.log( "------------------------------------------------------" );

//-------------------------------------------------------------------
for ( let i = 0; i < 3; i++) {
    data[i] = (function(x) {
        return function () {
            alert(i);
        };
    })(i);                  // input value of i
}
console.log( data[0]() );       //1
console.log( data[1]() );       //2
console.log( data[2]() );       //3