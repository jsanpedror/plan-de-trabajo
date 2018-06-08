function datosAp(){
  var nombreAprendiente = document.getElementById("nombreAp").value;
  var frances = document.getElementById('frances').checked;
  var ingles = document.getElementById('ingles').checked;
  var idiomaMeta;
  var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth();
  var ano = fecha.getFullYear();
  
  switch (mes){
    case 0:
      mes = "enero";
      break;
    case 1:
      mes ="febrero";
      break;
    case 2:
      mes = "marzo";
      break;
    case 3: 
      mes = "abril";
      break;
    case 4: 
      mes = "mayo";
      break;
    case 5: 
      mes = "junio";
      break;
    case 6: 
      mes = "julio";
      break;
    case 7: 
      mes = "agosto";
      break;
    case 8: 
      mes = "septiembre";
      break;
    case 9: 
      mes = "octubre";
      break;
    case 10: 
      mes = "noviembre";
      break;
    case 11: 
      mes = "diciembre";
      break;
  }
  
if (nombreAprendiente === "" || ingles === false && frances === false){
alert("Completa toda la información");
}else if (ingles){
idiomaMeta = document.getElementById("ingles").value;
document.getElementById("comenzarDiv").style.display="none";
document.getElementById("parte1").style.display="inline";
}else{
idiomaMeta = document.getElementById("frances").value;
document.getElementById("comenzarDiv").style.display="none";
document.getElementById("parte1").style.display="inline";
} 

document.getElementById("datosOut").innerHTML="Nombre del aprendiente:"+" "+nombreAprendiente+"<br/>"+ "Idioma meta:"+" "+idiomaMeta+"<br/>"+"Fecha de elaboración:"+ " "+dia+" de "+mes+" "+ano;  
}

function esconderMostrar(){
  document.getElementById("comenzarDiv").style.display="none";
  document.getElementById("parte1").style.display="inline";
}

function myGoal(){ //esta es la meta
  var metaAprendiente = document.getElementById("miMeta").value;
  if(metaAprendiente === ""){
    alert("Escribe tu meta");
  }else{
   document.getElementById("metaAprendiente").innerHTML="Mi meta es"+" "+ metaAprendiente; 
   document.getElementById("parte1").style.display="none";
  document.getElementById("parte2").style.display="inline";
  } 
}

function neededTime(){ // este es el mes de inicio y fin
 /* var inicio = document.getElementById("mesInicio").value;
  var fin = document.getElementById("mesTermino").value;
  
  if (inicio === "" || fin === ""){
    alert("Selecciona el inicio y el fin de tu plan");
  }else{
    document.getElementById("tiempoNecesario").innerHTML="Empezaré en"+" "+inicio+" "+"y terminaré en"+" "+fin;
	document.getElementById("parte2").style.display="none";
  document.getElementById("parte3").style.display="inline";
  }*/
   var mesStart = document.getElementById("mesInicio").value;
  var mesEnd = document.getElementById("mesFin").value;
  if(mesStart === "" || mesEnd === ""){
    alert("Completa la información");
  }else{
   document.getElementById("parte2").style.display="none";
  document.getElementById("parte3").style.display="inline";
  document.getElementById("outPut").innerHTML ="Empezaré en"+" "+mesStart+" "+"y terminaré en"+" "+mesEnd; 
  }
}

function howLong(){// este es el horario
  var horarioInicio = document.getElementById("horaInicio").value;
  var horarrioFin = document.getElementById("horaTermino").value;  
  if(horarioInicio === "" || horarrioFin === ""){
    alert("Seleciona el tiempo");
  }else{document.getElementById("numeroHoras").innerHTML="Esta semana voy a estudiar de"+" "+horarioInicio+" "+"a "+horarrioFin;
  document.getElementById("parte3").style.display="none";
  document.getElementById("parte4").style.display="inline";
  }  
}

function asesorRequerido(){ // asesor si o no
  var si = document.getElementById('asesorSi').checked;
  var no = document.getElementById("asesorNo").checked;
  var miAsesor;
  if (si === false && no === false){
    alert("¿Necesitas asesor?");
  }else if (si) {
  miAsesor = document.getElementById('asesorSi').value;
  document.getElementById("parte4").style.display="none";
  document.getElementById("parte5").style.display="inline";
  }else{
    miAsesor = document.getElementById("asesorNo").value;
	document.getElementById("parte4").style.display="none";
  document.getElementById("parte5").style.display="inline";
  }
  document.getElementById("asesorSiNo").innerHTML=miAsesor+" "+"necesito ayuda de un asesor para cumplir mi meta";
 }

function misHabilidades(){ //habilidades
var skillchecks = document.getElementsByClassName('habilidadesCheckbox');
  var str = "";
  
   for ( i = 0; i < 4; i++){
    if ( skillchecks[i].checked === true ) {
    str += skillchecks[i].value + "<br/> ";
      }     
  }
 if(str.length === 0){
    alert("Debes seleccionar al menos una opcion");
  }else{
    document.getElementById("habilidadesOut").innerHTML ="Para cumplir mi meta debo:"+"<br/>"+ str;
	document.getElementById("parte5").style.display="none";
  document.getElementById("parte6").style.display="inline";
  }   
}


 


function horaSemanal(){ // tiempo dedicado a cada habilidad
var hrsSem = document.getElementsByClassName('horasSemana');
var hs = hrsSem.length;
var misHoras = [];
for ( i=0; i < hs; i++){
if (hrsSem[i].value > 0){
misHoras +=hrsSem[i].value + " "+ "hora(s) de"+" "+ hrsSem[i].name +"<br/>";
}
}
 if(misHoras.length === 0){
    alert("Debes seleccionar al menos una opcion");
  }else{
    document.getElementById("hrsSemOut").innerHTML= "Voy a estudiar:"+ "<br/> " + misHoras;
document.getElementById("parte6").style.display="none";
  document.getElementById("parte7").style.display="inline";	
  } 
}

function misMateriales(){ // materiales
var materialesCheck = document.getElementsByClassName('materiales');
  var misMat = [];
  
   for ( i = 0; i < 9; i++){
    if ( materialesCheck[i].checked === true ) {
    misMat += materialesCheck[i].value + "<br/> ";
      }      
  }
  
  if(misMat.length === 0){
    alert("Debes seleccionar al menos una opcion");
  }else{
    document.getElementById("mateOut").innerHTML ="Voy a trabajar con:"+"<br/>"+ misMat;
	document.getElementById("parte7").style.display="none";
  document.getElementById("parte8").style.display="inline";
  }
}

function misTecnicas(){ //tecnicas
var tecnicasChecks = document.getElementsByClassName('tecnicasCheckbox');
  var tecnicas = [];
  
   for ( i = 0; i < 15; i++){
    if ( tecnicasChecks[i].checked === true ) {
    tecnicas += tecnicasChecks[i].value + "<br/> ";
      }     
  }
 if(tecnicas.length === 0){
    alert("Debes seleccionar al menos una opción");
  }else{
    document.getElementById("tecnicasOut").innerHTML ="Para cumplir mi meta usaré estas técnicas:"+"<br/>"+ tecnicas;
	document.getElementById("parte8").style.display="none";
  document.getElementById("parte9").style.display="inline";
  }   
}

function verificaDes(){
	var porIdioma = document.getElementById("idioma").checked;
	var porDesemp = document.getElementById("desempeño").checked;
	var comoVerifica
	
	var verElements = document.getElementsByClassName("verificacion");
	var verifiChecked = [];
	
	for(i = 0 ; i < 6 ; i++){
	if(verElements[i].checked === true){
		verifiChecked +=verElements[i].value+"<br/>";
	}	
	}
	/*if(verifiChecked.length === 0){
    alert("Debes seleccionar al menos una opcion");
  }else{
    document.getElementById("verificarOut").innerHTML ="Para cumplir mi meta debo:"+"<br/>"+ verifiChecked;
  } */
	
	if (porIdioma === false && porDesemp === false){
		alert("Debes elegir al menos una opcion");
	}else if(porIdioma === true){	
	
	
	comoVerifica = document.getElementById("idioma").value;
	document.getElementById("verificarOut").innerHTML="Verificare mi desempeño en relación al"+" "+comoVerifica+" "+"por medio de:"+"<br/>"+verifiChecked;
	document.getElementById("parte9").style.display="none";
  document.getElementById("resultados").style.display="inline";
		 
  }else{
	  
		comoVerifica = document.getElementById("desempeño").value;
		document.getElementById("verificarOut").innerHTML="Verificare mi desempeño en relación al"+" "+comoVerifica;
		document.getElementById("parte9").style.display="none";
  document.getElementById("resultados").style.display="inline";
	}
	  
}