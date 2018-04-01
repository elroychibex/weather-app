
// get location of user
if (navigator.geolocation) { 
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  alert("Geolocation is not supported in your browser");
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude =  position.coords.longitude;
}

//fetch data from API URL
function showPosition(position) {
  var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
  var toggleF = true;

$.getJSON(api, function(data){
    // Getting Weather Details
    $(".location").html(data.name + ", " + data.sys.country);
    $("#windSpeed").html(data.wind.speed + "km/h");
    $("#humidity").html(data.main.humidity + "%");
    $(".temp").html(data.main.temp.toFixed(0) + "°C");
    $(".description").html(data.weather[0].description);

    //function for toggle button
    function toggleTemp() {
        var tempC = data.main.temp;
        var tempF = tempC * 9 / 5 + 32;
        if (toggleF) {
          $(".temp").html(Math.round(tempF) + "&deg;F");
          toggleF = false;
        } else if (toggleF == false) {
          $(".temp").html(Math.round(tempC) + "&deg;C");
          toggleF = true;
        }
  } 
  $(".slider").on("click", toggleTemp);
    
//Switching weather icons according to weather status
if(data.weather[0].description.indexOf("clouds")!== -1){
      $("#weather-icon").html('<i class="fa fa-mixcloud fa-5x" aria-hidden="true"></i>');   
    }
    else if(data.weather[0].description.indexOf("clear sky")!== -1){
      $("#weather-icon").html('<i class="fa fa-skyatlas fa-5x" aria-hidden="true"></i>');
    }
    else if(data.weather[0].description.indexOf("rain")!== -1){
      $("#weather-icon").html('<i class="fa fa-tint fa-5x" aria-hidden="true"></i>');
    }
    else if(data.weather[0].description.indexOf("thunderstorm")!== -1){
      $("#weather-icon").html('<i class="fa fa-bolt fa-5x" aria-hidden="true"></i>');
    }
    else if(data.weather[0].description.indexOf("snow")!== -1){
      $("#weather-icon").html('<i class="fa fa-snowflake-o fa-5x" aria-hidden="true"></i>');
    }
    else if(data.weather[0].description.indexOf("haze")!== -1){
      $("#weather-icon").html('<i class="fa fa-low-vision fa-5x" aria-hidden="true"></i>');
    }
    else if(data.weather[0].description.indexOf("mist")!== -1){
      $("#weather-icon").html('<i class="fa fa-cloud fa-5x" aria-hidden="true"></i>');
    };

  });
};