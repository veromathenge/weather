function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let selectButton = document.querySelector("#search-form");
selectButton.addEventListener("submit", searchCity);
