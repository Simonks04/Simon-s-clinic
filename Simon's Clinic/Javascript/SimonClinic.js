/*
Author: Simon Karyankal Simon
Date: 4/16/2026
Title: Homework 4: JavaScript file
Description: This file is where all the validation, alert and modal boxes among other features happen.
*/
//document.getElementById("idk").innerHTML = navigator.cookieEnabled;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Till here r the modal code from W3Schools.

//Local date js from class:
const d = new Date(); //Gets the date from the user. Uncleanded so also has time, second etc.
    let text = d.toLocaleDateString(); //Convert to only MM/DD/YYYY(depends on how the calander looks on the user)
    document.getElementById("today").innerHTML = text;

/*Validation
function validateFname() {
    var fnamePattern = /^[a-zA-Z'-]+$/;
    var fname = document.getElementById("fname").value.trim();

    if (fname === "") {
        fname.setCustomValidity("First name is required.");
    } else if (!fnamePattern.match(fname)) {
        fnameInput.setCustomValidity("Only letters, apostrophes and dashes only.");
    } else {
        fname.setCustomValidity("");
    }
}*/

//Tried to change the validation pop up link itself.
//https://www.youtube.com/watch?v=KsjHNPkSbAo

//First name validation:
function validateFname(){
    let fname = document.getElementById("fname").value.trim();
    let fnamePattern = /^[a-zA-Z'-]+$/;
    
    if(fname === ""){
        document.getElementById("efname").innerHTML = "Please enter your first name.";
        return false;
    } 
    else if(!fname.match(fnamePattern)){
        document.getElementById("efname").innerHTML = "Use only letters, apostrophes and dashes.";
        return false;
    } 
    else {
        document.getElementById("efname").innerHTML = "";
        //document.getElementById("reviewName").innerHTML = ("Name: " + fname); 
        return true;
    }
}

function validateLname(){
    let lname = document.getElementById("lname").value.trim();
    let lnamePattern = /^[a-zA-Z'-]+$/;
    
    if(lname === ""){
        document.getElementById("elname").innerHTML = "Please enter your last name.";
        return false;
    } 
    else if(!lname.match(lnamePattern)){
        document.getElementById("elname").innerHTML = "Use only letters, apostrophes and dashes.";
        return false;
    } 
    else {
        document.getElementById("elname").innerHTML = "";
        //document.getElementById("reviewName").innerHTML = ("Name: " + lname); 
        if(document.getElementById("m_initial").value.trim() == ""){ //If middle initial is then only concatinate first and last name. Otherwise also do middle initial.
            document.getElementById("reviewName").innerHTML = ("Name is: " + document.getElementById("fname").value.trim() + " " + lname);}
            else{document.getElementById("reviewName").innerHTML = ("Name is: " + document.getElementById("fname").value.trim() + " " + document.getElementById("m_initial").value.trim() + " " +  lname);}
        return true;
    }
}

function validateDOB(){
    let dob = document.getElementById("birthday");
    let date = new Date(dob.value);

    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {//Checking if dob is in the futre.
        document.getElementById("edob").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;

    } else if (date < new Date(maxDate)) { //If dob is in the past by more than 120 years or not.
        document.getElementById("edob").innerHTML = "Date can't be more than 120 years ago";
        dob.value = "";
        return false;

    }else if(date == ""){//Making sure dob is entered.
        document.getElementById("edob").innerHTML = "Please enter your date of birth.";
        dob.value = "";
        return false;
    }
     else {
        document.getElementById("edob").innerHTML = "";
        document.getElementById("reviewDOB"). innerHTML = "Date of Birth is: " + dob.value.trim()
        return true;
    }
}

function validateSSN() {
    const ssn = document.getElementById("ssn").value;
    const ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnPattern.test(ssn)) { //Check to see if it matches the pattern.
        document.getElementById("essn").innerHTML = "Please enter a valid SSN";
        return false;
    }else if(ssn == ""){
        document.getElementById("essn").innerHTML = "Please enter your SSN";
        return false;

    } else {
        document.getElementById("essn").innerHTML = "";
        document.getElementById("reviewSSN"). innerHTML = "Social Security number is: " + ssn
        return true;
    }
}

function validateAddress(){
    let address = document.getElementById("address1").value;
    if(address == ""){
        document.getElementById("eaddress").innerHTML = "Please enter your address.";
        return false;
    } else{
        document.getElementById("eaddress").innerHTML = "";
        document.getElementById("reviewlocation1").innerHTML = "The address is: " + document.getElementById("address1").value.trim() + ", " + document.getElementById("address2").value.trim();
        return true;}
}

function validateCity(){
    let address = document.getElementById("city").value;
    if(address == ""){
        document.getElementById("ecity").innerHTML = "Please enter your city.";
        return false;
    } else{
        document.getElementById("ecity").innerHTML = "";
        return true;}
}

function validateState(){
    let state = document.getElementById("state").value;

    if (state === "Click and pick a state"){
        document.getElementById("estate").innerHTML = "Please enter your state";
        return false;
    } else {
        document.getElementById("estate").innerHTML = "";
        return true;
    }
}

function validateZIP(){
    const zipInput = document.getElementById("Zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");//Takes out all the symbols if entered.

    if (!zip) {
        document.getElementById("ezip").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("ezip").innerHTML = "";
    document.getElementById("reviewlocation2").innerHTML = document.getElementById("city").value.trim() + ", " + document.getElementById("state").value.trim() + ", " + zip;
    
    return true;
}

function validateemail(){
    let email = document.getElementById("mail").value.trim();
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email !== ""){
        if(!email.match(emailPattern)){
            document.getElementById("eemail").innerHTML = "Please enter a valid email.";
            return false;
        } else{
            document.getElementById("eemail").innerHTML = "";
            document.getElementById("remail").innerHTML = "Email : " + email;
            return true;
        }}
    
    return true;
}

function formatphone(){
    let num = document.getElementById("phone").value.trim();
    let phonenum = num.replace(/[^\d]/g, "");

    if(phonenum !== ""){ // not required
        if (phonenum.length != 10){
            document.getElementById("ephone").innerHTML = "Please enter a valid phone number.";
            return false;
        } else {
            let formatted = phonenum.slice(0,3) + "-" + phonenum.slice(3,6) + "-" + phonenum.slice(6);

            document.getElementById("phone").value = formatted; // update input
            document.getElementById("ephone").innerHTML = "";
            document.getElementById("rphone").innerHTML = "Phone: " + formatted;

            return true;
        }}

    return true;
}

function validateUserid() {
    uid = document.getElementById("username").value.toLowerCase();

    if (uid.length == 0) {
        document.getElementById("euserid").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("euserid").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let useridPattern = /^[a-zA-Z0-9_-]+$/;
    if (!useridPattern.test(uid)) {
        document.getElementById("euserid").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;

    } else if (uid.length < 5) {
        document.getElementById("euserid").innerHTML = 
        "User ID must be at least 5 characters";
        return false;

    } else {
        document.getElementById("euserid").innerHTML = "";
        document.getElementById("ruserid").innerHTML = "The username is " + uid;
        return true;
    }
}


function validatePass() {
    const pass = document.getElementById("password").value;
    //const username = document.getElementById("username").value;

    //Since password has multiple requirements all of which users may not be aware of while typing, an array is going to be used.
    const errorMessage = [];

    //checks for lowercase letters
    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }

    //checks for uppercase letters
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }

    //checks for numbers letters
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }

    //checks for special characters
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    //checks for username not in password
    if (pass.includes(document.getElementById("username").value)) {
        errorMessage.push("Password cannot contain username");
    }

    //Need atleast 8 letters.
    if (pass.length < 8) { 
    errorMessage.push("Password must be at least 8 characters long");
}

    //displays error message if theres errors
    const errorContainer = document.getElementById("e1pass");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`).join("");

    return errorMessage.length === 0;
}

function validatecpass(){
    pass = document.getElementById("password").value;
    cpass = document.getElementById("Cpassword").value;
/*
    if(pass == cpass){
        document.getElementById("ecpass").innerHTML = "";
        return true;
    }else{
        document.getElementById("ecpass").innerHTML = "Passwords does not match";
        return false;
    }*/
   if(pass != cpass){
        document.getElementById("ecpass").innerHTML = "Passwords does not match";
        return false;
   }else{
        document.getElementById("ecpass").innerHTML = "";
        document.getElementById("rpass").innerHTML = "The password is " + cpass;
        return true;
   }
}

//Dynamic slider code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

function showAlert(){
    var alertBox = document.getElementById("valAlertBox");
    var closeAlert = document.getElementById("CloseValBox");
    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

function validateEntireFile(){
    let validation = true;

    if(!validateFname()){ //First Name
        validation = false;
    }
    if(!validateLname()){ //Last Name
        validation = false;
    }
    if(!validateDOB()){ //Date of Birth
        validation = false;
    }
    if(!validateSSN()){ // Social Security
        validation = false;
    }
    if(!validateAddress()){ //Address line 1
        validation = false;
    }
    if(!validateCity()){//City
        validation = false;
    }
    if(!validateState()){ //State
        validation = false;
    }
    if(!validateZIP()){ //Zip Code
        validation = false;
    }
    if(!validateemail()){ //mail
        validation = false;
    }
    if(!formatphone()){ //Phone
        validation = false;
    }
    if(!validateUserid()){ //Username
        validation = false;
    }
    if(!validatePass()){ //Password
        validation = false;
    }
    if(!validatecpass()){ //Password confirmation
        validation = false;}


    if(validation){
        document.getElementById("submit").disabled = false;
    } else{
        document.getElementById("submit").disabled = true;
        showAlert();
    }
}

function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 48 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fname", cookieName: "FirstName"},
    {id:"m_initial", cookieName: "MiddleInitial"},
    {id:"lname", cookieName: "LastName"},
    {id:"birthday", cookieName: "DateOfBirth"},
    {id:"ssn", cookieName: "SocialSecurityNumber"},
    {id:"address1", cookieName: "AddressLine1"},
    {id:"address2", cookieName: "AddressLine2"},
    {id:"city", cookieName: "City"},
    {id:"state", cookieName: "State"},
    {id:"Zipcode", cookieName: "ZipCode"},
    {id:"mail", cookieName: "Email"},
    {id:"phone", cookieName: "PhoneNumber"},
    {id:"username", cookieName: "Username"},
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = getCookie("FirstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});