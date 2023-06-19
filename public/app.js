import data from "../assets/data.js";

const phoneData = data();
let cart = [] ;

window.addEventListener("load", () => {

  

  const page = document.querySelector("#discover");

  function createCard(page, data) {
    const cardwrapper = document.createElement("div");
    cardwrapper.className = "cardwrapper";

    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    console.log(data.img);
    image.src = data.img;

    const cardTitle = document.createElement("div");

    const cardHeading = document.createElement("h3");
    cardHeading.innerHTML = data.name;
    cardHeading.className = "cardHeading";
    cardTitle.className = "cardTitle";

    const cardContent = document.createElement("p");
    cardContent.innerHTML = data.description;

    // const add2Cart = document.createElement("button");
    // add2Cart.innerHTML = "Add to Cart";
    // add2Cart.addEventListener('click', ()=>{
    //   cart.push(data);
    
    // })


    cardTitle.appendChild(cardHeading);
    cardTitle.appendChild(cardContent);
    card.appendChild(image);
    card.appendChild(cardTitle);
    cardwrapper.appendChild(card);
    //cardwrapper.appendChild(add2Cart);
    page.appendChild(cardwrapper);

    return card;
  }

  function discoverCards(value) {
    var card = createCard(page, value);
    card.addEventListener("click", () => {
      location.href = `./product.html?id=${value.name}`;
    });
  }

  const iphone14 = document.querySelector("#iphone14Btn");
  iphone14.addEventListener("click", () => {
    location.href = `./product.html?id=iPhone 14`;
  });
  const v27pro = document.querySelector("#v27pro");
  v27pro.addEventListener("click", () => {
    location.href = `./product.html?id=VIVO V27 PRO`;
  })
  const galaxys23 = document.getElementById("galaxys23");
  galaxys23.addEventListener("click", () => {
    location.href = `./product.html?id=Galaxy S23 Series`;
  })
  const realmepro5g = document.getElementById("realmepro5g");
  realmepro5g.addEventListener("click", () => {
    location.href = `./product.html?id=Realme 10 Pro 5G`;
  })


  discoverCards(phoneData[5]);
  discoverCards(phoneData[17]);
  discoverCards(phoneData[15]);
});
