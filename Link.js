/*
 Aula: Lógica de programação
 @author: Estudante Zezinho
*/

var altura,peso, imc;
function calcular(){
	altura = parseFloat(formIMC.txtAltura.value.replace(",","."));
	peso = parseFloat(formIMC.txtPeso.value.replace(",","."));
	imc = peso/(altura*altura);
	if (imc > 24.9){
		document.getElementById("status").src="alto.jpg";
	}else{
		if (imc < 18.5){
			document.getElementById("status").src="baixo.jpg";
		}else{
		document.getElementById("status").src="normal.jpg";
		}
	}
}
function zerar(){
	document.getElementById("status").src="tabela.jpg";
}