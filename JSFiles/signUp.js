
window.onload = function(){
      const logInfo = document.querySelector(".signUpForm");
      logInfo.addEventListener("submit", function(event){
          event.preventDefault();
          let fn = document.getElementById("email");
          let ln = document.getElementById("password");
          let bd = document.getElementById("bdate");
          let cn = document.getElementById("country");
          let em = document.getElementById("email");
          let pas = document.getElementById("password");

        
          if(fn.value != "" && ln.value != "" && 
          bd.value != "" && cn.value != "" && 
          em.value != ""  && pas.value != ""){
                let obj = {fname: fn.value,
                    lname: ln.value,
                    bdate: bd.value,
                    country: cn.value,
                    email: em.value,
                    password: pas.value,
                };
                            
                window.location.href = "../login.html";          
          }else{
              alert("please fill in the correct format");
              window.location.href = "../signUp.html";
          }
      })
     
      let body = document.getElementById("signUpForm").value;
    fetch("/Users/gebrehiwottekulu/Desktop/CityLibraryApp/CityLibraryApp-github.io/localjson/members.json", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        bdate: bdate,
        country: country,
        email: email,
        password: password
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

  }






