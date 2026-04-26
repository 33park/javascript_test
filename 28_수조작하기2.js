function solution(numLog) {
    const convert = {
        '1': 'w', 
        '-1': 's', 
        '10': 'd', 
        '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        console.log(v)
        return convert[v - numLog[i]]
    }).join('')
}