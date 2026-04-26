function solution(arr, queries) {

    queries.forEach((ele) => {
        let [i,j] = ele;
        let [a,b] = [arr[i], arr[j]];
        arr[i] = b;
        arr[j] = a;
    });

    return arr
}
