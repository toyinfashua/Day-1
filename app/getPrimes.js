function getPrimes(n) {
    for ( var i = 2; i < n; i++ ) {
        if ( n % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( getPrimes(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);