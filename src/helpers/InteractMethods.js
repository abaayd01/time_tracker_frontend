class InteractMethods {
	resize(event, resizeBar, resizeBox) {
		resizeBox.style.height =
			event.pageY - resizeBox.getBoundingClientRect().bottom + 'px';
	}

	stopResize() {
		window.removeEventListener('mousemove', this.resize);
	}

	onResizeMove(event) {
		const target = event.target;
		const dy = event.clientY - event.clientY0;
		const snapped_dy = this.round(dy, 50);

		if (prev_dy !== snapped_dy) {
			target.setAttribute('data-prev_dy', snapped_dy);
			let y = parseFloat(target.offsetHeight);
			target.style.height = y + snapped_dy + 'px';
			target.setAttribute('data-y', y);
		}
	}

	round(number, roundingInterval) {
		let roundedNumber;

		const remainder = number % roundingInterval;
		const roundingQuotient = Math.abs(roundingInterval / remainder) - 1;

		if (roundingQuotient <= 1) {
			roundedNumber = this.roundUp(number, roundingInterval, remainder);
		} else {
			roundedNumber = this.roundDown(number, remainder);
		}

		return roundedNumber;
	}

	roundUp(number, roundingInterval, remainder) {
		if (number < 0) {
			return number - (roundingInterval + remainder);
		}

		return number + (roundingInterval - remainder);
	}

	roundDown(number, remainder) {
		return number - remainder;
	}
}

export default new InteractMethods();
