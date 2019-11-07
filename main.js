function Cards(pairNumber, link){
	var card = {};
	card.pairNumber = pairNumber;
	card.state = "down";
	card.link = link;
	card.diplay = function(){
		return this;
	}
	return card 
}

var card1 = Cards(1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYxfejANdEmDV7ROaOZUE3teTin427_yDBBpvmNlOkNVTStOl&s");
var card2 = Cards(1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYxfejANdEmDV7ROaOZUE3teTin427_yDBBpvmNlOkNVTStOl&s");
var card3 = Cards(2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K5nV-izh4hyxw_4StZHQGc98Vj8sqndmAB1xhPY6uWKFTtuQ&s");
var card4 = Cards(2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K5nV-izh4hyxw_4StZHQGc98Vj8sqndmAB1xhPY6uWKFTtuQ&s");
var card5 = Cards(3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8WG3I-jhQYx9fXXQtI-Tsu4jHS3hSBCowRL0W-LA8yqZ-08D&s");
var card6 = Cards(3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8WG3I-jhQYx9fXXQtI-Tsu4jHS3hSBCowRL0W-LA8yqZ-08D&s");
var card7 = Cards(4, "https://colourlex.com/wp-content/uploads/2017/03/Chrome-red-painted-swatch-203-225-opt.jpg");
var card8 = Cards(4, "https://colourlex.com/wp-content/uploads/2017/03/Chrome-red-painted-swatch-203-225-opt.jpg");
var card9 = Cards(5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4ico829TGwhI9PhEx2kovaWRy-enUlffi36_j6cXCJkvn4VY&s");
var card10 = Cards(5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4ico829TGwhI9PhEx2kovaWRy-enUlffi36_j6cXCJkvn4VY&s");
var card11 = Cards(6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a5DZafV85AWk5f28OC0zitj98YxqWZxL7HeEmLsmxZ1ULJQp&s");
var card12 = Cards(6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a5DZafV85AWk5f28OC0zitj98YxqWZxL7HeEmLsmxZ1ULJQp&s");
var blackcard = Cards(0, "https://art.pixilart.com/92b651c9a375d18.png");

var deck = [blackcard, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12]

function cardGenerator(){
	var i = 1;
	while(i < deck.length){
		$('#' + i).append('<button class="card0 card' + i + '"><img src=' + deck[0].link + '></button>');
		$('#' + i).append('<button class="hiding card' + i + '"><img src=' + deck[i].link + '></button>');
		i++;
	}
	hideAll()
}

	function hideAll(){
	$('.hiding').hide()
}

cardGenerator()	

function reverseCard(n){
	$('.card0.card' + n).hide()
	$('.hiding.card' + n).show()
}
function hideCards(n, m){
	$('.hiding.card' + n).hide()
	$('.hiding.card' + m).hide()
	$('.card0.card' + n).show()
	$('.card0.card' + m).show()
}
function hidePairs(n, m){
	$('.hiding.card' + n).hide()
	$('.hiding.card' + m).hide()
}
var index1 = 0;
var index2 = 0;
var count = true;


function theGame(){
	$('button').on('click', function(){
	if(count){
		index1 = this.getAttribute('class').slice(10);
		count = false;
		reverseCard(index1)
	}else{
		index2 = this.getAttribute('class').slice(10);
		count = true;
		reverseCard(index2)
		$('button').off()
		if(deck[index1].pairNumber === deck[index2].pairNumber){
			setTimeout(function(){
				hidePairs(index1, index2)
				theGame();
			}, 2000)	
		}else{
		setTimeout(function(){
			hideCards(index1, index2)
			theGame();
		}, 2000)
		}
	}
	
})
}

$('button').on('click', theGame())