let currentImageIndex = 0;
let currentTypeIndex = 0;
// 
const images = [
  ["img/advertisment/y415p8wv.png",
   "img/advertisment/4b6nct74.png",
    "img/advertisment/5owvp90o.png"],
    // 
  ["img/advertisment/3dsmr2va.png",
   "img/advertisment/gqarwwkh.png",
    "img/advertisment/yt2ojc9o.png"]
];
const types = ["27inch UltraGear™ (27GR95UM) MiniLED 4K UHD Nano IPS 144Hz 1ms G-SYNC® Compatible Gaming Monitor", "32inch UltraGear™ OLED Dual Mode 4K UHD 240Hz"];

const indicatorsContainer = document.getElementById('indicators');
createIndicators();

function createIndicators() {
  images[currentTypeIndex].forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === currentImageIndex) {
      indicator.classList.add('active');
    }
    indicator.addEventListener('click', () => {
      changeContent(index);
    });
    indicatorsContainer.appendChild(indicator);
  });
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    indicator.style.width = `calc(100% / ${images[currentTypeIndex].length})`;
    indicator.classList.toggle('active', index === currentImageIndex);
  });
}

function changeContent(index = (currentImageIndex + 1) % images[currentTypeIndex].length) {
  currentImageIndex = index;
  const image = document.getElementById('advertisement-image');
  const type = document.getElementById('product-type');

  // Thêm lớp fade để bắt đầu quá trình mờ dần
  image.classList.add('fade');
  type.classList.add('fade');
  // Thay đổi nội dung sau khi quá trình mờ dần bắt đầu
  setTimeout(() => {
    image.src = images[currentTypeIndex][currentImageIndex];
    type.innerText = types[currentTypeIndex];
    // Loại bỏ lớp fade để quá trình hiển thị lại bắt đầu
    image.classList.remove('fade');
    type.classList.remove('fade');
    
    // Cập nhật thanh trượt
    updateProgressBar();
  }, 500); // Thời gian này nên nhỏ hơn thời gian trong CSS để tránh bị ngắt quãng
}

// Tự động thay đổi nội dung sau mỗi 3 giây
setInterval(() => {
    changeContent();
    if ((currentImageIndex + 1) % images[currentTypeIndex].length === 0) {
      currentTypeIndex = (currentTypeIndex + 1) % types.length;
      // Xóa các chỉ báo cũ
      indicatorsContainer.innerHTML = "";
      // Tạo lại các chỉ báo cho loại sản phẩm mới
      createIndicators();
    }
  }, 3000);
  