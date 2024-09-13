// let searchInput = document.getElementById('search-input')
// let searchButton = document.getElementById('search-button')

let products = [
    {Image: "image/clacks.jpg", Name: "Clacks", Price: 2000,CODE: "C200"},
    {Image: "image/part1.jpg",Name: "Puma",Price: 1200,CODE: "M400"},
    {Image: "image/part1.jpg",Name: "Puma",Price: 2000,CODE: "F101"},
    {Image: "image/hikaique.jpg", Name: "Puma",Price: 5000,CODE: "D201"},
    {Image: "image/black.jpg",Name: "Puma",Price: 5000,CODE: "B202"},
    {Image: "image/black.jpg",Name: "addidas",Price:3000,CODE: "P505"},
    {Image: "image/black.jpg",Name: "addidas",Price:4200,CODE: "S606"},
    {Image: "image/black.jpg",Name: "addidas",Price: 100,CODE: "O303"},
    {Image: "image/black.jpg",Name: "addidas",Price:200,CODE: "G404"},
    {Image: "image/black.jpg",Name: "addidas",Price: 300,CODE: "W707"},
    {Image: "image/black.jpg",Name: "addidas",Price:1200,CODE: "B808"},
    {Image: "image/black.jpg",Name: "addidas",Price: 1000,CODE: "A909"},
    {Image: "image/black.jpg",Name: "addidas",Price: 5000,CODE: "M1010"},
    {Image: "image/black.jpg",Name: "addidas",Price: 5000,CODE: "B1111"},
    {Image: "image/black.jpg",Name: "addidas",Price:4000 ,CODE: "A290"},
    {Image: "image/black.jpg",Name: "Nike",Price:5000 ,CODE: "S345"},
    {Image: "image/white.jpg",Name: "Nike",Price:6000 ,CODE: "D237"},
    {Image: "image/white.jpg",Name: "Nike",Price:7000 ,CODE: "S234"},
    {Image: "image/white.jpg",Name: "Nike",Price:8000 ,CODE: "F894"},
    {Image: "image/white.jpg",Name: "Nike",Price:9000 ,CODE: "G973"}
]
let productContainer = document.getElementById('product')

productContainer.innerHTML = products.map(product => `
  <div class="product-item">
    <img src="${product.Image}" alt="${product.Name}">
    <p>${product.Name}</p>
    <p>Price: ${product.Price}</p>
    <button onclick='view("${product.CODE}")'>View</button>
  </div>
`).join('')

 
function view(code){
    window.open(`cart.html?${code}`, '_blank')
}

// searchButton.addEventListener('click', () => {
//     // Get the search query from the input field
//     let searchQuery = searchInput.value
//     // Filter the products based on the search query
//     let filteredProducts = products.filter((product) => 
//       product.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.CODE.toLowerCase().includes(searchQuery.toLowerCase())
//     )
  
//     // Update the product list with the filtered products
//     productContainer.innerHTML = filteredProducts.map((product, index) =>`
//       <div class ="product-item">
//         <img src="${product.Image}" alt="${product.Name}">
//         <p>${product.Name}</p>
//         <p>Price: ${product.Price}</p>
//         <p>Code: ${product.CODE}</p>
//         <button onclick="view('${product.CODE}')">View</button>
//       </div>
//        `
//   ).join('')
// })
  
// function view(code){
//       window.open(`cart.html?${code}`, '_blank')
// }

// let productContainer = document.getElementById('product')
//   // Initialize the product list
//   productContainer.innerHTML = products.map((product, index) => `
//     <div class ="product-item">
//       <img src="${product.Image}" alt="${product.Name}">
//       <p>${product.Name}</p>
//       <p>Price: ${product.Price}</p>
//       <p>Code: ${product.CODE}</p>
//       <button onclick="view('${product.CODE}')">View</button>
//     </div>`
// ).join('')










