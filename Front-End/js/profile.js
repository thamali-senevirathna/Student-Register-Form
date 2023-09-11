const studentProfiles = document.getElementById("profilesStudent");
const profile = document.getElementById("student-Profile");
let tblBody = ` `;

fetch("http://localhost:8080/student")
  .then((response) => response.json())
  .then((res) => {
    res.forEach((element) => {
      tblBody += `
      <div id="profilesStudent">
      <section class="main">
      <div class="container">
        <div class="upper-container"></div>
        <img src="/studentPhoto/${element.imgName}" class="i_m_g" alt="">
        <div class="card-body">
        <h1 class="name" >${element.fullName}</h1>
        <h6 class="id">${element.id}</h6>
        <div class="buttons">
        <button onclick='loadProfile(${element.id})' class="btn">Profile :)</button>
        </div>
        <div class="buttons">
        <a href="view.html"> <button class="btn">Back <-</button></a>
        </div>
      </div>
      
      </div>
    </section>
      <div class="attribution">
  
    </div>
      </div>
     
        
        `;
    });

    studentProfiles.innerHTML = tblBody;
  });

function loadProfile(id) {
  alert("View Profile" + id);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/student/findById/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      let stdObj = JSON.parse(result);
      let tblBody = ` `;

      tblBody += `
      <div class="profiles" id="student-Profile" >
      <div class="card">
      <div class="lines"></div>
      <div class="imgBx">
    <img src="/studentPhoto/${stdObj.imgName}" class="profile-pic" alt="">
      </div>
      <div class="content">
          <div class="details">
              <h2>${stdObj.fullName}<br><span>${stdObj.email}</span></h2>
              <div class="data">
              <h3>${stdObj.address}<br><span>Address</span></h3>
                  <h3>${stdObj.age}<br><span>Age</span></h3>
                  <h3>${stdObj.mobile}<br><span>Mobile</span></h3>
                  <h3>${stdObj.batchName}<br><span>Batch</span></h3>
                  <h3>${stdObj.nic}<br><span>NIC</span></h3>
              </div>
               <div class="actionBtn">
               <a href="profiles.html"> <button>Back</button></a>
                         </div>
          </div>
      </div>
   </div>
      </div>
    
   `;
 

      studentProfiles.innerHTML = tblBody;

    })
    .catch((error) => console.log("error", error));
}
