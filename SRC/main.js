const toggle = document.querySelector(".toggle")
const ul = document.querySelector("ul")

toggle.addEventListener("click", () =>{
    toggle.classList.toggle("active")
    ul.classList.toggle("activeUl")
})