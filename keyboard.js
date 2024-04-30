const btn = document.querySelectorAll(".product-item button"); // Select all buttons inside product-item cards
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        var btnItem = event.target;
        var product = btnItem.closest(".product-item"); // Find the closest parent with the class "product-item"
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector(".card-title").innerText;
        var productPrice = product.querySelector(".card-subtitle").innerText;
       
        addcart(productPrice, productImg, productName);
    });
});

function  addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var trcontent = ' <tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt="">'+productName+'</td><td> <P><span>'+productPrice+'</span><sup>đ</sup></P></td> <td><input style="width: 30px; outline: none; " type="number" value="1" min="1       "></td><td style="cursor: pointer;">Xóa</td> </tr>'
    addtr.innerHTML = trcontent 
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr) 
    // console.log(cartTable) 
}