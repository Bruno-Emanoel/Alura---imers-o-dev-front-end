const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementById('result-artist')
const resulstPlaylist = document.getElementById('playlist-list')

async function requestApi(){
    const url = `http://localhost:3000/artists`;
    const response = await fetch(url);
    return response.json();
}

async function displayResults(searchTerm){
    let result = await requestApi(searchTerm)
    result = result.filter(elem=>elem.name.toLowerCase().includes(searchTerm))
    resulstPlaylist.classList.add('hidden')

    resultArtist.innerHTML = result.map(elem=>writeHTML.writeArtistLI(elem)).join()

}

document.addEventListener('input', async ()=>{
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm !== ''){
        await displayResults(searchTerm)
        resultArtist.classList.remove('hidden')
        return
    } else{
        resulstPlaylist.classList.remove('hidden')
        resultArtist.classList.add('hidden')
        return
    }
})