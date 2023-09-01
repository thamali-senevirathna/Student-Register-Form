const studentProfiles=document.getElementById("profilesStudent");
fetch("http://localhost:8080/student")
.then(response => response.json())
.then(res => {
    console.log(res);
    let tblBody = ` `
    res.forEach(element => {
        
        tblBody += `
         <div class="profile_card">
        
         <img src="img/education.png" alt="">
                <h1>${element.fullName}</h1>
                <h6>${element.id}</h6>
                <a href="student-profile.html"><button>Profile</button></a>
            </div>
   `;

    });
    studentProfiles.innerHTML = tblBody;
})