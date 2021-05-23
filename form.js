function validation(){

    var user = document.getElementById('user').value;
    var dob = document.getElementById('DOB').value;
    var pass = document.getElementById('Pass').value;
    var conpass = document.getElementById('ConPass').value;
    var mobilenumber = document.getElementById('MobileNumber').value;
    var adharnumber = document.getElementById('AdharCard').value;
    var email = document.getElementById('Email').value;


    if(user == "")
    {
        document.getElementById('username').innerHTML =" ** Please fill the field";
    }
       
    else if((user.length <= 2) || (user.length > 20)) 
    {
        document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    else if(!isNaN(user)){
        document.getElementById('username').innerHTML =" ** only characters are allowed";
        return false;
    }
    else
    {
    document.getElementById('username').innerHTML ="";
    }


    if(dob == ""){
        document.getElementById('Dob').innerHTML =" ** Please fill the field";
        return false;

    }
    else if(isNaN(dob)){
        document.getElementById('Dob').innerHTML =" ** only numbers are allowed";
        return false;
    }
    else
    {
    document.getElementById('Dob').innerHTML ="";
    }
    
    
    if(pass == ""){
        document.getElementById('pas').innerHTML =" ** Please fill the field";
        return false;
    }
    else if(pass.length<8){
        document.getElementById('pas').innerHTML =" ** password length must be more than 8 ";
        return false;

    }
    else
    {
    document.getElementById('pas').innerHTML ="";
    }

    if(conpass == ""){
        document.getElementById('conpas').innerHTML =" ** Passwords dont match";
        return false;
    }
    else if(pass != conpass){
        document.getElementById('conpas').innerHTML =" ** Passwords dont match";
        return false;
    }
    else
    {
    document.getElementById('conpas').innerHTML ="";
    }


    if(mobilenumber == ""){
        document.getElementById('mobile').innerHTML =" ** please enter number";
        return false;
    }
    else if(isNaN(mobilenumber)){
        document.getElementById('mobile').innerHTML =" ** please enter valid number";
        return false;
    }
    else if(mobilenumber.length != 10){
        document.getElementById('mobile').innerHTML =" ** please enter valid number";
        return false;
    }
    else
    {
    document.getElementById('mobile').innerHTML ="";
    }


    if(adharnumber == ""){
        document.getElementById('adhar').innerHTML =" ** Please fill the field";
        return false;
    }
    else if(adharnumber.length != 12){
        document.getElementById('adhar').innerHTML =" ** please enter valid adhar number";
        return false;
    }
    else if(isNaN(adharnumber)){
        document.getElementById('adhar').innerHTML =" ** please enter valid adhar number";
        return false;
    }
    else
    {
    document.getElementById('adhar').innerHTML ="";
    }


    if(email == ""){
        document.getElementById('mail').innerHTML =" ** Please fill the field";
        return false;
    }
    else if(email.indexOf('@') <= 0 ){
        document.getElementById('mail').innerHTML =" ** Please enter valid email";
        return false;
    }
    else if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('mail').innerHTML =" ** Please enter valid email";
        return false;
    }
    else
    {
    document.getElementById('mail').innerHTML ="";
    }
}
