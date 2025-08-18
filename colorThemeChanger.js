
let buttons = document.querySelectorAll("button");

let colors = ["red", "green", "blue", "orange" ,"black"];

buttons.forEach((btn, index) => {
    btn.addEventListener("click", function(){
        document.body.style.backgroundColor = colors[index];
        document.body.style.transition = "1s";
    });
});

