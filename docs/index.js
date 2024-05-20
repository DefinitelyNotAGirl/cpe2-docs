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
	<span class="header-item inactive"><a href="./compiler.html" target="_blank">Compiler</a></span>
	<span class="header-item inactive">
	<a href="https://github.com/users/DefinitelyNotAGirl/projects/1" target="_blank">
	<img src="../media/github/github-mark-white.svg" alt="github"></img>
	</a>
	</span>
	</span>
	`;
}


function getElementVisibilityRatio(element) {
    // Get the element's bounding rectangle
    const rect = element.getBoundingClientRect();

    // Get the window height and width
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Calculate the element's height and width
    const elementHeight = rect.bottom - rect.top;
    const elementWidth = rect.right - rect.left;

    // Determine the visible height of the element
    const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));

    // Determine the visible width of the element
    const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));

    // Calculate the total area of the element
    const elementArea = elementHeight * elementWidth;

    // Calculate the visible area of the element
    const visibleArea = visibleHeight * visibleWidth;

    // Return the ratio of visible area to the total area
    return elementArea > 0 ? visibleArea / elementArea : 0;
}

function onctscroll() {
    const codeElements = document.getElementsByClassName('anim-hscroll');
	for(let i = 0;i<codeElements.length;i++)
	{
		let element = codeElements.item(i);
		const visibilityRatio = getElementVisibilityRatio(element);
		//. smooth in-out:
//		element.style.opacity = visibilityRatio;
//		element.style.marginLeft = ""+(4-(2*(visibilityRatio)))+"vw";
		//. sudden threshold-based in:
		if(visibilityRatio >= 0.5)
		{
			element.style.opacity = 1;
			element.style.marginLeft = "7vw";
		}
		else if(visibilityRatio == 0.0)
		{
			element.style.opacity = 0;
			element.style.marginLeft = "10vw";
		}
	}
}

const contentContainer = document.getElementById('content');
// Check if the container exists
if (contentContainer) {
    // Add an event listener for the 'scroll' event
    contentContainer.addEventListener('scroll', onctscroll);
} else {
    console.error('Element with ID "content" not found.');
}
	