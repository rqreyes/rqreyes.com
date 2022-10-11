const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const currentTime = new Date();

	const seconds = currentTime.getSeconds();
	const secondsDeg = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDeg}deg)`;

	const minutes = currentTime.getMinutes();
	const minutesDeg = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

	const hours = currentTime.getHours();
	const hoursDeg = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();