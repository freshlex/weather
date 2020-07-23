var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var name=document.querySelector('.name')
var desc=document.querySelector('.desc')
var temp=document.querySelector('.temp')
var speed=document.querySelector('.speed')
var humidity=document.querySelector('.humidity')
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=af9f06cf601e1fdc469cb929bdbb70e4')
      .then(response => response.json())
      .then(data => {
            var nameValue = data['main']['name'];
            var tempValue = data['main']['temp']-273.15;
            var descValue = data['weather'][0]['description'];
            var speedValue = data['wind']['speed'];
            var humidityValue = data['main']['humidity'];
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue+" °C";
            desc.innerHTML = descValue;
            speed.innerHTML = speedValue;
            humidity.innerHTML = humidityValue;

      })
    .catch(err => alert("Please enter appropriate City Name!"))
})

