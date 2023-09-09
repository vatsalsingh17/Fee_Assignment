function showProduct(){
    let productJson=localStorage.getItem("products");
    console.log(productJson);
    let productInfo=JSON.parse(productJson);
  //  console.log(productInfo);
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