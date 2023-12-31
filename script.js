function openSidebar() {
    document.getElementById("mySidebar").style.left = "0";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.left = "-250px";
}

function toggleForm() {
    var form = document.getElementById("addProductsForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}
let productData=localStorage.getItem("products");
if(productData.length>0){
    productData=JSON.parse(productData);
}else{
    productData=[];
}
//let productData=[];
let myForm=document.querySelector(".myForm");
let productName=document.querySelector(".name");
let productQuantity=document.querySelector(".quantity");
let productPrice=document.querySelector(".price");
myForm.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    console.log(productName.value,productQuantity.value,productPrice.value);
    let newProduct={name:productName.value,price:productPrice.value,quantity:productQuantity.value};
    productData.push(newProduct);
    localStorage.setItem("products",JSON.stringify(productData));
    showProduct();
});

// page pe data show krta hai
function showProduct(){
let productJson=localStorage.getItem("products");
console.log(productJson);
let productInfo=JSON.parse(productJson);
console.log(productInfo);
let productList=document.querySelector(".productList");
productList.innerHTML="";
for(let i=0;i<productInfo.length;i++){
    let productItem=productInfo[i];
    console.log(productItem);
    let li=document.createElement("li");
    li.innerHTML=`<span class="productName">${productItem.name}</span>
    <span class="productQuantity">${productItem.quantity}</span>
    <span class="productPrice">${productItem.price}</span>`
    productList.append(li);
}
}
showProduct();