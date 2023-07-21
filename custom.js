/*  cart open close start  */
var cartOpen = document.querySelector(".common-cart");
var cart = document.querySelector(".cart");
var closeCart = document.querySelector("#close-cart");
const removecartitem = document.querySelectorAll(".remove-cart-item")


const addcart = document.querySelectorAll("#cart-icon")


cartOpen.addEventListener("click", () => {cart.style.display = "block"}) 

closeCart.onclick = () => cart.style.display = "none";

/*  cart open close end */

removecartitem.forEach(item =>{
    item.addEventListener("click", (event)=>{
        var butonclick = event.target
        butonclick.parentElement.remove()
    })
})


function updateTotal(){
    const cartcontent = document.querySelector(".cart-content")   
    const cartbox = cartcontent.querySelectorAll(".cart-box")
    let total = 0
    cartbox.forEach(item =>{
        const price = item.querySelector(".cart-price")
        const quantity = parseInt(item.querySelector("input").value)  
        const pricenum = parseInt(price.innerHTML.replace("৳",""))*quantity
        total += pricenum
    })
    document.querySelector(".total-price").innerHTML = total
}

addcart.forEach(item =>{
    item.addEventListener("click", (event)=>{
        let itemincart = false
        const addcarth2innerhtml = event.target.parentElement.querySelector("h2").innerHTML
        const cartpoducttitles = document.querySelectorAll(".cart-product-title")
        
        cartpoducttitles.forEach(item =>{
            if(item.innerText == addcarth2innerhtml){
                itemincart = true
            }
        })
        if (itemincart){
            alert("this product is alredy in cart")
        }else{
            const newdiv = document.createElement("div")
            newdiv.classList.add("cart-box")
            newdiv.innerHTML = `                        <img src="${event.target.parentElement.querySelector("img").src}" alt="" class="cart-img">
            <div class="details-box">
                <div class="cart-product-title">${event.target.parentElement.querySelector("h2").innerHTML}</div>
                <div class="cart-price">${event.target.parentElement.querySelector(".price").innerHTML}</div>
                <input type="number" class="cart-quentity" value="1">
            </div>   
            <!-- remove -->
            <i class="fa-solid fa-trash-can remove-cart-item" ></i>`;
            document.querySelector(".cart-content").append(newdiv)
            const cartquantity = document.querySelectorAll(".cart-quentity")
            cartquantity.forEach(item =>{
                item.addEventListener("change",()=>{
                    updateTotal()
                })
            })
            updateTotal()
        }
    })
})


