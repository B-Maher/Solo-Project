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

var card1 = Cards(1, "./images/black-beard.jpg");
var card2 = Cards(1, "./images/black-beard.jpg");
var card3 = Cards(2, "./images/law.jpg");
var card4 = Cards(2, "./images/law.jpg");
var card5 = Cards(3, "./images/goku.jpg");
var card6 = Cards(3, "./images/goku.jpg");
var card7 = Cards(4, "./images/pokemon.jpg");
var card8 = Cards(4, "./images/pokemon.jpg");
var card9 = Cards(5, "./images/one-piece.jpg");
var card10 = Cards(5, "./images/one-piece.jpg");
var card11 = Cards(6, "./images/uzumaki.jpg");
var card12 = Cards(6, "./images/uzumaki.jpg");
var card13 = Cards(7, "./images/mugiwara.jpg");
var card14 = Cards(7, "./images/mugiwara.jpg");
var card15 = Cards(8, "./images/your-lie.jpg");
var card16 = Cards(8, "./images/your-lie.jpg");
var card17 = Cards(9, "./images/akatsuki.jpg");
var card18 = Cards(9, "./images/akatsuki.jpg");
var card19 = Cards(10, "./images/all-mighty.jpg");
var card20 = Cards(10, "./images/all-mighty.jpg");
var card21 = Cards(11, "./images/kurama.jpg");
var card22 = Cards(11, "./images/kurama.jpg");
var card23 = Cards(12, "./images/kubi.jpg");
var card24 = Cards(12, "./images/kubi.jpg");
var card25 = Cards(13, "./images/meliodas.jpg");
var card26 = Cards(13, "./images/meliodas.jpg");
var card27 = Cards(14, "./images/pok.jpg");
var card28 = Cards(14, "./images/pok.jpg");
var card29 = Cards(15, "./images/L.jpg");
var card30 = Cards(15, "./images/L.jpg");
var card31 = Cards(16, "./images/mytwo.jpg");
var card32 = Cards(16, "./images/mytwo.jpg");
var card33 = Cards(17, "./images/fairy-tail.jpg");
var card34 = Cards(17, "./images/fairy-tail.jpg");
var card35 = Cards(18, "./images/one-punch.jpg");
var card36 = Cards(18, "./images/one-punch.jpg");
var card37 = Cards(18, "./images/one-punch.jpg");
var card38 = Cards(18, "./images/one-punch.jpg");
var card39 = Cards(18, "./images/one-punch.jpg");
var card40 = Cards(18, "./images/one-punch.jpg");
var blackcard = Cards(0, "./images/back.jpg");

var deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40];

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
function hideBlack(){
	$('.card0').hide()
}
function showAll(){
	$('.hiding').show()
	setTimeout(function(){
		hideAll();
		$('.card0').show()
	},5000)
}

function displayCards(array){
	var i = 0;
	while(i < array.length){
		$('#' + (i + 1)).append('<a  class="card0 card' + (i + 1) + '"><img src=' + blackcard.link + '></a>');
		$('#' + (i + 1)).append('<a  class="hiding card' + (i + 1) + '"><img src=' + array[i].link + '></a>');
		i++;
	}
	hideAll()
	hideBlack()
}

var shuffledDeck = shuffle(deck);
function start(){
	$('#section1').hide()
	$('#section2').show()
	$('.divs').html('')
	shuffledDeck = shuffle(deck);
	displayCards(shuffledDeck);
	$('a').on('click', theGame())
}
$('#start').on('click', function(){
	start()
	showAll()
});

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
$('document').ready(function(){
	$('#section2').hide()
	$('#section3').hide()
})