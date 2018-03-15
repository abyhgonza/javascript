//code .js for calculadora proy

var pantalla = document.getElementById("display");

var operadores = {
	operador: "",
	operadorAnterior: "",
	numAnterior: 0
	
};//obj operador

var calculadora = {
	
	init: function(){
		"use strict";
		
		//digitos
		var cero = document.getElementById("0");
		var uno = document.getElementById("1");
		var dos = document.getElementById("2");
		var tres = document.getElementById("3");
		var cuatro = document.getElementById("4");
		var cinco = document.getElementById("5");
		var seis = document.getElementById("6");
		var siete = document.getElementById("7");
		var ocho = document.getElementById("8");
		var nueve = document.getElementById("9");
		
		//acciones
		var on = document.getElementById("on");
		var punto = document.getElementById("punto");
		var sign = document.getElementById("sign");
		var igual = document.getElementById("igual");
		
		//operaciones
		var suma = document.getElementById("mas");
		var resta = document.getElementById("menos");
		var producto = document.getElementById("por");
		var cociente = document.getElementById("dividido");
		
		var tecla = this;
		
		//tecla cero
		cero.addEventListener("click", function(){
			tecla.numero("0");
		});
		
		cero.addEventListener("mousedown", function(){
			cero.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		cero.addEventListener("mouseup", function(){
			cero.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla uno
		uno.addEventListener("click", function(){
			tecla.numero("1");
		});
		
		uno.addEventListener("mousedown", function(){
			uno.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		uno.addEventListener("mouseup", function(){
			uno.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla dos
		dos.addEventListener("click", function(){
			tecla.numero("2");
		});
		
		dos.addEventListener("mousedown", function(){
			dos.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		dos.addEventListener("mouseup", function(){
			dos.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla tres
		tres.addEventListener("click", function(){
			tecla.numero("3");
		});
		
		tres.addEventListener("mousedown", function(){
			tres.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		tres.addEventListener("mouseup", function(){
			tres.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla cuatro
		cuatro.addEventListener("click", function(){
			tecla.numero("4");
		});
		
		cuatro.addEventListener("mousedown", function(){
			cuatro.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		cuatro.addEventListener("mouseup", function(){
			cuatro.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla cinco
		cinco.addEventListener("click", function(){
			tecla.numero("5");
		});
		
		cinco.addEventListener("mousedown", function(){
			cinco.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		cinco.addEventListener("mouseup", function(){
			cinco.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla seis
		seis.addEventListener("click", function(){
			tecla.numero("6");
		});
		
		seis.addEventListener("mousedown", function(){
			seis.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		seis.addEventListener("mouseup", function(){
			seis.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla siete
		siete.addEventListener("click", function(){
			tecla.numero("7");
		});
		
		siete.addEventListener("mousedown", function(){
			siete.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		siete.addEventListener("mouseup", function(){
			siete.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla ocho
		ocho.addEventListener("click", function(){
			tecla.numero("8");
		});
		
		ocho.addEventListener("mousedown", function(){
			ocho.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		ocho.addEventListener("mouseup", function(){
			ocho.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla nueve
		nueve.addEventListener("click", function(){
			tecla.numero("9");
		});
		
		nueve.addEventListener("mousedown", function(){
			nueve.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		nueve.addEventListener("mouseup", function(){
			nueve.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla on
		on.addEventListener("click", function(){
			pantalla.innerHTML = "0";
			operadores.numAnterior = 0;
			operadores.operador = "";
			operadores.operadorAnterior = "";
		});
		
		on.addEventListener("mousedown", function(){
			on.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		on.addEventListener("mouseup", function(){
			on.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla punto
		punto.addEventListener("click", function(){
			tecla.numero(".");
		});
		
		punto.addEventListener("mousedown", function(){
			punto.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		punto.addEventListener("mouseup", function(){
			punto.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla signo
		sign.addEventListener("click", function(){
			tecla.signo();
		});
		
		sign.addEventListener("mousedown", function(){
			sign.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		sign.addEventListener("mouseup", function(){
			sign.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla igual
		igual.addEventListener("click", function(){
			tecla.operadores("=");
		});
		
		igual.addEventListener("mousedown", function(){
			igual.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		igual.addEventListener("mouseup", function(){
			igual.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla suma
		suma.addEventListener("click", function(){
			tecla.operadores("+");
		});
		
		suma.addEventListener("mousedown", function(){
			suma.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		suma.addEventListener("mouseup", function(){
			suma.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla resta
		resta.addEventListener("click", function(){
			tecla.operadores("-");
		});
		
		resta.addEventListener("mousedown", function(){
			resta.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		resta.addEventListener("mouseup", function(){
			resta.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla multiplicar
		producto.addEventListener("click", function(){
			tecla.operadores("*");
		});
		
		producto.addEventListener("mousedown", function(){
			producto.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		producto.addEventListener("mouseup", function(){
			producto.setAttribute("style", "transform:scale(1,1)");
		});
		
		//tecla dividir
		cociente.addEventListener("click", function(){
			tecla.operadores("/");
		});
		
		cociente.addEventListener("mousedown", function(){
			cociente.setAttribute("style", "transform:scale(0.98,0.98)");
		});
		
		cociente.addEventListener("mouseup", function(){
			cociente.setAttribute("style", "transform:scale(1,1)");
		});
		
	},//func init
	
	numero: function(n){
		"use strict";
		var num = pantalla.innerHTML;
		var limitNum = 8;
		
		if(num.indexOf(".") != -1){
			
			if(n == "."){
				n = "";
			}
			
			limitNum = 9;
		}
		
		if(num == "0" && n != "."){
			num = "";
		}
		
		if(operadores.operador.length > 0){
			num = "";
			operadores.operadorAnterior = operadores.operador;
			operadores.numAnterior = parseFloat(pantalla.innerHTML);
			operadores.operador = "";
		}
		
		if(pantalla.innerHTML.length < limitNum){
			pantalla.innerHTML = num + n;
		}
		
	},//func numero
	
	signo: function(){
		"use strict";
		var display = document.getElementById("display").innerHTML;
		var i = display.indexOf("-");

    if(display == 0 || display == ""){

		document.getElementById("display").innerHTML = 0;

	}else if(i != -1){

			display *= (-1);
			document.getElementById("display").innerHTML = display;

		}else{

			document.getElementById("display").innerHTML = "-"+ display;
		}
		
	},//func signo
	
	operadores: function(op){
		"use strict";
		switch(op){
				
			case "+":
				operadores.operador = op;
				
				switch(operadores.operadorAnterior){
						
					case "+":
						
						operadores.numAnterior += parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "-":
						
						operadores.numAnterior -= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "*":
						
						operadores.numAnterior *= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "/":
						
						operadores.numAnterior /= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior.toFixed(7);
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
				}//switch "+"
				
				break;
				
			case "-":
				operadores.operador = op;
				
				switch(operadores.operadorAnterior){
						
					case "+":
						
						operadores.numAnterior += parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "-":
						
						operadores.numAnterior -= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "*":
						
						operadores.numAnterior *= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "/":
						
						operadores.numAnterior /= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior.toFixed(7);
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
				}//switch "-"
				
				break;
				
			case "*":
				operadores.operador = op;
				
				switch(operadores.operadorAnterior){
						
					case "+":
						
						operadores.numAnterior += parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "-":
						
						operadores.numAnterior -= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "*":
						
						operadores.numAnterior *= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "/":
						
						operadores.numAnterior /= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior.toFixed(7);
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
				}//switch "*"
				
				break;
				
			case "/":
				operadores.operador = op;
				
				switch(operadores.operadorAnterior){
						
					case "+":
						
						operadores.numAnterior += parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "-":
						
						operadores.numAnterior -= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "*":
						
						operadores.numAnterior *= parseFloat(pantalla.innerHTML);
						pantalla.innerHTML = operadores.numAnterior;
						operadores.operadorAnterior = operadores.operador;
						
						break;
						
					case "/":
						
						if(operadores.operadorAnterior.length > 0){
							
							operadores.numAnterior /= parseFloat(pantalla.innerHTML);
							pantalla.innerHTML = operadores.numAnterior.toFixed(7);
							operadores.operadorAnterior = operadores.operador;
						}
						
						break;
						
				}//switch "/"
				
				break;
				
			case "=":
				
				switch(operadores.operadorAnterior){
						
					case "+":
						operadores.numAnterior += parseFloat(pantalla.innerHTML);
						
						break;
						
					case "-":
						operadores.numAnterior -= parseFloat(pantalla.innerHTML);
						
						break;
						
					case "*":
						operadores.numAnterior *= parseFloat(pantalla.innerHTML);
						
						break;
						
					case "/":
						operadores.numAnterior /= parseFloat(pantalla.innerHTML);
						
						break;
						
				}//switch "="
				
				pantalla.innerHTML = operadores.numAnterior;
				operadores.operadorAnterior = "";
				operadores.operador = "";
				
				break;
				
				
		}//main switch
		
	}//func operadores
	
};//obj calculadora

calculadora.init();