// fetch('http://localhost:3000/Sneaker')
// .then(resp => resp.json())
// .then(data => renderSneaker(data))

// const detailImg = document.querySelector(".detail-image")
// function renderSneaker(sneakers){

    
    
//      detailImg.src = sneakers[0].image
     
//  }

//img.src = 'https://godlysoles.com/wp-content/uploads/2021/02/2100000-Solid-Gold-OVO-x-Air-Jordan-10s-2.jpg'

const list = document.querySelector("#sneaker-list")
const currentRating = document.querySelector('#rating-display')
const currentName = document.querySelector('#sneaker-name')


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
    })
})

}