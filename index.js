

// storing input to localStorage

localStorage.setItem('userName', "Rahul roy");
localStorage.setItem('password', "roy123456");

// localStorage.setItem("User1", JSON.stringyfy({userName:"Rahul Roy,password:roy123456}))



// check if stored data from localStorage is equal to entered data in the   login-form
function check(event) {
 event.preventDefault();
 var storedName = localStorage.getItem('userName');
 var storedPw = localStorage.getItem('password');

 // entered data from the login-form
 var userName = document.getElementById('userName');
 var userPw = document.getElementById('password');

 // check if stored data from localStorage is equal to data from login form
 if(userName.value !== storedName || userPw.value !== storedPw) {
     alert('Invalid User-name password');
 }else {
    // alert('successfully logged-in');
     //location = location['resumePage.html'];
     window.location.replace("resumePage.html");
 }
}


function stopBack() {
 window.history.go(1);
}