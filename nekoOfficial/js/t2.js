




  //---------------------------------------------------------------------------------------------------------

	let IMAGEM;
	let Author;
	let Comm;
    let filters;
        function fc_SalvaImagem() {
			IMAGEM = $(".Upimagem").val();
            Author = $(".extra").val();
            Comm   = $(".extra").val();
            
          
              var color_switch_0 = document.getElementById("color_switch_0");
			  if (color_switch_0.checked == true) filters.append("color_switch_0");
			  
			  var color_switch_1 = document.getElementById("color_switch_1");
			  if (color_switch_1.checked == true) filters.append("color_switch_1");
			  
			  var color_switch_2 = document.getElementById("color_switch_2");
			  if (color_switch_2.checked == true) filters.append("color_switch_2");
            
			  var effect_gray = document.getElementById("effect_gray");
			  if (effect_gray.checked == true) filters.append("effect_gray");
			  
			  var effect_gray = document.getElementById("effect_gray");
			  if (effect_gray.checked == true) filters.append("effect_gray");
            
              var effect_gray = document.getElementById("effect_gray");
			  if (effect_gray.checked == true) filters.append("effect_gray");
            
              var sepia = document.getElementById("sepia");
			  if (sepia.checked == true) filters.append("sepia");
            
			  var lomo = document.getElementById("lomo");
			  if (lomo.checked == true) filters.append("lomo");
			  
			  var  edge_detection = document.getElementById("edge_detection");
			  if (edge_detection.checked == true) filters.append("edge_detection");
			  
			  var sharpen = document.getElementById("sharpen");
			  if (sharpen == true) filters.append("sharpen");
			  
			  var  invert = document.getElementById(" invert");
			  if ( invert.checked == true) filters.append(" invert");
			  
			  var  posterize = document.getElementById("posterize");
			  if ( posterize.checked == true) filters.append("posterize");
			  
			  var  rotate_right = document.getElementById("rotate_right");
			  if ( rotate_right.checked == true) filters.append("rotate_right");
			  
			  var  rotate_left = document.getElementById("rotate_left");
			  if (rotate_left.checked == true) filters.append("rotate_left");
			  
			  var   flip = document.getElementById(" flip");
			  if (flip.checked == true) filters.append(" flip");
			  
			  var  mirror = document.getElementById("mirror");
			  if (mirror.checked == true) filters.append("mirror");
			  
			  var solarize = document.getElementById("solarize");
			  if (solarize.checked == true) filters.append("solarize");
			  
			  var draw_text = document.getElementById("draw_text");
			  if (draw_text.checked == true) filters.append("draw_text");
			  
			  
			  
            
          $.post( "/server/image/add", { filtros: filters , image: IMAGEM, author: Author, comentary: Comm })
		.done(function( data ) {
			// Got answer from server
		console.log(data);
		});
        }

//---------------------------------------------------------------------------------------
  


//-----------------------------------------------------------------------------------------
         //~ function fc_SalvaVoto() {
	   //~ $.post( "/server/voto/add", { voto: })
		//~ .done(function( data ) {
			//~ // Got answer from server
		//~ console.log(data);
		//~ });
		  //~ }
//-----------------------------------------------------------------------------------------
