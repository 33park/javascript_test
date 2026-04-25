function solution(a, d, included) {
    let res = 0;
    for(let i = 0; i < included.length; i++) {
        if(included[i] == true) {
            res+=(a+(i*d));
        }
    }

    console.log(res)
    return res
}