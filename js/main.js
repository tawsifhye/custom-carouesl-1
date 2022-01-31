const span = document.getElementsByTagName('span');
const product = document.getElementsByClassName('product')
const product_page = Math.ceil(product.length / 4);
let numberOfDots = Math.ceil(product.length / 4);
const dots = document.getElementById('dots')
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

while (numberOfDots >= 0) {
	const dot = document.createElement('div');
	dots.appendChild(dot);
	numberOfDots--;

}

const right_mover = () => {
	l = l + movePer;
	if (product == 1) { l = 0; }
	for (const i of product) {
		if (l > maxMove) { l = 0; }
		i.style.left = '-' + l + '%';

	}

}
const left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }

// setInterval(right_mover, 2000)

const initializeSlider = (interval, nav) => {
	if (nav) {
		span[0].style.display = 'inline-block'
		span[1].style.display = 'inline-block'
	}
	setInterval(right_mover, interval)
}

initializeSlider(interval = 5000, nav = true);