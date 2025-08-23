import '@testing-library/jest-dom/vitest';

if (typeof window.HTMLDialogElement === 'undefined') {
	// @ts-expect-error
	window.HTMLDialogElement = class extends HTMLElement {};
}

window.HTMLDialogElement.prototype.showModal = function () {
	this.setAttribute('open', '');
};

window.HTMLDialogElement.prototype.close = function () {
	this.removeAttribute('open');
	this.dispatchEvent(new Event('close'));
};
