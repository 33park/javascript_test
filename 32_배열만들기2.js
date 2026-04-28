// 제네레이터 함수
// 호출해도 바로 실행되지 않는다
function* gen50() {
    let i = 1;

    //무한루프
    while(true) {
        yield Number(Number(i).toString(2)) * 5;
        // 값을 내보내고 이 상태에서 멈춤
        /**
         * Number(i).toString(2) → 2진수 변환
         * Number(Number(i).toString(2)) → 다시 숫자화
        */
        i++;
    }
}

function solution(l, r) {
    const n = gen50();
    let a = 0;
    const arr = [];

    while(a < l) { 
        a = n.next().value; //next() 호출 시 이어서 실행됨
            //.next().value 반환 객체에서 값만
        console.log('a', a)
    } 
                                        
    while(a <= r) { 
        arr.push(a); 
        a = n.next().value;
        console.log('arr',arr ,'a',a) 
    }

    return arr.length ? arr : [-1];
}