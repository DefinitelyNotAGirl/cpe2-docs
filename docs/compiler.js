function loadSharedContent() {
	//, ██       ██████   █████  ██████      ██   ██ ███████  █████  ██████  ███████ ██████
	//, ██      ██    ██ ██   ██ ██   ██     ██   ██ ██      ██   ██ ██   ██ ██      ██   ██
	//, ██      ██    ██ ███████ ██   ██     ███████ █████   ███████ ██   ██ █████   ██████
	//, ██      ██    ██ ██   ██ ██   ██     ██   ██ ██      ██   ██ ██   ██ ██      ██   ██
	//, ███████  ██████  ██   ██ ██████      ██   ██ ███████ ██   ██ ██████  ███████ ██   ██
	document.getElementById("header").innerHTML = `
	<img src="../media/logo_jbstyle_small.png" alt="" id="header-logo">
	<span id="title">
	<span id="title-cpe2">C+=2</span>
	<span id="title-version">v0.1.0</span>
	</span>
	<span id="header-right">
	<span class="header-item inactive"><a href="./stdlib.html" target="_blank">Standard Library</a></span>
	<span class="header-item active"><a href="./compiler.html" target="_blank">Compiler</a></span>
	<span class="header-item inactive">
	<a href="https://github.com/users/DefinitelyNotAGirl/c-2" target="_blank">
	<img src="../media/github/github-mark-white.svg" alt="github"></img>
	</a>
	</span>
	</span>
	`;
	//, ██       ██████   █████  ██████      ███████ ██ ██████  ███████ ██████   █████  ██████
	//, ██      ██    ██ ██   ██ ██   ██     ██      ██ ██   ██ ██      ██   ██ ██   ██ ██   ██
	//, ██      ██    ██ ███████ ██   ██     ███████ ██ ██   ██ █████   ██████  ███████ ██████
	//, ██      ██    ██ ██   ██ ██   ██          ██ ██ ██   ██ ██      ██   ██ ██   ██ ██   ██
	//, ███████  ██████  ██   ██ ██████      ███████ ██ ██████  ███████ ██████  ██   ██ ██   ██
	document.getElementById("sidebar").innerHTML = `
	<a class="sidebar-item" href="./compiler-options.html" target="_blank">CLI Reference</a>
	`;
}