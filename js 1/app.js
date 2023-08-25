
const submit = document.getElementById("submit");
const imageContainer = document.getElementById("imageContainer");

submit.addEventListener("click", async () => {
  try {
    let url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const products = await response.json();

    imageContainer.innerHTML = "";

    products.forEach(product => {
      const img = document.createElement("img");
      img.src = product.image;
      imageContainer.appendChild(img);
      img.width=200,
      img.height=100
      img.style.border="1px solid black"
      img.style.display="grid"
      img.style.gridTemplateColumns="repeat(4, 1fr)"
      img.style.gap="10px"
    });
    
  } catch (error) {
    console.error("error", error);
  }
});



