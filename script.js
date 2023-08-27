let menu_button = document.getElementById("menu-btn")
let menu_box = document.getElementsByClassName("menu")[0]
let blurbody = document.getElementsByClassName("bodycontent")[0]
let product_text = document.getElementsByClassName("product-text")[0]
let cross_btn = document.getElementById("cross-btn")
let imgboxes = document.getElementsByClassName("img-box")[0]

const show_hide = ()=>{
    menu_box.classList.toggle("show-hide")
    blurbody.classList.toggle("blur")
    
}
  




// menu_box.style.visibility ="hidden"
menu_button.addEventListener("click",show_hide)
cross_btn.addEventListener("click",show_hide)
