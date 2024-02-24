var a = document.querySelector("#bulb")
var b = document.querySelector("button")
var flag = 1
b.addEventListener('click', function(){
    
    if (flag==1){
        b.innerHTML = "OFF"
        a.style.backgroundColor = "black"
        flag = 0
    }
    else {
        b.innerHTML = "ON"
        a.style.backgroundColor = "yellow"
        flag = 1
    }
})