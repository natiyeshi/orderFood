
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let phone=document.getElementById('phonenumber').value.trim();
    let password= document.getElementById('password').value.trim();
    let errors = document.querySelectorAll(".error")
    if(phone == " " || password==''){
        
        if(phone == ""){
            errors[0].innerHTML = "* required phone "
        } else{
            errors[0].innerHTML = ""    
        }
        if(password == ""){
            errors[1].innerHTML = "* required password"
        } else{
            errors[1].innerHTML = ""
        }
        return
    }
    errors[0].innerHTML = ""    
    errors[1].innerHTML = ""    
    if(password !== "0000" || phone !== "0945954712"){
        errors[1].innerHTML = "wrong password"
        return
    } 
    location.href = "index.html"

})
