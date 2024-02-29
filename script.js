let heading = document.querySelector("#heading");
let logo = document.querySelector("#logo span");
let topbtn = document.querySelector("#topbtn");


window.onscroll = () =>{
if(window.scrollY >= 50){
    heading.classList.add("active");
    logo.style.color = "black";
    topbtn.style.display = "flex";
}
else{
    heading.classList.remove("active");
    logo.style.color = "red";
    topbtn.style.display = "none";

}
}
// copright year
let year = document.querySelector("#year");
let d = new Date();
year.innerText = d.getFullYear();
