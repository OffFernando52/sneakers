const { patch } = require("request")


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

function createNewSneaker(){
    const newName = document.querySelector('#new-sneaker')
    newName.addEventListener('submit', (e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/Sneaker/${sneaker.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body:JSON.stringify({
                :newName ,

            }),


            
            
            
            

        })
       

        let sneakerNameInput = e.target[0].value
        let brandInput = e.target[1].value
        let imageInput = e.target[2].value
        let ratingInput = e.target[3].value
        let priceInput = e.target[4].value
        let descriptionInput = e.target[5].value
       
        
        let newSneakerSubmit = {
            name: sneakerNameInput,
            brand: brandInput,
            image: imageInput,
            rating: ratingInput,
            price: priceInput,
            description: descriptionInput,
              
        }
        renderSneakers([newSneakerSubmit])
        console.log(newSneakerSubmit)
    })
}
createNewSneaker()

function 