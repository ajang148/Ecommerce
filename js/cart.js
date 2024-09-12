let selectedItem = decodeURIComponent(window.location.search)
console.log(selectedItem )
let selectedItemCode = selectedItem.substring(1)
console.log(selectedItemCode)

let product = products.find(p => p.CODE === selectedItemCode)
// for (let i = 0; i < products.length; i++) {
//     if (products[i].CODE === selectedItemCode){
//         product = products[i]
//     }
// }

// Checking if the product exists and display its details
if (product) {
    document.getElementById("itemImage").src = product.Image;
    document.getElementById("itermName").innerHTML = product.Name;
    document.getElementById("itermPrice").innerHTML = `Kes ${product.Price}`;
    document.getElementById("itemCode").innerHTML = product.CODE;

    let cost = product.Price
    calCulate(cost)
} 

function calCulate(cost){
    let input = document.getElementById("how many")  
    input.value = 1
    let quantity = parseInt(input.value)
    let total = quantity * cost
    document.getElementById("price").innerHTML = `Kes: ${total}` 

    input.addEventListener("keyup", () =>{
        let quantity = input.value
        if(quantity > 0 ){ 
            let total = quantity * cost
             document.getElementById("price").innerHTML = `Kes: ${total}`

            console.log(total)
            deliveryTotal(total)
        }
    })  
}

function deliveryTotal(total){
    let delivery = document.getElementById("location")
    delivery.addEventListener('change', () =>{
    let deliveryCost
    if(delivery.value === 'Nairobi'){
        deliveryCost = 200
    } else if(delivery.value === 'Mombasa'){
        deliveryCost = 300
    } else if(delivery.value === 'Kisumu'){
        deliveryCost = 250
    } else if(delivery.value === 'Nakuru'){
        deliveryCost = 400
    } else {
        deliveryCost = 0
    }

    let finalCost = total + deliveryCost
    document.getElementById("total").innerHTML = `Kes: ${finalCost}`
    
    console.log(finalCost)
})
}