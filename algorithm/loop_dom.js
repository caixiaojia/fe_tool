(function () {
	var treeDom = function (node, func) {
		func(node);
		node = node.firstChild; // 垂直遍历
		while(node) {
			this.arguments.callee(node, func); // 横向遍历
			node = node.nextSibling;
		}
	}
})()
