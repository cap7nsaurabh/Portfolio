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
	currentSlide=slideList[slideIndex];
	for(let i=0;i<slideTotal;i++){
		slideList[i].style.display="none";
		dotList[i].className=dotList[i].className.replace(" active","");
	}
	currentSlide.style.display="block"
	currentDot=dotList[slideIndex];
	currentDot.className="dots active";
}


