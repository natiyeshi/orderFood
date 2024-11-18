
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let fname= document.getElementById('fname').value.trim();
    let lname=document.getElementById('lname').value.trim();
    let phone=document.getElementById('phonenumber').value.trim();
    let password= document.getElementById('password').value.trim();
    let cpassword=document.getElementById('cpassword').value.trim();
    let errors = document.querySelectorAll(".error")
    if(fname==''  ||lname==''  || password=='' ||cpassword==''){
        if(fname == ""){
            errors[0].innerHTML = "* required first name"
        } else{
            errors[0].innerHTML = ""    
        }
        if(lname == ""){
            errors[1].innerHTML = "* required last name"
        } else{
            errors[1].innerHTML = ""    
        }
        if(phone == ""){
            errors[2].innerHTML = "* required phone "
        } else{
            errors[2].innerHTML = ""    
        }
        if(password == ""){
            errors[4].innerHTML = "* required password"
        } else{
            errors[4].innerHTML = ""    
        }
        if(cpassword == ""){
            errors[5].innerHTML = "* required confirm"
        } else{
            errors[5].innerHTML = ""    
        }
        return
    }
    
    if(password !== cpassword){
        errors[5].innerHTML = "different password"
        return
    } 
    location.href = "index.html"

})
