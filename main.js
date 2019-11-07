function theGame(){

	var dataBase = {
		card0 : "https://art.pixilart.com/92b651c9a375d18.png",
		card1 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYxfejANdEmDV7ROaOZUE3teTin427_yDBBpvmNlOkNVTStOl&s",
		card2 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K5nV-izh4hyxw_4StZHQGc98Vj8sqndmAB1xhPY6uWKFTtuQ&s",
		card3 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8WG3I-jhQYx9fXXQtI-Tsu4jHS3hSBCowRL0W-LA8yqZ-08D&s",
		card4 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a5DZafV85AWk5f28OC0zitj98YxqWZxL7HeEmLsmxZ1ULJQp&s",
		card5 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4ico829TGwhI9PhEx2kovaWRy-enUlffi36_j6cXCJkvn4VY&s",
		card6 : "https://colourlex.com/wp-content/uploads/2017/03/Chrome-red-painted-swatch-203-225-opt.jpg"
	}

	function cardGenerator(){
		var i = 1;
		while(i < 7){
			var call = "card" + i;
			$('#' + i).append('<button class="card0 '+call+'"><img src=' + dataBase["card0"] + '></button>');
			$('#' + i).append('<button class="testing '+call+ '"><img src=' + dataBase["card" + i] + '></button>');
			i++;
		}
		hideAll()
	}

	function hideAll(){
		$('.testing').hide()
	}


	function getId(){
		return this.getAttribute('id').slice(6)
	}
	function flipCard(){

	}

	cardGenerator()	
	$('button').on('click', function(){
		var a = this.getAttribute('class').slice(6);
		console.log(a)
	})
}
theGame()
