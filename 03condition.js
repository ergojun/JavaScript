//break will jump out the circle, if there is no break , programm will judg continue
let condition = 1
switch ( condition ){
    case "1":
        console.log( "1" );
        break;
    case 1 :
        console.log( 1 );
        // no break there , will run continue
    case 2 :
        console.log( 2 );
    default:
        console.log( "noting to choese" );
        break;     
}


//--------------------------------------------------------------------
//for in
let object = {
    first: "hello",
    second: "world",
    last: "I am DLSD"
}

for ( let prop in object ) {
    console.log( object[prop] );
}

//for of
for ( let value of [ 1,2,3 ] ) {
    console.log( value );
}

let interable = new Map( [["a",11], ["b",22], ["c",44]] );
for ( let [key, value] of interable) {
    console.log( value );
}