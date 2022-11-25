try {
    a
} catch (err) {
    console.log( err.log );
}finally{
    //what ever happen , finally will execute
    console.log( "finally" );
}

try {
    let x = document.getElementById('test').ariaValueMax;
    if ( x == '' ) throw 'empty';
    if ( isNaN(x)) throw 'not a number';
    if ( x > 10 ) throw 'too high';
    if ( x < 5 ) throw 'too low';
}catch ( err ) {
    console.log( err.log );
}

