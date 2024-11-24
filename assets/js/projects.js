// Functions for toggling and collapsing content
function toggleContent(element, contentElement, collapseElement) {
    const isHidden = contentElement.classList.contains('hidden');

    if (isHidden) {
        element.classList.remove('hover:bg-blue-200');
        contentElement.classList.remove('hidden');
        collapseElement.classList.remove('hidden');
    } else {
        element.classList.add('hover:bg-blue-200');
        contentElement.classList.add('hidden');
        collapseElement.classList.add('hidden');
    }
}

function collapseContent(element, contentElement, collapseElement, buttonElement) {
    element.classList.add('hover:bg-blue-200');
    contentElement.classList.add('hidden');
    collapseElement.classList.add('hidden');
    buttonElement.scrollIntoView(true);
}

// List of all projects
const projects = [
    { name: 'bellabeats'},
    { name: 'weather'},
    { name: 'autotrader'},
    { name: 'hangman'},
    { name: 'meteor'}
];

// Event listeners for each project
projects.forEach(project => {
    const content = document.getElementById(`${project.name}Content`);
    const collapse = document.getElementById(`${project.name}Collapse`);
    const button = document.getElementById(`${project.name}Button`);
    const element = document.getElementById(project.name);

    button.addEventListener('click', () => toggleContent(element, content, collapse));
    collapse.addEventListener('click', () => collapseContent(element, content, collapse, button));
});

// Expand project if link followed from home page
window.addEventListener('DOMContentLoaded', function () {
    const url = window.location.href;
    const query = new URLSearchParams(url.substring(url.indexOf('?')));

    projects.forEach(project => {
        if (query.get(project.name) === 'true') {
            const content = document.getElementById(`${project.name}Content`);
            const collapse = document.getElementById(`${project.name}Collapse`);
            const element = document.getElementById(project.name);
            const button = document.getElementById(`${project.name}Button`);

            toggleContent(element, content, collapse);
            button.scrollIntoView(true);
        }
    });
});