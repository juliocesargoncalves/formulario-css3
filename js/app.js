function valida(){

	var email_banco = "admin@admin.com";
	var senha_banco = "12345";

	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var resposta = document.getElementById('resposta');
	let texto = "Login e senha não correspondem";




	if(email == email_banco && senha == senha_banco){

		resposta.innerHTML = "Bem vindo : " + email;
	
	}else{

		resposta.innerHTML = texto;
	}
	
}
