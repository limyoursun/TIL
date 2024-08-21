const calc = document.getElementById("calc");
const btn = document.querySelectorAll("button");
const btnNumber = Array.from(btn).filter(btn => btn.hasAttribute("value"));

for(let i = 0; i < btnNumber.length; i++){
    btnNumber[i].addEventListener("click", function(){
        calc.innerHTML += btnNumber[i].value;
    })
}
