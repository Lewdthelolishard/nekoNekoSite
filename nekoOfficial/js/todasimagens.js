//~ let count = 0;
//~ let ids = 0;
//~ function page() {
	//~ document.getElementById('form').id = 'form_form_modulo';
	  
	//~ }
//~ function upload(){
	 //~ var source = ""; // vai receber atraves do browse
	 //~ var img = document.getElementById("imag");
	 //~ img
	 //~ var autor = ""; // vai receber atraves do input  do username
	 //~ var author = document.getElementById("autor");
	 //~ author.innerHTML = autor;//  vai incrementando os ids de cada imagem
	//~ }
//~ function gerarPage(){
	 //~ var img = document.getElementById(ids[8]);
	 //~ if(img.src != null) {
		 //~ // funcao para criar nova pagina
		 //~ }
	//~ }
	
	
	//~ $("imagens").click(function(){
  //~ $(id[i]).append(" <id="1"img src="https://www.fundospaisagens.com/1366x768/wallpaper-do-espaco.jpg" alt="Minha Figura">");
//~ });
//~ function retirar(let x){
	  //~ console.log(x);
	//~ }
//----------------------------------------------------------------------------------------------
let IMAGEM;
let AUTHOR;
let COMM;
function g(let x, let y, let z){  // vai gerar a imagem , com o autor e comentario correspondentes
	 IMAGEM = x; 
	 AUTHOR = y;
	 COMM   = z;
	$(".input").attr("src", IMAGEM);
    $(".autor").text(AUTHOR);
    $(".COM").text(COMM);
	}



//--------------------------------------------------------------------------------------------------------
