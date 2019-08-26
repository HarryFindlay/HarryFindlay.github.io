var ifImage = document.querySelector(".if-learning-container > img");


ifImage.addEventListener("mouseenter", function( event ) {   
    ifImage.src = "images/CS/CS smallest num of 3 console.PNG";

    setTimeout(function() {
      ifImage.src = "images/CS/CS smallest num of 3.PNG";
    }, 5000);
  }, false);