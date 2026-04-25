function solution(code) {
	let ret = [];
	let mode = false; //0
	let arr = [...code];

	for (let idx = 0; idx < arr.length; idx++) {
		if (mode == false) {
			if (arr[idx] != "1") {
				if (idx % 2 == 0) ret.push(arr[idx]);
			} else if (arr[idx] == "1") {
				mode = !mode;
			}
		} else {
			if (arr[idx] != "1") {
				if (idx % 2 != 0) ret.push(arr[idx]);
			} else if (arr[idx] == "1") {
				mode = !mode;
			}
		}
	}

    let answer = ret.join("").trim();
    
    return answer == "" ?  "EMPTY" : answer

}
