const studentProfiles=document.getElementById("profilesStudent");
let tblBody = ` `;
fetch("http://localhost:8080/std")
.then(response => response.json())
.then(res => {
    
    res.forEach(element => {
        
        tblBody += `
         <div class="profile_card">
        
         <img src="img/education.png" alt="">
                <h1>${element.fullName}</h1>
                <button onclick='loadProfile(${element.id})'>Profile</button>
                <h6>${element.id}</h6>

            </div>`;

    });
    studentProfiles.innerHTML = tblBody;
})

function loadProfile(id){
    alert("View Profile"+id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:8080/std/findById/${id}`, requestOptions)
      .then(response => response.text())
      .then(result =>{
        console.log(result)
        let stdObj = JSON.parse(result);
        let tblBody = ` `
            
        tblBody += `
        <div class="profiles">
        <section class="main">
        <div class="profile-student">
          <div class="image">
            <img src="img/WhatsApp Image 2023-08-29 at 18.54.52.jpg" alt="" class="profile-pic">
          </div>
          <div class="data">
            <h2>${stdObj.fullName}</h2>
            <h4>${stdObj.email}</h4>
            <h4>${stdObj.password}</h4>
            <h4>${stdObj.address}</h4>
            <h4>${stdObj.age}</h4>
            <h4>${stdObj.gender}</h4>
            <h4>${stdObj.mobile}</h4>
            <h4>${stdObj.batchName}</h4>
            <h4>${stdObj.nic}</h4>
            <h4>${stdObj.registerDate}</h4>
          </div>
          
       
        </div>
      </section>
      </div>
   `;
    
        
        studentProfiles.innerHTML = tblBody;


    } 
      )
      .catch(error => console.log('error', error));

}