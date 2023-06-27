console.log("Let's get this party started!");


async function getGIF(searchGIF){
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchGIF}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    let gifData = res.data.data
    let num = Math.floor(Math.random() * 50)
    let gif = gifData[num]
    let gifURL = gif.images.original.url

    console.log(res)
    console.log(gifURL)
    let img = document.createElement('img');
    img.src = gifURL
    title.append(gifSpace);
    gifSpace.append(img)
}

let title = document.querySelector('.title')
let gifSpace = document.createElement('div')
let search = document.querySelector('.search')
let remove = document.querySelector('.remove')
let input = document.querySelector('input')

search.addEventListener('click', function(){
    let gifSpace = document.createElement('div')
    let img = document.createElement('img');
    let searchTerm = input.value
    getGIF(searchTerm)
})

remove.addEventListener('click', function(){
    let gifSpaceLength = gifSpace.children.length
    for(let i = 0; i < gifSpaceLength; i++){
        gifSpace.lastChild.remove()
    }
})