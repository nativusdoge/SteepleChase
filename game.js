function bhumi (){
 	right = setInterval(horseRight,120);
}

function horseRight (){
 document.getElementById("start").style.display="none";
   for(x=1;x<5;x++){
     var pasal = document.getElementById('horse'+x);
     var Lf = pasal.offsetLeft; 
     pasal.className = 'horse runRight character runRight ';

	 //jumping the horse according to its innerwidth
	 if (Lf >= window.innerWidth * 0.46 && Lf <= window.innerWidth * 0.52){
	  //clearInterval(right);
	  pasal.className = 'horse runRight jump';
	  pasal.style.left = Lf + (Math.random()*3) +'px';
	 } 
	 else if (Lf >= window.innerWidth * 0.75 && Lf <= window.innerWidth * 0.8) {
		pasal.className = 'horse runRight jump';
		pasal.style.left = Lf + (Math.random()*3) +'px';
	 }
	 else if (Lf >= window.innerWidth * 1.15 && Lf <= window.innerWidth * 1.2) {
		pasal.className = 'horse runRight jump';
		pasal.style.left = Lf + (Math.random()*3) +'px';
	 }
	 else if (Lf >= window.innerWidth * 1.75 && Lf <= window.innerWidth * 1.8) {
		pasal.className = 'horse runRight jump';
		pasal.style.left = Lf + (Math.random()*3) +'px';
	 }
	 else if (Lf >= window.innerWidth * 1.95 && Lf <= window.innerWidth * 2) {
		pasal.className = 'horse runRight jump';
		pasal.style.left = Lf + (Math.random()*3) +'px';
	 }
	 else if (Lf >= window.innerWidth * 2.45 && Lf <= window.innerWidth * 2.6) {
		pasal.className = 'horse runRight jump';
		pasal.style.left = Lf + (Math.random()*3) +'px';
	 }
	 //stoping the horse at finish line
	 else if (Lf >= window.innerWidth * 3.5 && Lf <= window.innerWidth * 3.8){
		pasal.className = 'horse standRight';
		pasal.style.left = Lf + (Math.random()*4) +'px';
		clearInterval(right);
			WhiHor();
    		BroHor();
    		BlaHor();
    		BriHor();
    		natijaparinam();
    		
	 }
			
	 else {
		pasal.style.left = Lf + (Math.random()*3) +'px'; 
	 }
	}
}
//Result for White horse
function WhiHor(){
	var HorWhi = document.getElementById('horse1');
	Whi = HorWhi.offsetLeft; 
	var HorBro = document.getElementById('horse2');
	Bro = HorBro.offsetLeft; 
	var HorBla = document.getElementById('horse3');
	Bla = HorBla.offsetLeft; 
	var HorBri = document.getElementById('horse4');
	Bri = HorBri.offsetLeft; 

   	var munto = document.getElementsByTagName('td');

	if (Whi > Bro && Whi > Bla && Whi > Bri){
		munto[1].className = 'horse1';
	}
	else if (Whi > Bri && Whi > Bla && Whi < Bro){
		munto[3].className = 'horse1';}
	else if (Whi > Bro && Whi > Bri && Whi < Bla){
		munto[3].className = 'horse1';
	}
	else if (Whi > Bla && Whi > Bro && Whi < Bri){
		munto[3].className = 'horse1';
	}
	else if (Whi < Bri && Whi < Bla && Whi > Bro){
		munto[5].className = 'horse1';		
	}
	else if (Whi < Bro && Whi < Bri && Whi > Bla){
		munto[5].className = 'horse1';
	}
	else if (Whi < Bla && Whi < Bro && Whi > Bri){
		munto[5].className = 'horse1';
	}

	else {
		munto[7].className = 'horse1';
	}
}



//scroll the track
function scrollTrack() {

	setInterval(function() {
		var scroller = document.getElementById('scroll');

		scroller.scrollLeft = scroller.scrollLeft + 1;
	}, 8);
	natija();
} 
//Result for Brown horse
function BroHor(){

    var HorWhi = document.getElementById('horse1');
	Whi = HorWhi.offsetLeft; 
	var HorBro = document.getElementById('horse2');
	Bro = HorBro.offsetLeft; 
	var HorBla = document.getElementById('horse3');
	Bla = HorBla.offsetLeft; 
	var HorBri = document.getElementById('horse4');
	Bri = HorBri.offsetLeft; 

	var munto = document.getElementsByTagName('td');

	if (Bro > Whi && Bro > Bla && Bro > Bri){
		munto[1].className = 'horse2';
	}
	else if (Bro > Bri && Bro > Bla && Bro < Whi){
		munto[3].className = 'horse2';
	}
	else if (Bro > Whi && Bro > Bri && Bro < Bla){
		munto[3].className = 'horse2';
	}
	else if (Bro > Bla && Bro > Whi && Bro < Bri){
		munto[3].className = 'horse2';
	}
	else if (Bro < Bri && Bro < Bla && Bro > Whi){
		munto[5].className = 'horse2';
	}
	else if (Bro < Whi && Bro < Bri && Bro > Bla){
		munto[5].className = 'horse2';
	}
	else if (Bro < Bla && Bro < Whi && Bro > Bri){
		munto[5].className = 'horse2';
	}
	else {
		munto[7].className = 'horse2';
	}
}
//Gain the input bet amount
function natija(){
    var deBit = document.getElementById('funds').innerText;
    var creDit = document.getElementById('amount').value;
    document.getElementById('funds').innerText = deBit - creDit;
    var surugar = document.getElementById('start');
	surugar.removeEventListener('click',natija);
    bhumi();
}
//Result for Black Horse
function BlaHor(){
	var HorWhi = document.getElementById('horse1');
	Whi = HorWhi.offsetLeft; 
	var HorBro = document.getElementById('horse2');
	Bro = HorBro.offsetLeft; 
	var HorBla = document.getElementById('horse3');
	Bla = HorBla.offsetLeft; 
	var HorBri = document.getElementById('horse4');
	Bri = HorBri.offsetLeft; 

	var munto = document.getElementsByTagName('td');
	if (Bla > Bro && Bla > Whi && Bla > Bri){
		munto[1].className = 'horse3';
	}
	else if (Bla > Bri && Bla > Whi && Bla < Bro){
		munto[3].className = 'horse3';
	}
	else if (Bla > Bro && Bla > Bri && Bla < Whi){
		munto[3].className = 'horse3';
	}
	else if (Bla > Whi && Bla > Bro && Bla < Bri){
		munto[3].className = 'horse3';
	}
	else if (Bla < Bri && Bla < Whi && Bla > Bro){
		munto[5].className = 'horse3';
	}
	else if (Bla < Bro && Bla < Bri && Bla > Whi){
		munto[5].className = 'horse3';
	}
	else if (Bla < Whi && Bla < Bro && Bla > Bri){
		munto[5].className = 'horse3';
	}
	else {
		munto[7].className = 'horse3';		
	}
}
//Add or Subtract the bet amount from original amount
function natijaparinam(){
    var deBit = document.getElementById('funds').innerHTML;
    var creDit = document.getElementById('amount').value;
    var ghodas = document.getElementsByTagName('td');
    var bijaya = ghodas[1].className;

    var bets = document.getElementById('bethorse');
    var betsHorse = bets.options[bets.selectedIndex].value;
        if( bijaya == betsHorse ){
           document.getElementById('funds').innerHTML = parseInt(deBit) + (2*parseInt(creDit));
        }
        else {
            document.getElementById('funds').innerHTML = parseInt(deBit);
        }
}
//Result for Next Horse
function BriHor(){

    var HorWhi = document.getElementById('horse1');
	Whi = HorWhi.offsetLeft; 
	var HorBro = document.getElementById('horse2');
	Bro = HorBro.offsetLeft; 
	var HorBla = document.getElementById('horse3');
	Bla = HorBla.offsetLeft; 
	var HorBri = document.getElementById('horse4');
	Bri = HorBri.offsetLeft; 

	var munto = document.getElementsByTagName('td');

	if (Bri > Bro && Bri > Bla && Bri > Whi){
		munto[1].className = 'horse4';
	}
	else if (Bri > Whi && Bri > Bla && Bri < Bro){
		munto[3].className = 'horse4';
	}
	else if (Bri > Bro && Bri > Whi && Bri < Bla){
		munto[3].className = 'horse4';
	}
	else if (Bri > Bla && Bri > Bro && Bri < Whi){
		munto[3].className = 'horse4';
	}
	else if (Bri < Whi && Bri < Bla && Bri > Bro){
		munto[5].className = 'horse4';
	}
	else if (Bri < Bro && Bri < Whi && Bri > Bla){
		munto[5].className = 'horse4';
	}
	else if (Bri < Bla && Bri < Bro && Bri > Whi){
		munto[5].className = 'horse4';
	}
	else{
		munto[7].className = 'horse4';
	}
}

function thalani(){
	var surugar = document.getElementById('start');
	surugar.addEventListener('click',scrollTrack);
}

document.addEventListener('DOMContentLoaded', thalani);

