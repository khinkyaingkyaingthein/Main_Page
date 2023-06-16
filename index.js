const navbar = document.querySelector("nav")
const openBtn = document.querySelector("#menu-btn")
const colseBtn = document.querySelector("#close-btn")

openBtn.addEventListener("click",()=>{
  navbar.classList.add("open")
})
colseBtn.addEventListener("click",()=>{
  navbar.classList.remove("open")
})