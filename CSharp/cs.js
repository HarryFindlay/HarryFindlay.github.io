var ifImage = document.querySelector(".if-learning-container > img");


ifImage.addEventListener("click", function() {   
  ifImage.src = "cs images/CS smallest num of 3 Console.PNG";

  setTimeout(function() {
    ifImage.src = "cs images/CS smallest num of 3.PNG";
  }, 5000);
}, false);


var heightConverterImg = document.querySelector(".height-converter-container > img");

heightConverterImg.addEventListener("click", function() {   
  heightConverterImg.src = "cs images/Height Converter Console.PNG";

  setTimeout(function() {
    heightConverterImg.src = "cs images/Height Converter.PNG";
  }, 5000);
}, false);

var numGuesserImg = document.querySelector(".number-guesser-container > img");

numGuesserImg.addEventListener("click", () => {
  numGuesserImg.src = "cs images/Number Guesser Console.PNG";

  setTimeout(function(){
    numGuesserImg.src = "cs images/Number Guesser.PNG";
  }, 5000);
}, false);