
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let password= document.getElementById('password').value.trim();
    let errors = document.querySelector(".error")
    if(password==''){
        
        if(password == ""){
            errors.innerHTML = "* required password"
        } else{
            errors.innerHTML = ""
        }
        return
    }
    errors.innerHTML = ""    
    if(password !== "0000"){
        errors.innerHTML = "wrong password"
        return
    } 
    location.href = "admin.html"

})
