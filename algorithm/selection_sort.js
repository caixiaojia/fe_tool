(function () {
	var selectSort = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					arr[i] = arr[i] - arr[j];
					arr[j] = arr[i] + arr[j];
					arr[i] = arr[j] - arr[i];
				}
			}
		}
		return arr;
	};

	var arr = [1, 3, 0, 10, 8, 2];
	console.log(selectSort(arr));
})()
