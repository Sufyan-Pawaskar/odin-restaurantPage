import "./style.css"
import logo from "./assets/logo.png"

const navLogo = document.getElementById("logoEle");
console.log(navLogo)

const logoImg = document.createElement("img");
logoImg.src = logo;
logoImg.classList.add("logoImg");



navLogo.appendChild(logoImg)