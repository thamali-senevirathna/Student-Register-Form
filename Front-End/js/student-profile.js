// const studentProfiles=document.getElementById("student-Profile");

// // ------------------------load profile------------------------------

// function loadProfile(){
  
// }

// fetch("http://localhost:8080/student")
// .then(response => response.json())
// .then(res => {
//     console.log(res);
//     let tblBody = ` `
//     res.forEach(element => {
        
//         tblBody += `
//         <div class="profiles">
//         <section class="main">
//         <div class="profile-card">
//           <div class="image">
//             <img src="img/WhatsApp Image 2023-08-29 at 18.54.52.jpg" alt="" class="profile-pic">
//           </div>
//           <div class="data">
//             <h2>${element.fullName}</h2>
//             <h4>${element.address}</h4>
//             <h4>${element.age}</h4>
//             <h4>${element.gender}</h4>
//             <h4>${element.mobile}</h4>
//             <h4>${element.batchName}</h4>
//             <h4>${element.nic}</h4>
//             <h4>${element.registerDate}</h4>
//           </div>
          
       
//         </div>
//       </section>
//       </div>
//    `;

//     });
//     studentProfiles.innerHTML = tblBody;
// })

// {}

let studentProfile = document.getElementById("profile");

// ---------------------------------Loading profile----------------------------------------------------

function loadProfiles() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let body = ``;

  fetch("http://localhost:8080/student")
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      res.forEach((element) => {
        body += `<tr>
          <td>
            <div class="testmonals-col">
              <img src="img/Untitled design round 2.png" alt="">
              <div>
                   <h2>${element.firstName + " " + element.lastName}</h2>
                   <br>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                   <br>
                  <h4>${element.email}</h4>
                  <h6>${element.country}</h6>
                  <br>
                  <input type="button" onclick="deleteStudent(${element.id
          })" value="Delete">
                  <input type="button" value="Update">
                  <input type="button" onclick="viewprofile(${element.id
          })" value="View Profile">
                  <h6 class="pinCode">PIN:STD#0${element.id}</h6>
              </div>
          </div>
          </td>
        </tr>`;
      });

      studentProfile.innerHTML = body;
    });
}

// -----------------------calling loadProfile Methords --------------------
loadProfiles();

// --------------------------------Search -----------------------------------
function searchBtn() {
  alert("Searching...");
  const searchText = document.getElementById("search_bar").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/student/${searchText}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let body = ``;

      data.forEach((element) => {
        body += `<tr>
          <td>
            <div class="testmonals-col">
            <img src="img/Untitled design round 2.png" alt="">
              <div>
                  <h2>${element.firstName + " " + element.lastName}</h2>
                   <br>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut maiores, error fugiat blanditiis nisi assumenda doloremque, officiis ipsum quis reiciendis! Neque corrupti ea delectus repellat dicta laborum obcaecati deserunt?</p>
                   <br>
                  <h4>${element.email}</h4>
                  <h6>${element.country}</h6>
                  <br>
                  <input type="button" onclick="deleteStudent(${element.id
          })" value="Delete">
                  <input type="button" value="Update">
                  <input type="button" onclick="viewProfile(${element.id
          })" value="View Profile">
                  <h6 class="pinCode">PIN:STD#0${element.id}</h6>
              </div>
          </div>
          </td>
        </tr>`;
      });

      studentProfile.innerHTML = body;
    })
    .catch((error) => console.log("error", error));
}







function viewprofile(id) {
  alert("View Profile"+id);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`http://localhost:8080/student/std-id/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => lodeProfile(result)
    )
    .catch(error => console.log('error', error));
}

function lodeProfile(result) {
  console.log(result);
 let stdObj = JSON.parse(result);
  let body = ``;
  body += `<tr>
  <td>
  <div class="sidenav">
  <div class="profile">
      <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100" height="100">

      <div class="name">
          ${stdObj.firstName}
      </div>
      <div class="job">
      ${stdObj.email}
      </div>
  </div>

  <div class="sidenav-url">
      <div class="url">
        <button onclick="deleteStudent(${stdObj.id})">Delete</button>
          <hr align="center">
      </div>
      <div class="url">
          <a href="#settings">Settings</a>
          <hr align="center">
      </div>
  </div>
</div>
<!-- End -->

<!-- Main -->
<div class="main">
  <h2>IDENTITY</h2>
  <div class="card">
      <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <table>
              <tbody>
                  <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>${stdObj.firstName+" "+stdObj.lastName}</td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>${stdObj.email}</td>
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>${stdObj.address}</td>
                  </tr>
                  <tr>
                      <td>Hobbies</td>
                      <td>:</td>
                      <td>${stdObj.hobbies+" : "+stdObj.otherHobby}</td>
                  </tr>
                  <tr>
                      <td>Selected Course</td>
                      <td>:</td>
                      <td>${stdObj.selectedCourse}</td>
                  </tr>
            
              </tbody>
          </table>
      </div>
  </div>

  <h2>SOCIAL MEDIA</h2>
  <div class="card">
      <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <div class="social-media">
            <table >
              <tr>
              <th>classX</th>
              <th>classXII</th>
              <th>graduation</th>
              <th>master></th>
              </tr>
              <tr>
              <td>${stdObj.classX}</td>
              <td>${stdObj.classXII}</td>
              <td>${stdObj.graduation}</th>
              <td>${stdObj.masters}</td>
              </tr>
            </table>
          </div>
      </div>
  </div>
</div>
  </td>
</tr>`;

studentProfile.innerHTML = body;
}


// ---------------------------------Delete Student--------------------------------------

function deleteStudent(idForDelete) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:8080/student/${idForDelete}`, requestOptions)
        .then((response) => response.text())
        .then(
          (result) => loadProfiles(),
          Swal.fire("Deleted!", "Your file has been deleted.", "success")
        )
        .catch((error) => console.log("error", error));
    }
  });
}