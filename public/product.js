import data from "../assets/data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const phoneData = data();
var wrapper = document.querySelector("#productWrapper");
function productPage() {
  phoneData.map((data) => {
    if (data.name == id) {
      const img = document.getElementById("img");
      img.src = data.img;
      const div = document.getElementById("left");
      const name = document.getElementById("name");
      name.innerHTML = data.name;
      const description = document.getElementById("description");
      description.innerHTML = data.description2;
      const spec = document.createElement("ul");
      //
      const brand = document.createElement("li");
      brand.innerHTML = `Brand:  ${data.brand}`
      spec.appendChild(brand);
       //
       const display= document.createElement("li");
       display.innerHTML = `Display:  ${data.display}`
       spec.appendChild(display); 
       //
       const processor = document.createElement("li");
       processor.innerHTML = `Processor:  ${data.processor}`
       spec.appendChild(processor);
       //
       const camera = document.createElement("li");
       camera.innerHTML = `Camera:  ${data.camera}`
       spec.appendChild(camera);
       //
       const storage = document.createElement("li");
       storage.innerHTML = `Storage:  ${data.storage}`
       spec.appendChild(storage);
       //
       const battery = document.createElement("li");
       battery.innerHTML = `Battery:  ${data.battery}`
       spec.appendChild(battery);
       //
       const security = document.createElement("li");
       security.innerHTML = `Security:  ${data.security}`
       spec.appendChild(security);
       div.appendChild(spec);


      const link = document.createElement("a");
      link.href = `https://www.flipkart.com/search?q=${data.name}`;
      link.innerText = "Link for purchase";
      
      div.appendChild(link);

      


    }
  });
}
productPage();
