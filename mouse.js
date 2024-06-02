
let products = null;
// get datas from file json
    // 
    fetch('/json/mouse.json')
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
        let newProduct = document.createElement('div');
        const links = '/detail.html?id=' + product.id;
        newProduct.classList.add('col-md-3');
        newProduct.innerHTML = 
        `
        <div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${product.brand}</h6>
        <p class="card-text">${product.info}</p>
        <div class="d-flex align-item-center">
        <p>${product.price}</p>
        <button class="button-mua">  
           <a class="button-links" href="${links}">Mua Ngay</a>
          </button>
        </div>
        </div>
        </div>
        
        `;
        
        listProductHTML.appendChild(newProduct);
    });
}
}