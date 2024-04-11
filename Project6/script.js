// Get DOM elements
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Event Listeners
// 1. Listen for click on toggle button
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})