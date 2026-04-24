function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let res = 0;
    
    if(n % 2 === 0) {
        arr.forEach((ele)=>{ 
            if(ele % 2 === 0) res+=(ele**2);
        })
        return res
    } else {
        arr.forEach((ele)=>{ 
            if(ele % 2 !== 0) res+=ele;
        })
        return res
    }
}
