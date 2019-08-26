var ifImage = document.querySelector(".if-learning-container > img");


ifImage.addEventListener("click", function() {   
  ifImage.src = "images/CS/CS smallest num of 3 console.PNG";

  setTimeout(function() {
    ifImage.src = "images/CS/CS smallest num of 3.PNG";
  }, 5000);
}, false);


var heightConverterImg = document.querySelector(".height-converter-container > img");

heightConverterImg.addEventListener("click", function() {   
  heightConverterImg.src = "images/CS/Height Converter Console.PNG";

  setTimeout(function() {
    heightConverterImg.src = "images/CS/Height Converter.PNG";
  }, 5000);
}, false);

