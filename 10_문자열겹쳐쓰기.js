function solution(my_string, overwrite_string, s) {
    let mStr = [...my_string];
    let oStr = [...overwrite_string];
    
    for(let j = 0; j < oStr.length; j++) {
        mStr[j+s] = oStr[j]
    }
    
    return mStr.join('')
}