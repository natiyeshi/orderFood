
const Validate= function (e) {
    e.preventDefult()
    let fname= document.getElementById('fname').value.trim();
    let lname=document.getElementById('lname').value.trim();
    let phone=document.getElementById('phonenumber').value.trim();
    let password= document.getElementById('password').value.trim();
    let cpassword=document.getElementById('cpassword').value.trim();
    let bttn= document.querySelector('.bttn');
        
    if(fname==''  ||lname==''  || password=='' ||cpassword==''){
        alert('please eneter all required fields');
        return
    }
     if(phone.length<9|| phone.length>12 ){
        alert('phone number length should be between 9 and 12');
        return
    }
     if(!password.match(/[0-9]/) || !password.match(/[a-z]/) || !password.match(/[A-Z]/)){
        alert('password format should contain number , small characters and captial charachters');
        return
    }
     if(password.length<4){
        alert('password should contain atleast four charachters');
        return
    }
     if (password!=cpassword){
        alert('password and second password  should match');
        return
    }

} 
