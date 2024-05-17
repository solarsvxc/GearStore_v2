
let products = null;
// get datas from file json

    // 
    fetch('/json/cpu.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
})
// 


// 
function addDataToHTML(){
// remove datas default from HTML
let listProductHTML = document.querySelector('.listProduct');
// add new datas
if(products != null) // if has data
{
    products.forEach(product => {
        let newProduct = document.createElement('a');
        const linkss = '/detail.html?id=' + product.id;
        newProduct.href = '/detail.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.classList.add('card');
        newProduct.classList.add('col-2');
        newProduct.classList.add('items');
        newProduct.innerHTML = 
        `
        <div>
        <img src="${product.image}" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <h6 class="card-subtitle">${product.price}<sup>đ</sup></h6>
            <a href="${linkss}" class="card-link">Mua Ngay</a>
           <button  class="btn btn-primary"><i class="fas fa-shopping-cart"></i></button>
        </div>
        </div>
        `;
        
        listProductHTML.appendChild(newProduct);
    });
}
}