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
        var productT = document.querySelectorAll

    }
    var trcontent = '<td style="display: flex; align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt="">' + productName + '</td><td> <p><span>' + productPrice + '</span><sup>đ</sup></p></td> <td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.appendChild(addtr);

    carttotal()
} 

// ------------------hamtong-----------
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = parseInt(cartItem[i].querySelector("input").value);
        var productPriceText = cartItem[i].querySelector("span").innerText;
        var productPrice = parseFloat(productPriceText.replace('đ', '').replace(',', '')); // Loại bỏ 'đ' và dấu ',' nếu có

        var totalA = inputValue * productPrice * 1000; // Tính tổng tiền của mỗi sản phẩm
        totalC = totalC + totalA; // Cộng tổng tiền của mỗi sản phẩm vào tổng tổng cộng của giỏ hàng
        totalD= totalC.toLocaleString('de-DE')

    }

    var carTotalA = document.querySelector(".price-total span");
    carTotalA.innerHTML = totalD; // Sử dụng toLocaleString() để định dạng số có dấu phẩy
}
