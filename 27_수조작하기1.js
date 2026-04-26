const translate = {
	w: 1,
	s: -1,
	d: 10,
	a: -10,
};

function solution(n, control) {
	let sum = n;
	[...control].forEach((ele) => {
		sum += translate[ele];
	});

	return sum;
}