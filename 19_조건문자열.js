// operations 객체의 key값에 해당하는 value가 매개변수 2개(n,m) 받는 함수 
const operations = {
	">=": (n, m) => n >= m,
	"<=": (n, m) => n <= m,
	">!": (n, m) => n > m,
	"<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
	const op = operations[ineq + eq];
    console.log(op)
	return Number(op(n, m));
}