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
    var trcontent = '<td style="display: flex; align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt="">' + productName + '</td><td> <p><span>' + productPrice + '</span><sup>đ</sup></p></td> <td><input style="width: 30px; outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.appendChild(addtr);
}
