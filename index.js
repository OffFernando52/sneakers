
const list = document.querySelector("#sneaker-list")
const currentRating = document.querySelector('#rating-display')
const currentName = document.querySelector('#sneaker-name')
const currentDescription = document.querySelector('#description-display')
const currentBrand = document.querySelector('#brand-name')
const currentPrice = document.querySelector('#sneaker-price')

fetch('http://localhost:3000/Sneaker')
.then(res => res.json())
.then(data => renderSneakers(data))

function renderSneakers(sneakers){
sneakers.forEach(sneaker=>{
    const photo = document.createElement('img')
    photo.src = sneaker.image
    list.append(photo)
    photo.addEventListener('click', (e)=>{
        currentRating.textContent = sneaker.rating
        currentName.textContent = sneaker.name
        currentDescription.textContent = sneaker.description
        currentBrand.textContent = sneaker.brand
        currentPrice.textContent = sneaker.price
        })
    })
}

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
    





