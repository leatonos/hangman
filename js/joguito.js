$(document).ready(function(){

//Intro

$("#start").click(function(){
    
    $("#fundo_menu").hide();
    $("#app").fadeIn(300)
    novapalavra();
    
});
   
//Activate the tutorial
$("#tutorial").click(function(){
    sommensagem();
	tutorial();	
    
});
    
//Credits
$("#creditos").click(function(){
   sommensagem();
   creditos();	
    
});
    
//Tutorial
    
    function tutorial(){
        $("#fund-alert").show();
		$("#alertz").html("<h1>Tutorial</h1><br><p>Para jogar, simplesmente digite as letras que você acha que a palavra ou a frase possui, se você perder todas as vidas, você irá automaticamente para a próxima palavra</p><br><br><p id='sair_tela'>>Sair</p>");
		$("#alertz").slideDown();
    }
    
$(document).on("click","#sair_tela",function(){
    
		$("#alertz").slideUp();
        $("#fund-alert").hide();
		$("#alertz").html("");
    
});
    
    
    
//Credits
    
     function creditos(){
		$("#alertz").html('<h1>Credits</h1><h2>Development:</h2><p>Pedro Fernando de Mattos Baptista</p><h2>Sound Effects:</h2><p>Super Mario World by Nintendo</p><h2>Contact:</h2><p>Email: <span><a href="mailto:pedrofmattosb@gmail.com">pedrofmattosb@gmail.com</a></span></p><p><a target="_blank" href="https://www.linkedin.com/in/pedro-fernando-mattos-baptista-259645137/">>Linkedin</a></p><p><a target="_blank" href="https://www.facebook.com/pedrofernando.mattosbaptista">>Facebook</a></p><p><a target="_blank" href="https://twitter.com/PedroBa32383973">>Twitter</a></p><p><a target="_blank" href="https://www.instagram.com/mattosbaptista/">>Instagram</a></p><p id="sair_tela">>Exit</p>');
        $("#fund-alert").show();
		$("#alertz").slideDown(300);
    }  
//Inicial Configs
var palavras = 
[
{"palavra":"carrot","tema":"A vegetable"},
{"palavra":"abacate","tema":"a Fruit"},
{"palavra":"world cup","tema":"An international Event"},
{"palavra":"jquery","tema":"Tecnology used to create this project"}
];

var hhh = 1;
var hj = -1;
var l = 0;
var a = 0;
var vidas = 5;
var acertos = 0;
var tentativas = [];
var fff = 0;
localStorage.setItem("uso",0)

//Writes a new word in the game
function novapalavra(){
	fff = palavras[l].palavra.length;
	while(a < palavras[l].palavra.length){
		if(palavras[l].palavra[a] == " "){
		hhh++;
		fff--;
		}else{
		$("#linha"+hhh).append("<div class='quad' id='"+a+"'></div>");
		$(".quad").addClass("quad_ativo");
		}
		a++;
	}
	$("#tema").text(palavras[l].tema);
	$("tema").animate({height: '120px'});
}

//Cleans the word
function limpar(){
	    l++;
	    hhh = 1;
		a = 0;
		vidas = 5;
		acertos = 0;
		tentativas = [];
		$("#vidas").text(vidas);
		$("#linha1").empty();
		$("#linha2").empty();
		$("#linha3").empty();
		$(".quadro-tentativas").empty();
		if(l == palavras.length){
		fimdejogo();
		return false;
	    }else{novapalavra();}
}

//Event listener for the keys you press
$("body").keypress(function tentar(event){
	var z = 0;
	var y = 0;
	var x = event.key;
	
	//Verifys if the letter you choose was already picked
	// Verifica se a letra ja foi colocada antes
	if(tentativas.indexOf(x) != -1){
		$("#fund-alert").show();
		sommensagem();
		$("#alertz").slideDown();
		$("#alertz").text("Você ja tentou esta letra");
		setTimeout(function(){
		$("#alertz").slideUp(1000);
		}, 1000);
		setTimeout(function(){
		$("#fund-alert").hide();
		}, 2000);
		return false;
	}
	//Checks if the letter exists in the word
	// Verifica se a letra existe na palavra
    while( z <= palavras[l].palavra.length ){
	  if( palavras[l].palavra[z] == x ){
		  $("#"+z).text(x)
		  y++;
		  acertos++;
		  tentativas.push(x);
		  somacerto();
	  }
	  z++;
	}
	//Takes out one life point if the player make a mistake
	// Retira uma vida caso o jogador cometa um erro
	if(y == 0){
	  vidas--;
	  $("#vidas").text(vidas);
	  $(".quadro-tentativas").append("<div class='col-xs-1'><p id='qt'>"+x+"</p></div>");
	  somerro();
	  tentativas.push(x);
	  localStorage.setItem("uso", 1);
	  localStorage.setItem("u_erro", x);
	}
	//If the player does not have any lifes left the game is over
	// Caso o Jogador não tenha mais vidas ele perde o jogo
	if(vidas == 0){
	  derrota();
	  return false;
	}
	// Vitoria do jogador
	// Player Wins
	if(acertos == fff){
	  vitoria();
	  return false;
	}
});

//Functions
function derrota(){
	    sommorte();
		$("#fund-alert").show();
		$("#alertz").slideDown();
		$("#alertz").text("sentimos muito :(");
		setTimeout(function(){
		$("#alertz").slideUp(1000);
		}, 1000);
		setTimeout(function(){
		$("#fund-alert").hide();
		limpar();
		}, 2000);
}
function vitoria(){
		somvitoria();
		$("#fund-alert").show();
		$("#alertz").slideDown();
		$("#alertz").text("You Win!");
		setTimeout(function(){
		$("#alertz").slideUp(1000);
		}, 2000);
		setTimeout(function(){
		$("#fund-alert").hide();
		limpar();
		}, 3000);
}
function fimdejogo(){
		sommensagem();
		$("#tema").text("Fim de jogo");
		$("#fund-alert").show();
		$("#alertz").slideDown();
		$("#alertz").text("Thanks for playing");
		setTimeout(function(){
		$("#alertz").slideUp(1000);
		}, 1000);
		setTimeout(function(){
		$("#fund-alert").hide();
		l = -1;
		limpar();
		}, 2000);
}
function errox(){
		$("#fund-alert").show();
		$("#alertz").slideDown();
		$("#alertz").text("Você não pode usar este comando ainda");
		setTimeout(function(){
		$("#alertz").slideUp(1000);
		}, 1000);
		setTimeout(function(){
		$("#fund-alert").hide();
		}, 2000);
}
    //Celulares
	//Mobile functions
    
   $(".col-xs-1.tecla.sa, .col-xs-1.tecla.sb , .col-xs-1.tecla.sc").click(function(){
       
    var z = 0;
	var y = 0;
	var x = $(this).attr("t");
	
	// Verifica se a letra ja foi colocada antes
	if(tentativas.indexOf(x) != -1){
		$("#fund-alert").show();
		sommensagem();
		$("#alertz").slideDown();
		$("#alertz").text("Você ja tentou esta letra");
		setTimeout(function(){
		$("#alertz").slideUp(1000);
		}, 1000);
		setTimeout(function(){
		$("#fund-alert").hide();
		}, 2000);
		return false;
	}
	// Verifica se a letra existe na palavra
    while( z <= palavras[l].palavra.length ){
	  if( palavras[l].palavra[z] == x ){
		  $("#"+z).text(x)
		  y++;
		  acertos++;
		  tentativas.push(x);
		  somacerto();
	  }
	  z++;
	}
	// Retira uma vida caso o jogador cometa um erro
	if(y == 0){
	  vidas--;
	  $("#vidas").text(vidas);
	  $(".quadro-tentativas").append("<div class='col-xs-1'><p id='qt'>"+x+"</p></div>");
	  somerro();
	  tentativas.push(x);
	  localStorage.setItem("uso", 1);
	  localStorage.setItem("u_erro", x);
	}
	// Caso o Jogador não tenha mais vidas ele perde o jogo
	if(vidas == 0){
	  derrota();
	  return false;
	}
	// Vitoria do jogador
	if(acertos == fff){
	  vitoria();
	  return false;
	}
       
   });
    
    
});

// Efeitos sonoros
// Sound Effects
function somacerto(){
document.getElementById("acertinho").play();		
}
function somerro(){
document.getElementById("erro").play();		
}
function sommorte(){
document.getElementById("morte").play();		
}
function somvitoria(){
document.getElementById("vitoria").play();		
}
function sommensagem(){
document.getElementById("mensagem").play();		
}
function somvida(){
document.getElementById("vida").play();		
}
function somfunc(){
document.getElementById("fun").play();		
}


/*
	//Adm comands that we did not use for the regular player
    //Comandos de ADM
	if(x == 1){
		//Reiniciar Jogo
		l = -1;
		somfunc();
		limpar();
		return false;
	}
	if(x == 2){
		// Próxima Palavra
		somfunc();
		limpar();
		return false;
	}
	if(x == 3 && l > 0){
		// Palavra Anterior
		l -= 2 ;
		somfunc();
		limpar();
		return false;
	}else if(x == 3 && l == 0){return false;}
	if(x == 4){
		// Limpa a palavra
		l--;
		somfunc();
		limpar();
		return false;
	}
	if(x == 5){
		// Concede uma vida ao jogador
		vidas++;
		somvida();
		$("#vidas").text(vidas);
		return false;
	}
	if(x == 6){
		// Retira uma vida do jogador
		vidas--;
		$("#vidas").text(vidas);
		somerro();
			if(vidas == 0){
			derrota();
			return false;
			}
		return false;
	}
	if(x == 7){
		var g = 0;
			if(tentativas.length == 0){
			errox();
			return false;
			}
			while( g <= palavras[l].palavra.length ){
				  if(palavras[l].palavra[g] == tentativas[tentativas.length - 1]){
					  acertos--;
					  $("#"+g).empty();
					  tentativas.pop();
					  }
					  g++;
			}
			return false;
	}
    */
    



