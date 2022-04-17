var sub = document.getElementsByClassName("h-content__submenu")[0];
var button = document.getElementById("burger");
var prev = 0;
var cur = 0;
var counter = 0;

button.addEventListener('click', function(){
	if(counter == 1){
		sub.style.display = "none";
		counter--;
	}
	else if(counter == 0){
		sub.style.display = "flex";
		counter++;
	}
})




if(window.getComputedStyle(button).display == "none"){
	//console.log("No button!");
	document.addEventListener('click', function(w){
		for(var i=0; i<sub.childElementCount; i++){
			if(w.target.getAttribute("href") == sub.children[i].getAttribute("href")){
				cur = i;
				sub.children[i].style.borderColor = "#fff";
				sub.children[i].style.borderRadius = "5px";
				if(prev!=cur){
					sub.children[prev].style.borderColor = "transparent";
					sub.children[prev].style.borderRadius = "0px";
					prev = cur;
				}
			}
		}
	})

	document.addEventListener('mouseover', function(q){
		for(var i=0; i<sub.childElementCount; i++){
			if(q.target.getAttribute("href") == sub.children[i].getAttribute("href")){
				sub.children[i].style.borderBottomColor = "#fff";
			}
			if(q.relatedTarget!= null){ /*Браузер не может понять, откуда пришел курсор, поэтому выдает ошибку*/
				if(q.relatedTarget.getAttribute("href") == sub.children[i].getAttribute("href")){
					sub.children[i].style.borderBottomColor = "transparent";
					if(window.getComputedStyle(sub.children[i]).borderRadius == "5px"){
						sub.children[i].style.borderBottomColor = "#fff";
					}
				}
			}
		}
	})
}
else if(window.getComputedStyle(button).display == "flex"){
	//console.log("Button is available!");
	document.addEventListener('click', function(w){
		for(var i=0; i<sub.childElementCount; i++){
			if(w.target.getAttribute("href") == sub.children[i].getAttribute("href")){
				cur = i;
				sub.children[i].style.color = "rgb(255, 0, 0)";
				if(prev!=cur){
					sub.children[prev].style.color = "#fff";
					prev = cur;
				}
			}
		}
	})

	document.addEventListener('mouseover', function(q){
		for(var i=0; i<sub.childElementCount; i++){
			if(q.target.getAttribute("href") == sub.children[i].getAttribute("href")){
				/*getComputedStyle считывает цвет в таком формате*/
				if(window.getComputedStyle(sub.children[i]).color == "rgb(255, 0, 0)"){ 
					sub.children[i].style.letterSpacing = "none";
					console.log("Red!");
				}
				else if(window.getComputedStyle(sub.children[i]).color != "rgb(255, 0, 0)"){
					sub.children[i].style.letterSpacing = "4px";
					sub.children[i].style.transition = "letter-spacing 0.2s linear";
					console.log("Hover!");
				}
				
			}
			if(q.relatedTarget!= null){ /*Браузер не может понять, откуда пришел курсор, поэтому выдает ошибку*/
				if(q.relatedTarget.getAttribute("href") == sub.children[i].getAttribute("href")){
					sub.children[i].style.letterSpacing = "0px";
					
				}
			}
		}
	})
}
