let codeButton = document.getElementById('codingRevealButton');
let featureButton = document.getElementById('featureRevealButton');

let codeContent = document.getElementById('codingContent');
let featureContent = document.getElementById('featureContent');

// Manage Coding Reveal
codeButton.addEventListener('click', function() {
    if (codeContent.classList.contains('hidden')){
        codeContent.classList.remove('hidden')
        codeButton.textContent = 'Hide Coding'
        featureContent.classList.add('hidden')
        featureButton.textContent = 'Reveal Features'
    }
    else {
        codeContent.classList.add('hidden')
        codeButton.textContent = 'Reveal Coding'
    }
});

// Manage Features Reveal
featureButton.addEventListener('click', function() {
    if (featureContent.classList.contains('hidden')){
        featureContent.classList.remove('hidden')
        featureButton.textContent = 'Hide Features'
        codeContent.classList.add('hidden')
        codeButton.textContent = 'Reveal Coding'
    }
    else {
        featureContent.classList.add('hidden')
        featureButton.textContent = 'Reveal Features'
    }
});