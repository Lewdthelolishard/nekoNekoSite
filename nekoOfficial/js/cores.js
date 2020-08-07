//variaveis globais
 let i = 0;
 let array = ["https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg","https://i.imgur.com/3N1lElz.jpg","https://2.bp.blogspot.com/-VTys8gSa_Qs/Wi8iy879SoI/AAAAAAAAHg4/xMggh0deOUQRMbav2coKrWjDEw0osl8ewCLcBGAs/s1600/planet_earth.jpg","https://pplware.sapo.pt/wp-content/uploads/2017/12/wallpaper_pplware31.jpg"];
 var capturando = "";
//--------------------------------------------------------------------------------


//----------------------------------------------------------





//~ // variaveis globais dos mini botões

setTimeout(slider, 2000);
function slider() {
	 
	   var img = document.getElementById("imagem1");
	   if(i >= 0 && i < 3){
		  i += 1;
		  let IMG = array[i]
		  img.src = IMG;
		 }
	else{
		IMG = 0;
	
		}
	 setTimeout(slider, 2000);
	   
	}
function seta() {
	
	 var img = document.getElementById("imagem1");
	 if(i >= 0 && i <= 3){
		  i += 1;
		  let IMG = array[i]
		  img.src = IMG;
		 }
	 if(i < 0){
		 i = 3;
		 seta()
		}
	 if(i > 3){
		 i =0;
		  seta()
		 }
	 
	 }
function seta1() {
	 var img = document.getElementById("imagem1"); 
	 
	 if(i >= 0 && i <= 3){
		  i += -1;
		  let IMG = array[i]
		  img.src = IMG;
		 }
	 if(i > 3){
		i = 0;
		 seta()
		}
	if(i <0 ){
		i = 3;
		seta();
		}
	 if(i > 3){
		 i =0;
		  seta()
		 }
	 //~ }

