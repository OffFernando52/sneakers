

const list = document.querySelector("#sneaker-list")
const currentRating = document.querySelector('#rating-display')
const currentName = document.querySelector('#sneaker-name')
const currentDescription = document.querySelector('#description-display')
const currentBrand = document.querySelector('#brand-name')
const currentPrice = document.querySelector('#sneaker-price')
const formContainer = document.querySelector("#formContainer")

const submitForm = document.querySelector("#new-name")
submitForm.classList.add("new-name")
const newBoxDiv = document.querySelector("#innerFlexBox")
newBoxDiv.classList.add("gifImgToDom")


document.addEventListener("DOMContentLoaded", () => {
fetch('http://localhost:3000/Sneaker')
.then(res => res.json())
.then(data => renderSneakers(data))
})
const photo = document.getElementsByTagName('img')
function renderSneakers(sneakers){
sneakers.forEach(sneaker=>{
    const photo = document.createElement('img')
    photo.src = sneaker.image
    
    btn = document.createElement("button") //create element for the button if needed
    console.log(btn) // console.log to be sure your button was added after appending 
    btn.textContent = "x"
    list.append(btn)
   
    
    
    photo.addEventListener('click', (e)=>{
        currentRating.textContent = sneaker.rating
        currentName.textContent = sneaker.name
        currentDescription.textContent = sneaker.description
        currentBrand.textContent = sneaker.brand
        currentPrice.textContent = sneaker.price
        })
    photo.addEventListener("mouseover", () => makePicBigger(photo));
    photo.addEventListener("mouseout" , ()=> meakePicSmaller(photo))
   list.append(photo)
    })
   
    
}



btn.addEventListener('click', (e) => {
    //console.log("hi")
    photo.parentElement.remove()
})

function makePicBigger(sneakerPic){
//const photo = document.getElementsByTagName('img')
sneakerPic.style.height="250px"


}
function meakePicSmaller(sneakerPic){
sneakerPic.style.height="150px"
}
//makePicBigger()
// initialize variables that we will define in the newName event listener so that we can later pass them into the POST request
let sneakerNameInput
let brandInput
let imageInput
let ratingInput
let priceInput
let descriptionInput
let newSneakerSubmit = {}

// when submit button is clicked, rename variables with the value in the form
const newName = document.querySelector('#new-sneaker')
newName.addEventListener('submit', (e) => {
    e.preventDefault()
    sneakerNameInput = e.target[0].value
    brandInput = e.target[1].value
    imageInput = e.target[2].value
    ratingInput = e.target[3].value
    priceInput = e.target[4].value
    descriptionInput = e.target[5].value
   console.log(window.innerHeight) 

    newSneakerSubmit = {
        name: sneakerNameInput,
        brand: brandInput,
        image: imageInput,
        rating: ratingInput,
        price: priceInput,
        description: descriptionInput
    }  
    // console.log(newSneakerSubmit)  
    
    fetch(`http://localhost:3000/Sneaker/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: sneakerNameInput,
            brand: brandInput,
            image: imageInput,
            rating: ratingInput,
            price: priceInput,
            description: descriptionInput
        })
    })
    .then(resp => resp.json())
    .then(data => {console.log(data)})
    // render the new image
    renderSneakers([newSneakerSubmit])



})
    





