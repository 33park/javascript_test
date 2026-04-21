const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, //사용자의 입력을 받겠다
    output: process.stdout //출력할 곳(콘솔)
}).on('line', (input) => { //'line' 이벤트, 사용자가 엔터를 칠 때마다 한줄 입력됨
    console.log(input);
});
/**
 * [참고] https://sj921.tistory.com/63
*/


rl.question('What is your name? ', (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});
