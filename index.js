let ContactForm = document.getElementsByClassName("ContactForm");

let firstname =  document.getElementsByClassName("firstname")
let firstnameinput  = document.getElementsByClassName("firstnameinput")
let lastname = document.getElementsByClassName("lastname")
let lastnameinput  = document.getElementsByClassName("lastnameinput")
let emaillabel = document.getElementsByClassName("emaillabel")
let emailinput = document.getElementsByClassName("emailinput")
let queryinput = document.getElementsByClassName("queryinput")
let checkbox = document.getElementsByClassName("checkbox")

if(firstname.value =="" || firstnameinput.value =="" || lastname.value =="" || lastnameinput.value =="" || emaillabel.value =="" || emailinput.value =="" || queryinput.value == "" || checkbox.value ==""){
    alert ("Ensure you input a value in both fields!")
}else{
    //perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
        `This form has a firstname of ${firstname.value} a firstnameinput of ${firstnameinput.value} a lastname of ${lastname.value} a lastnameinput of ${lastnameinput.value} an emaillabel of ${emaillabel.value} an emailinput of ${emailinput.value} a queryinput of ${emailinput.value} a checkbox of ${checkbox.value}`
    );
    firstname = "";
    firstnameinput = "";
    lastname = "";
    lastnameinput = "";
    emaillabel = "";
    emailinput = "";
    queryinput = "";
    checkbox = "";
}
