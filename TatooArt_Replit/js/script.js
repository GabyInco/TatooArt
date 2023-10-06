
let sigUp = document.getElementById("sigUp");
let sigIn = document.getElementById("sigIn");
let emailInput =document.getElementById("emailInput");
let title =document.getElementById("title");

sigIn.onclick = function() {
    emailInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    sigUp.classList.add("disable");
    sigIn.classList.remove("disable");

}

sigUp.onclick = function() {
    emailInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    sigUp.classList.remove("disable");
    sigIn.classList.add("disable");
    
}