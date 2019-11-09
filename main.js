function Cards(pairNumber, link){
	var card = {};
	card.pairNumber = pairNumber;
	card.link = link;
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
var card37 = Cards(19, "./images/berus.jpg");
var card38 = Cards(19, "./images/berus.jpg");
var card39 = Cards(20, "./images/konoha.jpg");
var card40 = Cards(20, "./images/konoha.jpg");
var blackcard = Cards(0, "./images/dragon.jpg");

var deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32];
var shuffledDeck = shuffle(deck);
var index1 ;
var index2 ;
var count = true;
var numberOfTry = 0;
var isComplete = 0;
var startTime = 0;
var timer = 0;

//function that generate a random numbr between 0 and the length of the initial array;
function randomNumberGenerator(array){
	return Math.floor(Math.random() * array.length)	
}

//function that shuffle the cards
function shuffle(array){
	var newDeck = [];
	var i = 0;
	while (i < array.length){
			newDeck.splice(randomNumberGenerator(array), 0, array[i])
			i++
	}
	return newDeck
}

//function that display the cards in the page
function displayCards(array){
	$('.cads').html('');
	var i = 0;
	while(i < array.length){
		$('#' + (i + 1)).append('<div class="front card0 card' + (i + 1) + '"><img src=' + blackcard.link + '></div>');
		$('#' + (i + 1)).append('<div class="back hiding card' + (i + 1) + '"><img src=' + array[i].link + '></div>');
		i++;
	}
}

//function that hides the matching pairs
function hidePairs(n, m){
	$('#' + n).hide();
	$('#' + m).hide();
}

//function that will check the number of time the user click and return the cards that the user click's on
function theGame(){
$('.cads').on('click', function(){
	var id = this.getAttribute('id');//we get the id of the image clicked
	$('#' + id).toggleClass("isFlipped")// here we revele the card clicked
	numberOfTry++;
	//we enter this condition only if no card is face Up
	if(count){
		index1 = id;
		count = false;
		return 0;
		console.log('a')
	}else{
		index2 = id;
		count = true;
		$('.cads').off()//here we disable all click events because two cards are face Up
		//we check if the two cards are the same
		if(shuffledDeck[parseInt(index1) - 1].pairNumber === shuffledDeck[parseInt(index2) - 1].pairNumber){
			setTimeout(function(){
				//we hide the 2 cards
				hidePairs(index1, index2);
				isComplete++;
				//we check if all the cards are flipped
				if(isComplete === (deck.length / 2)){
					$('#section2').hide();
					$('main').append('<div class="finalMsg"><p class="final">Good job it only took you ' + timer + ' to complete the Game!</p></div>');
				}
				theGame();
			}, 500)	
		}else{
			//here we return the cards again 
		setTimeout(function(){
			$('#' + index1).removeClass('isFlipped')
			$('#' + index2).removeClass('isFlipped')
			theGame();
		}, 750)
		}
	}
});
}

$('.cads').on('click', theGame());

//function that will start the game
function start(){
	$('#section1').hide();
	$('#section2').show();
	$('#section3').show();
	$('.cads').addClass('isFlipped');	
	shuffledDeck = shuffle(deck);
	displayCards(shuffledDeck);
	numberOfTry = 0;
	isComplete = 0;
	count = true;
	setTimeout(function(){
	$('.cads').removeClass('isFlipped');
	var start = new Date();
	startTime = start.toLocaleTimeString('fr-FR', { hour: "numeric", minute: "numeric", second: "numeric" })
	timer = setInterval(displayTime, 1000);	
	},5000);
	
}

//the function that restart the game
$('#playAgain').on('click', function(){
	$('.cads').html('').show();
	$('.finalMsg').remove();
	$('.cads').removeClass('isFlipped');	
	setTimeout(function(){
	start();
	}, 500)

});

$('#start').on('click', function(){
	start();
});

//here prepare the game
$('document').ready(function(){
	$('#section2').hide();
	$('#section3').hide();
});

//functions that will calculate the time the user spend playing
function convertTime(end, start) {
    
    var str = "";
    var resSec = parseInt(end.slice(6)) - parseInt(start.slice(6));
    var resMin = parseInt(end.slice(3, 5)) - parseInt(start.slice(3, 5));
    var resHr = parseInt(end.slice(0, 2)) - parseInt(start.slice(0, 2));

    if (resMin < 0) {
        resMin += 60;
        resHr--;
    }

    if (resSec < 0) {
        resSec += 60;
        resMin--;
    }

    if (resHr !== 0) {
        str += resHr + "hr "
    }
    if (resMin !== 0) {
        str += resMin + "min "
    }
    str += resSec + "s."

    return str
}

//function that display the time the user spend playing
function displayTime() {
        var end = new Date();
        endTime = end.toLocaleTimeString('fr-FR', { hour: "numeric", minute: "numeric", second: "numeric" });
        timer = convertTime(endTime, startTime);
        $('.time').html(convertTime(endTime, startTime));
}