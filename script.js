function formValidate() {

    // get the element of first name
    let name = document.getElementById('name').value.trim();

    if (name === '') {
        // document.getElementById('error').innerHTML = "name is requierd"
        document.getElementById('name').style.border = '3px solid red'
        document.getElementById('error').style.visibility = 'visible';
        // alert('name is requierd')
        return false;
    }
    // only valid name is alowed
    let namePattern = /^[A-Za-z]+$/;
    if (name.match(namePattern))
        true;
    else {
        document.getElementById('ferror').innerHTML = `Only alphabetical `
        return false;
    }
    if (name.length < 5) {
        document.getElementById('ferror').innerHTML = `Length of name is too short`
        return false;
    }

    if (name.length > 15) {
        document.getElementById('ferror').innerHTML = `Length of name is too long`;
        return false;
    }

    // get the element of last name 
    let lName = document.getElementById('lname').value;
    if (lName === '') {
        document.getElementById('lerror').innerHTML = `Last Name is empty not allowed`
        return false;
    }
    if (lName.length <= 3) {
        document.getElementById('lerror').innerHTML = `Length of last name is too short`
        return false;
    }

    if (lName.length > 15) {
        document.getElementById('lerror').innerHTML = `Length of last name is too long`
        return false;
    }
    // get the element of phone number

    let phoneNum = document.forms['myForm']['phone'].value;
    if ((isNaN(phoneNum))) {
        document.getElementById('perror').innerHTML = 'enter only numeric value'
        return false;
    }
    if (phoneNum.length < 10) {
        document.getElementById('perror').innerHTML = 'enter only 10 digit'
        return false;
    }

    // get the element of email 
    let emailId = document.myForm.email.value;
    // if email is empty then return false
    if (emailId === '') {
        document.getElementById('email-error').innerHTML = "email is requird"
        return false;
    }

    // if email start with @ then show error
    if (emailId.indexOf('@') <= 0) {
        document.getElementById('email-error').innerHTML = "Invalid @ position "
        return false;
    }

    // if email 4th and 3rd position is not dot(.) then show error
    if ((emailId[emailId.length - 4] != ".") && (emailId[emailId.length - 4] != ".")) {
        document.getElementById('email-error').innerHTML = "Invalid . position "
        return false;
    }
    
    // get the element of password
    let passWord = document.getElementById('pass').value;
    let passError = document.getElementById('pass-error');
    if(passWord == ''){
      passError.innerHTML = 'password is requird '
      return false;
    }
    else {
        alert(`Form submited Successfully`);
        return true;
    }
}