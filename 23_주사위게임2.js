const solution = (a, b, c) => {
    const set = new Set([a, b, c]);
    switch ([...set].length) {
        case 1: return calculate([a, b, c], 3);
        case 2: return calculate([a, b, c], 2);
        case 3: return calculate([a, b, c]);
    }
};

const calculate = (inc, n=1) => {
    const [a, b, c] = inc;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i)
    }

    return result;
};

/**
 * 같은 숫자만큼 ((a**=i) + (b**=i) + (c**=i)) 가 증가함
 *
 */
// function solution(a, b, c) {
// 	let res = 1;
// 	let count = 2;

// 	if (a == b && a == c) {
// 		count = 3;
// 	} else if (a != b && a != c && b != c) {
// 		count = 1;
// 	} 

// 	console.log(count);

// 	for (let i = 1; i <= count; i++) {
// 		res *= a ** i + b ** i + c ** i;
// 	}

// 	return res
// }
