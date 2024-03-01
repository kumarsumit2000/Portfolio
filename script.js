let heading = document.querySelector("#heading");
let logo = document.querySelector("#logo span");
let topbtn = document.querySelector("#topbtn");


window.onscroll = () =>{
if(window.scrollY >= 100){
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



// mobile menu 
let menu = document.querySelector("#menu");
let mobileMenu = document.querySelector("#mobileMenu");
mobileMenu.addEventListener("click",() =>{
    if(menu.style.display == "block"){
    menu.style.display = "none"
    mobileMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    else{
        menu.style.display = "block"
        mobileMenu.innerHTML = `<i class="fa-solid fa-x"></i>`

    }
})

// mobile menu 
