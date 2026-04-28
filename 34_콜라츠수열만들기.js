function solution(n) {
    let arr = [];

    do {
        if(n % 2 === 0) {
            arr.push(n)
            n = n / 2;
        } else {
            arr.push(n)
            n = 3 * n + 1;
        }
    } while( n !== 1 ) {
        if (n == 1) arr.push(n);
    }

    return arr
}

