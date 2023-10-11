//render jewels
function renderJewelry(jewelry){
    let card = document.createElement("div");
    card.id = "card"
    card.innerHTML=`
     <h4 class="name">${jewelry.name}</h4>
     <img src="${jewelry.image}" alt="img" class="image">
     <p>${jewelry.description}</p>
     <p class="">Material:${jewelry.material}</p>
    <p class="price">Price:${jewelry.price}</p>
    <button class="button">Add to cart</button>
    
    `
const cartButton = card.querySelector(".button");
cartButton.addEventListener("click",() => {
    const cartInfo = document.getElementById("cart-info")
    cartInfo.innerHTML=`

    <td><img src="${jewelry.image}"></td>
            <td>${jewelry.name}</td>
            <td>${jewelry.price}</td>
    `
    
})
document.querySelector("#row").appendChild(card)
}



//fetch requests
//

fetch('http://localhost:3000/jewelry')
.then(response => response.json())
.then((jewelryData) =>{
    jewelryData.forEach(jewelry => renderJewelry(jewelry))
     
 })
    
   
// function addToCart(jewelry){
//     const cartInfo = document.getElementsByClassName("cart-info")
//     cartInfo.innerHTML=`

//     <td><img src="${jewelry.image}"></td>
//             <td>${jewelry.name}</td>
//             <td>${jewelry.price}</td>
//     `

// }

