const clock = document.querySelector(".clock");
const dateContainer = clock.querySelector(".date");
const timeContainer = clock.querySelector(".time");
const detailsContainer = clock.querySelector(".details");

function updateTime() {
  let date = new Date();
  let optionsDate = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  dateContainer.innerHTML = date.toLocaleDateString("en-gb", optionsDate);
  timeContainer.innerHTML = date.toLocaleTimeString("en-gb", optionsTime);
}
const updateInterval = 1000;
setInterval(updateTime, updateInterval);

// function getWeather() {
//   fetch("https://api.oceandrivers.com/v1.0/getAemetStation/madrid/lastdata/")
//     .then((response) => response)
//     .then((data) => {
//       console.log(data);
//     });
// }
// const updateWeatherInterval = 60000;
// setInterval(getWeather, updateWeatherInterval);
