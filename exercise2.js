function getFormValue() {
    let formName = document.getElementById("formname");
    console.log(formName);
    let firstName = formName.firstname.value;
    let lastName = formName.lastname.value;

    alert("Hello! " + firstName + " " + lastName);
}