const bellabeats = document.getElementById('bellabeats')
const weather = document.getElementById('weather')
const autotrader = document.getElementById('autotrader')
const hangman = document.getElementById('hangman')
const meteor = document.getElementById('meteor')

const bellabeatsButton = document.getElementById('bellabeatsButton')
const weatherButton = document.getElementById('weatherButton')
const autotraderButton = document.getElementById('autotraderButton')
const hangmanButton = document.getElementById('hangmanButton')
const meteorButton = document.getElementById('meteorButton')

const bellabeatsContent = document.getElementById('bellabeatsContent')
const weatherContent = document.getElementById('weatherContent')
const autotraderContent = document.getElementById('autotraderContent')
const hangmanContent = document.getElementById('hangmanContent')
const meteorContent = document.getElementById('meteorContent')


const bellabeatsCollapse = document.getElementById('bellabeatsCollapse')
const weatherCollapse = document.getElementById('weatherCollapse')
const autotraderCollapse = document.getElementById('autotraderCollapse')
const hangmanCollapse = document.getElementById('hangmanCollapse')
const meteorCollapse = document.getElementById('meteorCollapse')

// Manage BellaBeats
function toggleBellabeatsContent() {
    const isHidden = bellabeatsContent.classList.contains('hidden');

    if (isHidden) {
        bellabeats.classList.remove('hover:bg-blue-400');
        bellabeatsContent.classList.remove('hidden');
        bellabeatsCollapse.classList.remove('hidden');
    } 
    else {
        bellabeats.classList.add('hover:bg-blue-400');
        bellabeatsContent.classList.add('hidden');
        bellabeatsCollapse.classList.add('hidden');
    }
}

function collapseBellabeatsContent() {
    bellabeats.classList.add('hover:bg-blue-400')
    bellabeatsContent.classList.add('hidden')
    bellabeatsCollapse.classList.add('hidden')
    bellabeatsButton.scrollIntoView(true)
}

bellabeatsButton.addEventListener('click', toggleBellabeatsContent);
bellabeatsCollapse.addEventListener('click', collapseBellabeatsContent);

// Manage The Weather App
function toggleWeatherContent() {
    const isHidden = weatherContent.classList.contains('hidden');

    if (isHidden) {
        weather.classList.remove('hover:bg-blue-400')
        weatherContent.classList.remove('hidden')
        weatherCollapse.classList.remove('hidden')
    } 
    else {
        weather.classList.add('hover:bg-blue-400')
        weatherContent.classList.add('hidden')
        weatherCollapse.classList.add('hidden')
    }
}

function collapseWeatherContent() {
    weather.classList.add('hover:bg-blue-400')
    weatherContent.classList.add('hidden')
    weatherCollapse.classList.add('hidden')
    weatherButton.scrollIntoView(true)
}

weatherButton.addEventListener('click', toggleWeatherContent);
weatherCollapse.addEventListener('click', collapseWeatherContent);

// Manage Taylor'd Autotraderz'
function toggleAutotraderContent() {
    const isHidden = autotraderContent.classList.contains('hidden');

    if (isHidden) {
        autotrader.classList.remove('hover:bg-blue-400')
        autotraderContent.classList.remove('hidden')
        autotraderCollapse.classList.remove('hidden')
    } 
    else {
        autotrader.classList.add('hover:bg-blue-400')
        autotraderContent.classList.add('hidden')
        autotraderCollapse.classList.add('hidden')
    }
}

function collapseAutotraderContent() {
    autotrader.classList.add('hover:bg-blue-400')
    autotraderContent.classList.add('hidden')
    autotraderCollapse.classList.add('hidden')
    autotraderButton.scrollIntoView(true)
}

autotraderButton.addEventListener('click', toggleAutotraderContent);
autotraderCollapse.addEventListener('click', collapseAutotraderContent);

// Manage Hangman Game
function toggleHangmanContent() {
    const isHidden = hangmanContent.classList.contains('hidden');

    if (isHidden) {
        hangman.classList.remove('hover:bg-blue-400')
        hangmanContent.classList.remove('hidden')
        hangmanCollapse.classList.remove('hidden')
    } 
    else {
        hangman.classList.add('hover:bg-blue-400')
        hangmanContent.classList.add('hidden')
        hangmanCollapse.classList.add('hidden')
    }
}

function collapseHangmanContent() {
    hangman.classList.add('hover:bg-blue-400')
    hangmanContent.classList.add('hidden')
    hangmanCollapse.classList.add('hidden')
    hangmanButton.scrollIntoView(true)
}

hangmanButton.addEventListener('click', toggleHangmanContent);
hangmanCollapse.addEventListener('click', collapseHangmanContent);

// Manage Meteorite Finder
function toggleMeteorContent() {
    const isHidden = meteorContent.classList.contains('hidden');

    if (isHidden) {
        meteor.classList.remove('hover:bg-blue-400')
        meteorContent.classList.remove('hidden')
        meteorCollapse.classList.remove('hidden')
    } 
    else {
        meteor.classList.add('hover:bg-blue-400')
        meteorContent.classList.add('hidden')
        meteorCollapse.classList.add('hidden')
    }
}

function collapseMeteorContent() {
    meteor.classList.add('hover:bg-blue-400')
    meteorContent.classList.add('hidden')
    meteorCollapse.classList.add('hidden')
    meteorButton.scrollIntoView(true)
}

meteorButton.addEventListener('click', toggleMeteorContent);
meteorCollapse.addEventListener('click', collapseMeteorContent);

// Expand project if individual link is clicked
window.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    let findQuery = url.indexOf('?');
    let query = new URLSearchParams(url.substring(findQuery));
    if(query.get('bellabeats') === 'true') {
        toggleBellabeatsContent();
        bellabeatsButton.scrollIntoView(true)
    }
    if(query.get('weather') === 'true') {
        toggleWeatherContent();
        weatherButton.scrollIntoView(true)
    }
    if(query.get('autotrader') === 'true') {
        toggleAutotraderContent();
        autotraderButton.scrollIntoView(true)
    }
    if(query.get('hangman') === 'true') {
        toggleHangmanContent();
        hangmanButton.scrollIntoView(true)
    }
    if(query.get('meteor') === 'true') {
        toggleMeteorContent();
        meteorButton.scrollIntoView(true)
    }
});