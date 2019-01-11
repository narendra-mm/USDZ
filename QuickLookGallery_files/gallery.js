(function () {
	var isRelAR = false;
	var a = document.createElement('a');
	if (a.relList.supports('ar')) {
		isRelAR = true;
	}
	document.documentElement.classList.add(isRelAR ? 'relar' : 'no-relar');
})();
