$(document).ready(function() {

    function SendData(city) {

        var ct = $(".search-bar").val();
        if (city === 1) {
            city = "Bishkek"
        }else {
            city = ct
        }
        

        if (city != '') {

            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&APPID=09319dab968b741658a21cc2ba239648",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {

                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var now = new Date(data.list[0].dt_txt);

                    document.querySelector(".city").innerText = "Weather in " + data.city.name + ", " + data.city.country;
                    document.querySelector(".temp").innerText = data.list[0].main.temp + "°C";
                    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
                    document.querySelector(".description").innerText = data.list[0].weather[0].description[0].toUpperCase() + data.list[0].weather[0].description.slice(1);
                    document.querySelector(".humidity").innerText = "Humidity: " + data.list[0].main.humidity + "%";
                    document.querySelector(".wind").innerText = "Wind speed: " + data.list[0].wind.speed + " km/h";
                    document.querySelector(".lon").innerText = "Longtitude: " + data.city.coord.lon;
                    document.querySelector(".lat").innerText = "Latitude: " + data.city.coord.lat;


                    document.querySelector(".first").innerText = data.list[7].main.temp + "°C";
                    document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + "@2x.png";
                    document.querySelector(".date1").innerText = data.list[7].dt_txt.slice(0, -8);
                    var now = new Date(data.list[7].dt_txt);
                    document.querySelector(".bir").innerText = days[now.getDay()];

                    document.querySelector(".second").innerText = data.list[15].main.temp + "°C";
                    document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + "@2x.png";
                    document.querySelector(".date2").innerText = data.list[15].dt_txt.slice(0, -8);
                    var now = new Date(data.list[15].dt_txt);
                    document.querySelector(".eki").innerText = days[now.getDay()];

                    document.querySelector(".third").innerText = data.list[23].main.temp + "°C";
                    document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + "@2x.png";
                    document.querySelector(".date3").innerText = data.list[23].dt_txt.slice(0, -8);
                    var now = new Date(data.list[23].dt_txt);
                    document.querySelector(".uch").innerText = days[now.getDay()];

                    document.querySelector(".fourth").innerText = data.list[31].main.temp + "°C";
                    document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + "@2x.png";
                    document.querySelector(".date4").innerText = data.list[31].dt_txt.slice(0, -8);
                    var now = new Date(data.list[31].dt_txt);
                    document.querySelector(".tort").innerText = days[now.getDay()];

                    document.querySelector(".fifth").innerText = data.list[39].main.temp + "°C";
                    document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png";
                    document.querySelector(".date5").innerText = data.list[39].dt_txt.slice(0, -8);
                    var now = new Date(data.list[39].dt_txt);
                    document.querySelector(".besh").innerText = days[now.getDay()];

                    document.querySelector(".search-bar").value = ""

                    window.onerror = function(msg) {
                        alert(msg);
                    }
                }

            });
        } else {
            alert('Field cannot be empty');
        }


    }
    $('.search-bar').keypress(function(e) {
        if(e.which == 13) {
            SendData();
        }
    })
    $('.search-button').click(function() {
        SendData();
    });

    SendData(1);
})

