var allProducts = document.querySelectorAll(".products li");
var div1 = document.querySelector("#div1");
var divTotal = document.querySelector("#totalPrice");
var btn1 = document.querySelector("#showPrice");
var totalPrice = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    totalPrice += +item.getAttribute("price");
    div1.innerHTML += item.textContent + "-";

    if (div1.innerHTML != "") {
      btn1.style.display = "block";
    }
  };
});

btn1.onclick = function () {
  divTotal.innerHTML = "TotalPrice :" + totalPrice;
  //console.log(totalPrice)
};
