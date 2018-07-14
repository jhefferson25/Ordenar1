
var array=[];// declaramos un varibale  de tipo cadena vacia

function solonumeros(e){
	var key = window.event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)//representan las teclas numéricas 0 - 9
    // para no introducir letras 
}
function agrega(){
	 var elemento=document.getElementById("guarda").value;//id se guarda en elemento
	 
	 if(elemento==null|| elemento=="" || elemento==0){
      alert(" ingrese un numero valido"); // aqui se revisa cuando presionas el boton agregar y no hay valor o hay un 0
	 }

	var elemento=parseInt(document.getElementById("guarda").value);
    // con parseint convertimos los id que ingresamos a numeros enteros y lo guardamos en un elemento
   
	
	array.push(elemento);
	// con push agregamos valores al array (enteros) y los acomoda(en orden de llegada)

}
function ordena(){
	if( array==null || array==="" || array==0 ){alert("ingrese numeros para ordenarlos")}
		// cuando no hay valores en el input y se presiona el boton ordenar  nos salta un mensaje
	// usamos metodo de  la burbuja (for anidado ) 

	for (var i=1; i<array.length;i++) { 

		for (var j=0; j<array.length;j++) {
			
			if(array[j]>array[i]){      //j se compara con el j+1=i    
				temp=array[i];          // si cumple la condicion i se  guarda en temp
				array[i]=array[j];      // el i ahora es  j
				array[j]=temp;          // j se guarda en temp
			 
			}
			if(array[j]==array[i]){alert("repetidas");}// cuando los valores son repetidos

		}
		

	}
	return(array);// me retorna el array 
	
}
function muestra(){
   if(array==null || array==""){// si no hay valores me sale el alert de no hay nada para mostrar
   	alert("no hay nada para mostrar");}
    else {alert(array);}// caso contrario me muestra el array ordenado
}
	

function reset(){
array.length=0; // vaciamos el array  y luego lo mostramos un mensaje de confirmacion
	alert("se limpiaron  los datos");
}
