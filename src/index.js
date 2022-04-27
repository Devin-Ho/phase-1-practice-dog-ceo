console.log('%c HI', 'color: firebrick')
//Challenge 1
const container = document.querySelector('#dog-image-container')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector('#dog-breeds')
const dropdown = document.querySelector('#breed-dropdown')
let breedsArray; //set as an array

ulContainer.addEventListener('click', handleClick)
dropdown.addEventListener('change', handleChange)

function getImages() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(images => {
      const imgs = images.message
      //take this array of images 
      //turn it into img elements 
      let imgsArray = createImgElement(imgs)
      renderImage(imgsArray)
    })
}

function createImgElement(imgs) {
  return imgs.map((img) => {
    let i = `<img src = ${img}>`;
    return i
  })
}
function renderImage(imgsArray) {
  //append each img element to the DOM
  imgsArray.forEach(element => {
    renderElement(element) //have to use with `<img src = ${img}>`;
  })
}
function renderElement(element) {
  ulContainer.innerHTML += element
}

//Challenge 2 
function getBreeds() {
  fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
      breedsArray = Object.keys(breeds.message)
      const breedsLis = createLiElement(breedsArray)
      renderLis(breedsLis)
      // let imgsArray = createImgElement(imgs)
      // renderImage(imgsArray)
    })
}
function createLiElement(breedsArray) {
  return breedsArray.map((breed) => {
    let li = `<li>${breed}</li`
    return li
  })
}

function renderLis(breedLis) {
  //append each img element to the DOM
  breedLis.forEach(element => {
    renderElement(element) //have to use with `<img src = ${img}>`;
  })
}
//Challenge 3
function handleClick(event) { //toggle back and forth between red and black
  if (event.target.nodeName === 'LI') {
    if (event.target.style.color === 'red') {
      event.target.style.color = 'black'
    } else {
      event.target.style.color = 'red'
    }
  }
}
//Challenge 4 
function handleChange(event) {
  const letter = event.target.value
  //filter out the breeds that start with the letter
  const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
  const filteredBreedsLis = createLiElement(filteredBreeds)
  ulContainer.innerHTML = " ";
  renderLis(filteredBreedsLis)
}

getImages();
getBreeds();
