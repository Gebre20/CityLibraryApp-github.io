window.onload = function () {
 let arrMembers = [
    {
      fname: "John",
      lname: "Smith",
      bdate: "10/05/2000",
      country: "US",
      email: "john@gmail.com",
      password: "abc",
    },
    {
      fname: "Anna",
      lname: "James",
      bdate: "01/15/2005",
      country: "UK",
      email: "anna@gmail.com",
      password: "def",
    },
    {
      fname: "Bafana",
      lname: "Stark",
      bdate: "08/25/1990",
      country: "South Africa",
      email: "bafana@gmail.com",
      password: "ghi",
    },
  ];
  console.log(arrMembers[0].email)
  const logInfo = document.querySelector(".loginForm");
  logInfo.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    let emailEntered = document.getElementById("email").value;
    let passwordEntered = document.getElementById("password").value;
        const checkMe = arrMembers.find(member => member.email ===emailEntered && member.password == passwordEntered);
        if(checkMe){
            window.location.href = "../homePage.html";
        }else{ 
                alert("Either the password or email you entered didn't match our records")
                window.location.href = "../otherHTMLPages/signUp.html";               
        }
    });
};
