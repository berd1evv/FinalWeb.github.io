let weather = {
    apiKey: "09319dab968b741658a21cc2ba239648",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("There is no such a city");
            throw new Error("There is no such a city");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name, country } = data.city;
      const { icon, description } = data.list[0].weather[0];
      const { temp, humidity } = data.list[0].main;
      const { speed } = data.list[0].wind;
      const {lon, lat} = data.city.coord;


      document.querySelector(".city").innerText = "Weather in " + name + ", " + country;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".description").innerText = description[0].toUpperCase() + description.slice(1);
      document.querySelector(".temp").innerText = temp  + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
      document.querySelector(".lon").innerText = "Longtitude: " + lon;
      document.querySelector(".lat").innerText = "Latitude: " + lat;
    },

    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    document.querySelector(".search-bar").value = ""
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
        document.querySelector(".search-bar").value = ""
      }
    });
  
  weather.fetchWeather("Bishkek");