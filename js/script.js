let slideTotal=4;
let slideIndex=0;
displaySlide(slideIndex);
function setSlide(n){
	displaySlide(n);
}

function move(inc){
	slideIndex=slideIndex+inc;
	if(slideIndex===slideTotal){
		slideIndex=0;
	}
	else if(slideIndex===-1){
		slideIndex=slideTotal-1;
	}
	displaySlide(slideIndex);
}

function displaySlide(slideIndex){
	let slideList=document.getElementsByClassName("slides");
	let dotList=document.getElementsByClassName("dots");
	let captionList=document.getElementsByClassName("slide-text");
	for(let i=0;i<slideTotal;i++){
		slideList[i].style.display="none";
		dotList[i].className=dotList[i].className.replace(" active","");
		captionList[i].style.display="none";
	}
	let currentSlide=slideList[slideIndex];
	currentSlide.style.display="block";
	let currentCaption=captionList[slideIndex];
	currentCaption.style.display="block";
	let currentDot=dotList[slideIndex];
	currentDot.className="dots active";
}


