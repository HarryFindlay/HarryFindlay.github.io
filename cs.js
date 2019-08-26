var ifImage = document.querySelector(".if-learning-container > img");

ifImage.addEventListener("click", () => {
    ifImage.src = "images/CS/CS smallest num of 3 console.PNG";

    if(ifImage.src == "images/CS/CS smallest num of 3 console.PNG"){
        ifImage.src = "images/CS/CS smallest num of 3.PNG";
    }
});