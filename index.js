fetch('http://localhost:3000/jewelry')
.then(response => response.json())
.then((jewelryData) =>{
    //console.log(filmData)
    let data1=""
    jewelryData.map((values)=>{
        data1+=`<div class="film">
        <h1 class="title">${values.name}</h1>
        <img src="${values.image}" alt="img" class="poster">
        <p>${values.description}</p>
        <p class="showtime">ShowTime:${values.material}</p>
        <p class="price">RunTime:${values.price}</p>
    </div>`
       
    });
    document.getElementById("cards").innerHTML=data1


    
}).catch((err)=>{
    console.log(err);
})