// function clearErrors(){

//     errors = document.getElementsByClassName('formerror');
//     for(let item of errors)
//     {
//         item.innerHTML = "";
//     }


// }
// function seterror(id, error){
//     //sets error inside tag of id 
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

// function validateForm(){
//     var returnval = true;
//     clearErrors();

//     //perform validation and if validation fails, set the value of returnval to false
//     var name = document.forms['myForm']["fname"].value;
//     if (name.length<5){
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }

//     if (name.length == 0){
//         seterror("name", "*Length of name cannot be zero!");
//         returnval = false;
//     }

//     var email = document.forms['myForm']["femail"].value;
//     if (email.length>15){
//         seterror("email", "*Email length is too long");
//         returnval = false;
//     }

//     var phone = document.forms['myForm']["fphone"].value;
//     if (phone.length != 10){
//         seterror("phone", "*Phone number should be of 10 digits!");
//         returnval = false;
//     }

//     var password = document.forms['myForm']["fpass"].value;
//     if (password.length < 6){

//         // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
//         seterror("pass", "*Password should be atleast 6 characters long!");
//         returnval = false;
//     }

//     var cpassword = document.forms['myForm']["fcpass"].value;
//     if (cpassword != password){
//         seterror("cpass", "*Password and Confirm password should match!");
//         returnval = false;
//     }

//     return returnval;
// }
console.log("console is running");
let email = "prashant@gmail.com";
let email2 = 'prashantsako@g.in'

let charAtt = email.charAt(email.length-1);
console.log(charAtt)

// let char = email.indexOf(email);
// let char2 = '3';

// if(email[email.length-4] == char && email2[email2.length-3] == char2 ){
//     console.log(`the dot character ${char} is exist at -4 position nad . is exist at -3 postition ${char2}`)
// }
// else{
//     console.log(`the dot character ${char} is not exist at -4 position and . is not exist at -3 postition ${char2}`)
// }



// email.length;

// console.log(sliced)



