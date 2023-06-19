import data from "../assets/data.js";

const phoneData = data();
console.log(phoneData[2].name);

const page = document.querySelector(".productspage");

function createCard(page, data) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  console.log(data.img)
  image.src = data.img;

  const cardTitle = document.createElement("div");

  const cardHeading = document.createElement("h3");
  cardHeading.innerHTML = data.name;
  cardHeading.className = "cardHeading";
  cardTitle.className = "cardTitle";

  const cardContent = document.createElement("p");
  cardContent.innerHTML = data.description;

  cardTitle.appendChild(cardHeading);
  cardTitle.appendChild(cardContent);
  card.appendChild(image);
  card.appendChild(cardTitle);
  page.appendChild(card);

  return card;
}


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

window.addEventListener("load" , () => {
    var apply = document.querySelector("#apply");
    apply.addEventListener("click" , () => {
        var brands = document.getElementById("brands").value;        
           location.href = `./products.html?id=${brands}` 
        console.log(brands);
    })
})

if (id == "brand") {
  phoneData.map((data) => {
    var card = createCard(page, data);
    card.addEventListener("click", () => {
      location.href = `./product.html?id=${data.name}`;
    });
  });
}else{
        //brands = id ;
        phoneData.map( (data) => {
        
            if (data.brand == id){
                    
                    var card = createCard(page, data);
                    card.addEventListener("click", () => {
                    location.href = `./product.html?id=${data.name}`;
                    });
                }
        })
    }


export default createCard ;