/*Open tabs */
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
/*image.animation */

var a = 0;
var myTimer;
var pics = new Array(5);
for (let i = 0; i < 5; i++) {
  pics[i] = new Image;
  pics[i].src = "anime/pic" + i + ".jpg";
}
function animation() {
  document.images['main_img'].src = pics[a].src;
  a = (a + 1) % 5;
}

/*jquery_contactSection */


for (let i = 0; i < 3; i++) {
  let icon_id = '#contact_icon' + i;
  let contact_id = '#contact' + i;
  $(document).ready(function () {
    $(icon_id).click(function () {
      $(contact_id).toggle();
    });
  });
}
