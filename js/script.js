'use strict'
const deg = 6; // 6градусов = 1секунда
const month = document.querySelector('#month');
const date = document.querySelector('#date');
const antePost = document.querySelector('#am-pm');
const time = document.querySelector('#numbers');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

setInterval(() => {
	let day = new Date();
	let currentDate = day.getDate();
	let currentMonth = day.getMonth();
	let currentHours = day.getHours();
	let currentMinutes = day.getMinutes();
	let session = 'AM';
	let hourHand = currentHours * 30;
	let minuteHand = currentMinutes * deg;
	let secondHand = day.getSeconds() * deg;


	if (currentHours == 0) {
		currentHours = 12;	
	}

	if (currentHours > 12) {
		currentHours -= 12;

		session = 'PM';
	}

	month.textContent = monthName[currentMonth];
	date.textContent = createZero(currentDate);
	antePost.textContent = session;
	time.textContent = createZero(currentHours) + '.' + createZero(currentMinutes);
	hours.style.transform = `rotateZ(${hourHand + (minuteHand / 12)}deg)`;
	minutes.style.transform = `rotateZ(${minuteHand}deg)`;
	seconds.style.transform = `rotateZ(${secondHand}deg)`;
})

function createZero(number) {
	return (number < 10) ? '0' + number : number;
}
