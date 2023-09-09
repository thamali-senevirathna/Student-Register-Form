const email=document.getElementById("txtEmail");
const password =document.getElementById("txtPassword");
const btnLogin=document.getElementById("btnLogin");

btnLogin.addEventListener("click",()=>{
let emailTxt=email.value;
let passwordTxt=password.value;
console.log(emailTxt);
console.log(passwordTxt);

fetch(`http://localhost:8080/student/${emailTxt}/${passwordTxt}`)
.then(response=>response.json())
.then(result=>{
    if(result==true){
        console.log(result);
        alert("Login Success!")
        window.open("../about.html","_top");
    }else{
        console.log(result);
        alert("Login Failed!");
    }
})

});