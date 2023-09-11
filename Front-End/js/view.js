let studentTable = document.getElementById("tbl");

//---------------------Loade-------------------------------------------------
function loadeTable() {
  fetch("http://localhost:8080/student")
    .then((response) => response.json())
    .then((res) => {
      let tblBody = `
                    <tr>
                    <th>Student No</th>
                    <th>IMG</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    
                    <th>Address</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Mobile Number</th>
                    <th>Batch Name/No</th>
                    <th>NIC</th>
                    <th>Register Date</th>
                    </tr>`;
      res.forEach((element) => {
        console.log(element);
        tblBody += `<tr>
                    <td>${element.id}</td>
                    <td><img src="/studentPhoto/${element.imgName}" class="i_m_g"></td>
                    
                    <td>${element.fullName}</td>
                    <td>${element.email}</td>
                   
                    <td>${element.address}</td>
                    <td>${element.age}</td>
                    <td>${element.gender}</td>
                    <td>${element.mobile}</td>
                    <td>${element.batchName}</td>
                    <td>${element.nic}</td>
                    <td>${element.registerDate}</td>
                    <td><button onclick="deleteById(${element.id})" >Delete</button></td>
                    </tr>`;
      });
      studentTable.innerHTML = tblBody;
    });
}

loadeTable();
// =================Delete======================================
function deleteById(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/student/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => location.reload())
    .catch((error) => console.log("error", error));
  //alert("Deleted");
  console.log(result);
}

//-----------------------Search---------------------------------------------
let searchValue = document.getElementById("searchBarTxt").value;
function search() {

  alert(searchValue);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let body = `   <tr>
  <th>Student No</th>
  <th>IMG</th>
  <th>Full Name</th>
  <th>Email</th>
  <th>Password</th>
  <th>Address</th>
  <th>Age</th>
  <th>Gender</th>
  <th>Mobile Number</th>
  <th>Batch Name/No</th>
  <th>NIC</th>
  <th>Register Date</th>
  </tr>`;

  fetch(`http://localhost:8080/student/${searchValue}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((element) => {
        body += ` <tr>
      <td>${element.id}</td>
      <td><img src="/studentPhoto/${element.imgName}" class="i_m_g"></td>
      
      <td>${element.fullName}</td>
      <td>${element.email}</td>
      <td>${element.password}</td>
      <td>${element.address}</td>
      <td>${element.age}</td>
      <td>${element.gender}</td>
      <td>${element.mobile}</td>
      <td>${element.batchName}</td>
      <td>${element.nic}</td>
      <td>${element.registerDate}</td>
        <td><button onclick="deleteById(${element.id})" >Delete</button></td>
                                </tr>`;
      });

      studentTable.innerHTML = body;
    })
    .catch((error) => console.log("error", error));
}
//------------------------refresh------------------
function refresh(){
  loadeTable();
  searchValue = document.getElementById("searchBarTxt").value='';
}