function solution(num_list) {
    let even = '', 
        odd = '';

    num_list.forEach((ele)=>{
        if(ele % 2 === 0)  even+=ele.toString() 
            // 반복문 내에서 문자열을 계속해서 생성하기 때문에 성능이 02보다 좋지 않다
        else  odd+=ele.toString()
    })
    // forEach를 사용하여 방법도 내부 조건문 처리도 간단.

    return Number(even)+Number(odd)
}