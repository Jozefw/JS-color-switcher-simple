document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('greyButton').onclick = switchGrey;

function switchGrey() {
	setClass('body', 'greyBackground');
}

function switchBlue() {
	setClass('body', 'blueBackground');
}

function switchRed() {
	setClass('body', 'redBackground');
}

function switchYellow() {
	setClass('body', 'yellowBackground');
}

function setClass(tagName, className) {
	document.getElementsByTagName(tagName)[0].className = className;
}