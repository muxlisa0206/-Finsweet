const menuToggle = document.getElementById("toggle")
const close = document.getElementById("close")
const menus = document.getElementById("menus")


menuToggle.addEventListener("click" , () => {
    menus.classList.add("menus_hide")
})

close.addEventListener("click" , () => {
    menus.classList.remove("menus_hide")
})