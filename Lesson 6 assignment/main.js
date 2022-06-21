const API_KEY = "1d9a9fd21cec6a6b1878ae87e13a063c";
const url =  `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=${API_KEY}`;

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));