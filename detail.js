let products = null;
// get datas from file json
fetch('cpu.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        showDetail();
})

function showDetail(){
// remove datas default from HTML
let detail = document.querySelector('.row-product');
let productId =  new URLSearchParams(window.location.search).get('id');
let thisProduct = products.filter(value => value.id == productId)[0];
//if there is no product with id = productId => return to home page
if(!thisProduct){
    window.location.href = "/";
}

detail.querySelector('.product-img img').src = thisProduct.image;
detail.querySelector('.product-title').innerText = thisProduct.name;
detail.querySelector('.product-price').innerText = '$' + thisProduct.price;
detail.querySelector('.product-brand').innerText = thisProduct.brand;

(products.filter(value => value.id != productId)).forEach(product => {
    let newProduct = document.createElement('a');
    newProduct.href = '/detail.html?id=' + product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML =
    `
    <img src="${product.image}" alt="">
    <div class="product-title">${product.name}</div>
    <div class="product-price">${product.price}</div>
    <div>Hãng sản xuất: <span class="product-brand">${product.brand}</span></div>
    `;
});
}