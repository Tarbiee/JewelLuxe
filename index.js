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
cartButton.addEventListener("click",(e) => {
    addToCart(jewelry);
    renderCartFromStorage();
    e.preventDefault();
    
    
});
document.querySelector("#row").appendChild(card)
}

window.addEventListener('load', () => {
       renderCartFromStorage();
    });

//function to render the cart from localStorage
function renderCartFromStorage(){
    const cartInfo = document.getElementById("cart-info")
    cartInfo.innerHTML='';//clear the cart before rendering
    const storedCart =JSON.parse(localStorage.getItem('cart') || '[]');
    
    storedCart.forEach((jewelry, index) =>{
    const cartRow = document.createElement("tr");
    cartRow.class ="cart-row"
    cartRow.innerHTML=`
    
    <td><img src="${jewelry.image}" ></td>
            <td>${jewelry.name}</td>
            <td>${jewelry.price}</td>
            <td>${jewelry.quantity}<td>
            <td><button class="remove-jewel" data-index="${index}">Remove</button></td>
    `;
    

    cartInfo.appendChild(cartRow);
    });

    const removeButtons = document.querySelectorAll(".remove-jewel");
    removeButtons.forEach(button => {
       button.addEventListener("click", (event) => {
           const indexToRemove = event.target.getAttribute("data-index");
           removeItemFromCart(indexToRemove);
            renderCartFromStorage();
        });
    });
 }



// Function to add an item to the cart and update localStorage
   function addToCart(jewelry) {
   const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
   storedCart.push(jewelry);
    localStorage.setItem('cart', JSON.stringify(storedCart));
 }

 //Function to remove an item from the cart and update localStorage
function removeItemFromCart(index) {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    storedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storedCart));
}



//fetch requests
//

fetch('http://localhost:3000/jewelry')
.then(response => response.json())
.then((jewelryData) =>{
    jewelryData.forEach(jewelry => renderJewelry(jewelry))
     
 })

 //event listerner on submit button
  const addJewelryForm = document.getElementById("add-jewelry")
  addJewelryForm.addEventListener("submit",handleSubmit)

  //Event handler

  function handleSubmit(e){
    e.preventDefault();
    let jewelry= {
        name:e.target.name.value,
        image:e.target.image.value,
        material:e.target.material.value,
        price:e.target.price.value,
        description:e.target.description.value,
    }
    renderJewelry(jewelry)
    addToJewelry(jewelry)
  }

 function addToJewelry(jewelry){
    fetch('http://localhost:3000/jewelry',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(jewelry)

    })
    .then(res => res.json())
    .then(dataJewel => console.log(dataJewel))
 }
    
   

