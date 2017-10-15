(function () {
	var unique = function (arr) {
		var hasTable = {};
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			var key = arr[i];
			if (!hasTable[key]) {
				hasTable[key] = true;
				result.push(key);
			}
		}
		return result;
	}

	var arr = [1, 2, 3, 3, 3];
	console.log(unique(arr));
})();
