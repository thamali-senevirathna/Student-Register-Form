const fullName=document.getElementById("txtFullName");
const email=document.getElementById("txtEmail");
const password=document.getElementById("txtPassword")
const address=document.getElementById("txtAddress");
const age=document.getElementById("txtAge");
const gender=document.getElementsByName("radioGender");
const mobile=document.getElementById("txtMobile");
const batchName=document.getElementById("txtBatchName");
const nic=document.getElementById("txtNic");
const img=document.getElementById("img");

const registerDate=document.getElementById("txtRgDt");
const btnRegister=document.getElementById("btnRg1");
const btnClear = document.getElementById("btnClear");


btnRegister.addEventListener("click",()=>{
    let choseGender;
    for(let i=0; i< gender.length; i++){
        if(gender[i].checked){
            choseGender=gender[i].value;
        }
       }
    const formData=new FormData();
    formData.append("fullName" , fullName.value);
    formData.append("email" , email.value);
    formData.append("password" , password.value);
    formData.append("address" , address.value);
     formData.append( "age" , age.value);
     formData.append("gender" , choseGender);
     formData.append( "mobile" , mobile.value);
     formData.append( "batchName" , batchName.value);
     formData.append( "nic" , nic.value);
     formData.append("registerDate" , registerDate.value);
    formData.append("file",img.files[0]);

    console.log(formData);
    var requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: formData
        //redirect: 'follow'
    };

    fetch("http://localhost:8080/student/with", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error));
});
btnClear.addEventListener("click",()=>{
    fullName.value='';
    email.value='';
    password.value='';
    address.value='';
    age.value='';
    gender.value='';
    mobile.value='';
    batchName.value='';
    nic.value='';
    registerDate.value='';
    img.value='';
});

