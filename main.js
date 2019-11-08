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

var deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

//function that generate a random numbr between 0 and the length of the initial array;
function randomNumberGenerator(array){
	return Math.floor(Math.random() * array.length)	
}

function shuffle(array){
	var newDeck = [];
	var i = 0;
	while (i < deck.length){
			newDeck.splice(randomNumberGenerator(deck), 0, deck[i])
			i++
	}
	return newDeck
}

function hideAll(){
	$('.hiding').hide()
}

function displayCards(array){
	var i = 0;
	while(i < array.length){
		$('#' + (i + 1)).append('<a  class="card0 card' + (i + 1) + '"><img src=' + blackcard.link + '></a>');
		$('#' + (i + 1)).append('<a  class="hiding card' + (i + 1) + '"><img src=' + array[i].link + '></a>');
		i++;
	}
	hideAll()
}

var shuffledDeck = shuffle(deck);
displayCards(shuffledDeck);

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
	$('.hiding.card' + n).fadeOut( "slow" )
	$('.hiding.card' + m).fadeOut( "slow" )
}
var index1 ;
var index2 ;
var count = true;


function theGame(){
	$('a').on('click', function(){
	if(count){
		index1 = this.getAttribute('class').slice(10);
		count = false;
		reverseCard(index1)
	}else{
		index2 = this.getAttribute('class').slice(10);
		count = true;
		reverseCard(index2)
		$('a').off()
		if(shuffledDeck[parseInt(index1) - 1].pairNumber === shuffledDeck[parseInt(index2) - 1].pairNumber){
			setTimeout(function(){
				hidePairs(index1, index2)
				theGame();
			}, 1000)	
		}else{
		setTimeout(function(){
			hideCards(index1, index2)
			theGame();
		}, 2000)
		}
	}
})
}

$('a').on('click', theGame())