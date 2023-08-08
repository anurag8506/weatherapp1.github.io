const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#srch');
searchBtn.addEventListener('click', function () {
	var input = document.querySelector('#srch').value;
	getWeather(input);
	// srch.placeholder = 'Search';
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebd6032410msha5bf919b3461394p1cd8c3jsn3c3c8a66fd7b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


// console.log(input.value);
const getWeather = (city) => {
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then(response => {
			// console.log(response);

			feels_like.innerHTML = response.feels_like + '°C';
			humidity.innerHTML = response.humidity + '%';
			max_temp.innerHTML = response.max_temp + '°C';
			min_temp.innerHTML = response.min_temp + '°C';
			wind_speed.innerHTML = response.wind_speed + 'Km/h';
			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp + '°C';
			cityName.innerHTML = `${city.toUpperCase()}`;
		})
		.catch(err => console.error(err));
}

var dt = new Date();
// document.getElementById('day').innerHTML = dt.getDay().toUpperCase();
document.getElementById('date1').innerHTML = dt;
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

document.getElementById('day1').innerHTML = `${day}`;
