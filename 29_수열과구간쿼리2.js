function solution(arr, queries) {
    const result = [];

    queries.forEach(query => {
        const [s, e, k] = query;
        let minVal = Infinity;
        let found = false;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i];
                found = true;
            }
        }

        if (found) {
            result.push(minVal);
        } else {
            result.push(-1);
        }
    });

    return result;
}