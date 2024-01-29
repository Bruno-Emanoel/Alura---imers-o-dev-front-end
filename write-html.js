const writeHTML = {}

writeHTML.writeArtistLI = ({name, genre, urlImg})=>
    `<li class="playlist flexer" style="background-color:inherit;">
        <img src="${urlImg}" alt="" id="artist-img" style="width: 120px; height: 120px; object-fit: cover; border-radius: 60px;">
        <h3 id="artist-name">${name}</h3>
        <div class="play">
            <span class="fa fa-solid fa-play"></span>
        </div>
        <p>${genre}</p>
    </li>`
