function validar(){
	var respuesta1 = document.getElementById("p1.1");
	var r1 = document.getElementById('r1');
	if(respuesta1.checked==true){
		r1.innerHTML="Correcto!";
		r1.style.color="#7BD348";
	} else {
		r1.innerHTML="Inorrecto!";
		r1.style.color="#FF6D6D";
	}
	var respuesta2 = document.getElementById("p2").value.toLowerCase();
	var r2 = document.getElementById("r2");
	if(respuesta2 =="secret war"||respuesta2=="secret wars"){
		r2.innerHTML="Correcto!";
		r2.style.color="#7BD348";
	} else {
		r2.innerHTML="Inorrecto!";
		r2.style.color="#FF6D6D";
	}
	var respuesta3 = document.getElementById("p3").value.toLowerCase();
	var r3 = document.getElementById("r3");
	if(respuesta3 =="porque lo estaba dominando"){
		r3.innerHTML="Correcto!";
		r3.style.color="#7BD348";
	} else {
		r3.innerHTML="Inorrecto!";
		r3.style.color="#FF6D6D";
	}
	var respuesta4 = document.getElementById("p4");
	var respuestas4 = document.getElementById("p4.2");
	var r4 = document.getElementById("r4");
	if(respuesta4.checked==true && respuestas4.checked==true){
		r4.innerHTML="Correcto!";
		r4.style.color="#7BD348";
	} else {
		r4.innerHTML="Inorrecto!";
		r4.style.color="#FF6D6D";
	}
	var respuesta5 = document.getElementById("p5").value.toLowerCase();
	var r5 = document.getElementById("r5");
	if(respuesta5=="iron man"){
		r5.innerHTML="Correcto!";
		r5.style.color="#7BD348";
	} else {
		r5.innerHTML="Inorrecto!";
		r5.style.color="#FF6D6D";
	}
}