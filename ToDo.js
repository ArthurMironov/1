const ul=document.querySelector("ul")

ul.addEventListener("click",function (event){
    event.target.classList.toggle("done")
}, false)