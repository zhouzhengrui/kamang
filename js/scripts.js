// href跳转
mui('body').on('tap', 'a', function() {
	document.location.href = this.href;
});
