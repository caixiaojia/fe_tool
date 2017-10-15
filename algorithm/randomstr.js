(function () {
	function randomStr(n) {
		var template = 'abcdefghijklmnopqrstuvwxyz9876543210';
		var result = '';
		for (var i = 0; i < n; i++) {
			result = result + template.charAt(Math.floor(Math.random() * template.length));
		}
		return result;
	}

	console.log(randomStr(3));
})()
