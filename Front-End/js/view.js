let studentTable = document.getElementById("tbl");

fetch("http://localhost:8080/student")
.then(response => response.json())
.then(res => {

    let tblBody = `
                    <tr>
                    <th>Student No</th>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Mobile Number</th>
                    <th>Batch Name/No</th>
                    <th>NIC</th>
                    <th>Register Date</th>
                    </tr>`
    res.forEach(element => {
        
        tblBody += `<tr>
                    <td>${element.id}</td>
                    
                    <td>${element.fullName}</td>
                    <td>${element.address}</td>
                    
                    
                    <td>${element.age}</td>
                    <td>${element.gender}</td>
                    <td>${element.mobile}</td>
                    <td>${element.batchName}</td>
                    <td>${element.nic}</td>
                    <td>${element.registerDate}</td>
                    </tr>`;

    });
    studentTable.innerHTML = tblBody;
})