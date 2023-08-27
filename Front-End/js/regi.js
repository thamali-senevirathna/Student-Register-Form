const fullName=document.getElementById("txtFullName");
const address=document.getElementById("txtAddress");
const age=document.getElementById("txtAge");
let gender=document.getElementsByName("radioGender");
const mobile=document.getElementById("txtMobile");
const batchName=document.getElementById("txtBatchName");
const nic=document.getElementById("txtNic");
const registerDate=document.getElementById("txtRgDt");
const btnRegister=document.getElementById("btnRg");
const btnReset = document.getElementById("btnRst");


btnRegister.addEventListener("click",()=>{
    let choseGender;
    for(let i=0; i< gender.length; i++){
        if(gender[i].checked){
            choseGender=gender[i].value;
        }
       }
   let student={
       "fullName" : fullName.value,
       "address" : address.value,
       "age" : age.value,
       "gender" : choseGender,
       "mobile" : mobile.value,
       "batchName" : batchName.value,
       "nic" : nic.value,
       "registerDate" : registerDate.value,
       "btnRegister" : btnRegister.value
   }
  console.log(student);

  fetch("http://localhost:8080/student", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
});
 
btnReset.addEventListener("click",()=>{
    if(btnReset.click){
        let resetDetails={
            "fullName" : fullName.value='',
            "address" : address.value='',
            "age" : age.value='',
            "gender" : choseGender='',
            "mobile" : mobile.value='',
            "batchName" : batchName.value='',
            "nic" : nic.value='',
            "registerDate" : registerDate.value='',
            "btnRegister" : btnRegister.value=''
        }
        alert("Do you want to clear !");
    }
    
});

