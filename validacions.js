// VALIDACIÓ FORMULARI REGISTRE (myForm)
const form = document.getElementById('myFormId');


function registerValidate() {
	var acumErrores = 0;
	
    form.classList.remove('is-invalid');
    
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
	var password = document.forms["myForm"]["password"];
	var confirmPassword = document.forms["myForm"]["confirmPassword"];
	var province = document.forms["myForm"]["province"];
	var zip = document.forms["myForm"]["zip"];
    
    if (name.value == "") {
        name.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "El camp és obligatori";
        acumErrores ++;
    }else if (isNaN(name.value) == false) {
        name.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Introdueix un nom válid";
        acumErrores ++;   
    }

	if(email.value == "") {
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El camp és obligatori";
        acumErrores ++;
    }else if(!validar_email(email.value)){
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumpleix el format";
		acumErrores ++;
	}

    if(password.value == "") {
		password.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El camp és obligatori";
        acumErrores ++;
	}else if(password.value.length < 8) {
        password.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contrasenya ha de tenir mímim 8 caracters";
        acumErrores ++;
    }

    if (confirmPassword.value == "") {
		confirmPassword.classList.add("is-invalid");
		document.getElementById("errorConfirmPassword").textContent = "El camp és obligatori";
        acumErrores ++; 
    } else if(confirmPassword.value != password.value) {
        confirmPassword.classList.add("is-invalid");
		document.getElementById("errorConfirmPassword").textContent = "Les contrasenyes no coincideixen";
        acumErrores ++;
    }

    if(province.value == "") {
		province.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "El camp és obligatori";
		acumErrores ++;
	}
		
	if(zip.value == "") {
		zip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "El camp és obligatori";
		acumErrores ++;
	}else if (zip.value.length!=5 || isNaN(zip.value)) {
        zip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "El codi postal no compleix els requisitis";
		acumErrores ++;
    }


    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

form.addEventListener("blur", function( event ) {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
	registerValidate();
}, true);


// VALIDACIÓ FORMULARI LOGIN (myForm2)
const form2 = document.getElementById('myFormId2');

function loginValidate() {
	var acumErrores2 = 0;
	
    form2.classList.remove('is-invalid');
    
    var email2 = document.forms["myForm2"]["email2"];
	var password2 = document.forms["myForm2"]["password2"];

	if(email2.value == "") {
		email2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "El camp és obligatori";
        acumErrores2 ++;
    }else if(!validar_email(email2.value)){
		email2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "El email no cumpleix el format";
		acumErrores2 ++;
	}

    if(password2.value == "") {
		password2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "El camp és obligatori";
        acumErrores2 ++;
	}else if(password2.value.length < 8) {
        password2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "La contrasenya ha de tenir mímim 8 caracters";
        acumErrores2 ++;
    }

    if (acumErrores2 > 0){
        return false;
    }else{
		return true;
	}
}

form2.addEventListener("blur", function( event ) {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
	loginValidate();
}, true);


// VALIDACIÓ FORMULARI CONTACT (myForm3)
var form3 = document.getElementById('myFormId3');

function contactValidate() {
	var acumErrores3 = 0;
	
	form3.classList.remove('is-invalid');
	
	var name3 = document.forms["myForm3"]["name3"];
    var email3 = document.forms["myForm3"]["email3"];

	if (name3.value == "") {
        name3.classList.add("is-invalid");
		document.getElementById("errorName3").textContent = "El camp és obligatori";
        acumErrores3 ++;
    }else if (isNaN(name3.value) == false) {
        name3.classList.add("is-invalid");
		document.getElementById("errorName3").textContent = "Introdueix un nom válid";
        acumErrores3 ++;   
	}

	if(email3.value == "") {
		email3.classList.add("is-invalid");
		document.getElementById("errorEmail3").textContent = "El camp és obligatori";
        acumErrores3 ++;
    }else if(!validar_email(email3.value)){
		email3.classList.add("is-invalid");
		document.getElementById("errorEmail3").textContent = "El email no cumpleix el format";
		acumErrores3 ++;
	}

    if (acumErrores3 > 0){
        return false;
    }else{
		return true;
	}
}

form3.addEventListener("blur", function( event ) {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
	contactValidate();
}, true);


//Verify mail
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

