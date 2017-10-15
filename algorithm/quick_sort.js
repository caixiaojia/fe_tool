(function () {
	function quickSort(arr) {
		if (arr.length <= 1) {
			return arr;
		}

		var left = [], right = [], base = arr[0];
		for (var i = 1; i < arr.length; i++) {
			if (arr[i] > base) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return [].concat(quickSort(left), [base], quickSort(right));
	}

	var arr = [1, 3, 2, 20, 3, 42, 22];
	console.log(quickSort(arr));
})()
