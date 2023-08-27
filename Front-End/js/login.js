const email=document.getElementById("email").value;
const pwd=document.getElementById("pswrd").value;
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ; 
const btnLogin = document.getElementById("btnLog").value;

btnLogin.addEventListener("click",()=>{
   if(email==''){
    alert("Please enter email !");
}else if(pwd==''){
    alert("Enter the password !");
}else if(!filter.test(email)){
    alert("Enter Valid email !")
}else if(pwd.length < 6 || pwd.length > 6){
    alert("Password min & max length is 6 !");
}else{
    alert('Thank You for Login & You are Redirecting to Campuslife Website');
   
}
});
 


// const loginsec=document.querySelector('.login-section')
// const loginlink=document.querySelector('.login-link')
// const registerlink=document.querySelector('.register-link')
// registerlink.addEventListener('click',()=>{
//     loginsec.classList.add('active')
// })
// loginlink.addEventListener('click',()=>{
//     loginsec.classList.remove('active')
// })