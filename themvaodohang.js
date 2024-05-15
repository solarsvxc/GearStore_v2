const btn = document.querySelectorAll(".btn-primary"); // Chọn tất cả các nút ".btn-primary"
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        var product = button.closest(".card.items"); // Tìm phần tử gần nhất với lớp ".card.items"
        var productImg = product.querySelector(".card-img-top").src; // Lấy src của hình ảnh
        var productName = product.querySelector(".card-title").innerText; // Lấy tên sản phẩm
        var productPrice = product.querySelector(".card-subtitle").innerText; // Lấy giá sản phẩm
        
        // Gọi hàm addcart với thông tin sản phẩm đã lấy được
        addcart(productPrice, productImg, productName);
    });
});

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML==productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return 
        }

    }
    var trcontent = '<td style="display: flex; align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td><td> <p><span class="price">' + productPrice + '</span><sup>đ</sup></p></td> <td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cartDellet">Xóa</span></td>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.appendChild(addtr);
    carttotal()
    delletCart()
} 

// ------------------hamtong-----------
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = parseInt(cartItem[i].querySelector("input").value);
        var productPriceText = cartItem[i].querySelector(".price").innerText;
        var productPrice = parseFloat(productPriceText.replace('đ', '').replace(',', '')); // Loại bỏ 'đ' và dấu ',' nếu có

        totalA = inputValue * productPrice * 1000; // Tính tổng tiền của mỗi sản phẩm
        totalC = totalC + totalA; // Cộng tổng tiền của mỗi sản phẩm vào tổng tổng cộng của giỏ hàng
        // totalD= totalC.toLocaleString('de-DE')

    }

    var carTotalA = document.querySelector(".price-total span");
  
   
    carTotalA.innerHTML = totalC.toLocaleString('de-DE')// Sử dụng toLocaleString() để định dạng số có dấu phẩy
   
    inputchange ()
}
// ----------------------Dellet------------------C
function delletCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cartDellet")
        productT[i].addEventListener("click", function(event) {
            var cartDellet = event.target
            var cartItemR = cartDellet.parentElement.parentElement
            cartItemR.remove()
            carttotal(); // Cập nhật tổng tiền sau khi xóa sản phẩm
        })
    }
}
function inputchange () {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal();
        })
    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".ri-shopping-cart-2-line"); // Chỉnh sửa selector để chọn đúng biểu tượng giỏ hàng
const cart = document.querySelector(".cart"); // Chọn phần tử chứa giỏ hàng

cartshow.addEventListener("click", function() {
    cart.style.right = "0"; // Hiển thị giỏ hàng bằng cách thiết lập right thành 0
});
cartbtn.addEventListener("click", function() {
    cart.style.right = "-100%"; // Hiển thị giỏ hàng bằng cách thiết lập right thành 0
});
const cartSection = document.querySelector('.cart');

        // Get the close button
        const closeBtn = document.getElementById('closeCartBtn');

        // Add click event listener to the close button
        closeBtn.addEventListener('click', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            
            // Hide the cart section
            cartSection.style.display = 'none';
        });


