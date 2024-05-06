const year = new Date().getFullYear();
const fourthOfJuly = new Date(2024, 5,14,0,0,0).getTime();
const fourthOfJulyNextYear = new Date(2024, 5,14,0,0,0).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }




  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("countdown").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>Ngày</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>Giờ</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>Phút</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>Giây</div> \
</div>";

}, 1000);