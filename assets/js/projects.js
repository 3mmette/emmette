let bellabeats = document.getElementById('bellabeats')
let weather = document.getElementById('weather')
let autotrader = document.getElementById('autotrader')
let hangman = document.getElementById('hangman')
let meteor = document.getElementById('meteor')

let bellabeatsButton = document.getElementById('bellabeatsButton')
let weatherButton = document.getElementById('weatherButton')
let autotraderButton = document.getElementById('autotraderButton')
let hangmanButton = document.getElementById('hangmanButton')
let meteorButton = document.getElementById('meteorButton')

let bellabeatsContent = document.getElementById('bellabeatsContent')
let weatherContent = document.getElementById('weatherContent')
let autotraderContent = document.getElementById('autotraderContent')
let hangmanContent = document.getElementById('hangmanContent')
let meteorContent = document.getElementById('meteorContent')


let bellabeatsCollapse = document.getElementById('bellabeatsCollapse')
let weatherCollapse = document.getElementById('weatherCollapse')
let autotraderCollapse = document.getElementById('autotraderCollapse')
let hangmanCollapse = document.getElementById('hangmanCollapse')
let meteorCollapse = document.getElementById('meteorCollapse')

// Manage BellaBeats
bellabeatsButton.addEventListener('click', function() {
    if (bellabeatsContent.classList.contains('hidden')){
        bellabeats.classList.remove('hover:bg-blue-400')
        bellabeatsContent.classList.remove('hidden')
        bellabeatsCollapse.classList.remove('hidden')
    }
    else {
        bellabeats.classList.add('hover:bg-blue-400')
        bellabeatsContent.classList.add('hidden')
        bellabeatsCollapse.classList.add('hidden')
    }
});

bellabeatsCollapse.addEventListener('click', function() {
    bellabeats.classList.add('hover:bg-blue-400')
    bellabeatsContent.classList.add('hidden')
    bellabeatsCollapse.classList.add('hidden')
    bellabeatsButton.scrollIntoView(true)
});

// Manage The Weather App
weatherButton.addEventListener('click', function() {
    if (weatherContent.classList.contains('hidden')){
        weather.classList.remove('hover:bg-blue-400')
        weatherContent.classList.remove('hidden')
        weatherCollapse.classList.remove('hidden')
    }
    else {
        weather.classList.add('hover:bg-blue-400')
        weatherContent.classList.add('hidden')
        weatherCollapse.classList.add('hidden')
    }
});

weatherCollapse.addEventListener('click', function() {
    weather.classList.add('hover:bg-blue-400')
    weatherContent.classList.add('hidden')
    weatherCollapse.classList.add('hidden')
    weatherButton.scrollIntoView(true)
});

// Manage Taylor'd Autotraderz'
autotraderButton.addEventListener('click', function() {
    if (autotraderContent.classList.contains('hidden')){
        autotrader.classList.remove('hover:bg-blue-400')
        autotraderContent.classList.remove('hidden')
        autotraderCollapse.classList.remove('hidden')
    }
    else {
        autotrader.classList.add('hover:bg-blue-400')
        autotraderContent.classList.add('hidden')
        autotraderCollapse.classList.add('hidden')
    }
});

autotraderCollapse.addEventListener('click', function() {
    autotrader.classList.add('hover:bg-blue-400')
    autotraderContent.classList.add('hidden')
    autotraderCollapse.classList.add('hidden')
    autotraderButton.scrollIntoView(true)
});

// Manage Hangman Game
hangmanButton.addEventListener('click', function() {
    if (hangmanContent.classList.contains('hidden')){
        hangman.classList.remove('hover:bg-blue-400')
        hangmanContent.classList.remove('hidden')
        hangmanCollapse.classList.remove('hidden')
    }
    else {
        hangman.classList.add('hover:bg-blue-400')
        hangmanContent.classList.add('hidden')
        hangmanCollapse.classList.add('hidden')
    }
});

hangmanCollapse.addEventListener('click', function() {
    hangman.classList.add('hover:bg-blue-400')
    hangmanContent.classList.add('hidden')
    hangmanCollapse.classList.add('hidden')
    hangmanButton.scrollIntoView(true)
});

// Manage Meteorite Finder
meteorButton.addEventListener('click', function() {
    if (meteorContent.classList.contains('hidden')){
        meteor.classList.remove('hover:bg-blue-400')
        meteorContent.classList.remove('hidden')
        meteorCollapse.classList.remove('hidden')
    }
    else {
        meteor.classList.add('hover:bg-blue-400')
        meteorContent.classList.add('hidden')
        meteorCollapse.classList.add('hidden')
    }
});

meteorCollapse.addEventListener('click', function() {
    meteor.classList.add('hover:bg-blue-400')
    meteorContent.classList.add('hidden')
    meteorCollapse.classList.add('hidden')
    meteorButton.scrollIntoView(true)
});