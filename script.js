function weatherChange(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = "📍" + response.data.city;
}
function submitCity(city) {
  let apiKey = "3o0f81ct132b1a0b35fd66fb04863244";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(weatherChange);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  submitCity(searchInput.value);
}
let selectButton = document.querySelector("#search-form");
selectButton.addEventListener("submit", searchCity);

submitCity("Nairobi");
