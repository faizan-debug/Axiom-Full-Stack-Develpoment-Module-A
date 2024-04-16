//Get DOM Elements

const form = document.getElementById('form');
const search = document.getElementById('search');
const results = document.getElementById('results');
const pagination = document.getElementById('pagination');

const api = 'https://api.lyrics.ovh';


//Function to search song title and artist
async function searchSongs(term) {
    const res = await fetch(`${api}/suggest/${term}`);
    const data = await res.json();

    showData(data);
};

//Function to display data
function showData(data) {
    //Dislay first set of songs in  the  DOM
    results.innerHTML = `
        <ul class="songs">
            ${data.data.map( 
                song => `
                <li>
                    <span>${song.artist.name} - ${song.title}</span>
                    <button class="btn" data-artist="${song.artist.name}" data-title="${song.title}">Get Lyrics</button>
                </li>
                `
                ).join('')
            }
        </ul>
    `;
        }

//     //Add pagination if required
//     if ( data.prev || data.next ) {
//         pagination.innerHTML = `
//             ${data.prev ? `<button class="btn btn1" onClick="getMoreSongs('${data.prev}')">Prev</button>` : '' }
//             ${data.next ? `<button class="btn btn1" onClick="getMoreSongs('${data.next}')">Next</button>` : ''}
//             `;
//     } else {
//         pagination.innerHTML = '';
//     }


// };


  //Function to get the prev or next songs
  async function getMoreSongs(url){
    const res = await fetch(`https://api.allorigins.win/raw?url=/${url}`); 
   
    const data = await res.json();
    
    showData(data);
}

//Function to get lyrics
async function getLyrics(artist, title) {
    
    const res = await fetch(`https://api.allorigins.win/raw?url=/${api}/v1/${artist}/${title}`); 
    
    const data = await res.json();
   
    
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '</br>');

    results.innerHTML = `
    <h2>${artist} - ${title}</h2>
    <p>${lyrics}</p>
    `;

    pagination.innerHTML = '';
}





//Event Listeners
//Event listner for search form
form.addEventListener('submit', e => {
    e.preventDefault();
    //Get the search term from the input
    const searchTerm = search.value.trim();
    //Check if search term is valid
    if (searchTerm) {
        searchSongs(searchTerm)
    } else {
        alert('Please enter a valid search')
    }
})

//Event Listener to get lyrics
results.addEventListener('click', e => {
    //Find out what was clicked
    const clickedElement = e.target;
    //Check if clicked element was buton
    if (clickedElement.tagName === 'BUTTON') {
        //Get artist name and song title from HTML5
        const artist = clickedElement.getAttribute('data-artist');
        const title = clickedElement.getAttribute('data-title');
        //Now fetch the lyrics
        alert('Sorry lyrics cannnot be fetched at this time due to license issue');
    }
})