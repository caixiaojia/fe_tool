(function () {
	var bubleSor = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				// 和插入排序不同，这个是每次取出一个最大的放在第一个位置
				if(arr[i] > arr[j]) {
					arr[i] = arr[i] - arr[j];
					arr[j] = arr[j] + arr[i];
					arr[i] = arr[j] - arr[i];
				}
			}
		}
		return arr;
	}
	var arr = [1, 3, 2, 20, 3, 42, 22];
	console.log(bubleSor(arr));
})()
