(function () {
	function insertSort(arr) {
		for (var i = 0; i < arr.length; i++) {
			var tmp = arr[i];
			var j = i;
			while(j >= 0 && tmp < arr[j - 1]) {
				// 递增往后移动
				arr[j] = arr[j - 1];
				j --;
			}
			arr[j] = tmp;
		}
		return arr;
	}
	var arr = [1, 3, 2, 20, 3, 42, 22];
	console.log(insertSort(arr));
})();
