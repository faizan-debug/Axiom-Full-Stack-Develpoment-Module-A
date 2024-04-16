//Get DOM Elements

const searhForm = document.getElementById('form');
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');
const pagination = document.getElementById('pagination');

const apiURL = 'https://api.deezer.com';

//Function to search on API
async function search(searchText) {
    const res = await fetch (`${apiURL}/search?q=${searchText}`);
    const data = await res.json();
}

//Evenet Listeners
//Listen to submit on search form
searhForm.addEventListener('submit', e => {
    e.preventDefault();
    //Capture search text
    const searchText = searchInput.value.trim();
    //Validate search Text
    if (!searchText) {
        alert('Please enter valid input');
    } else {
        search(searchText);
    }
})