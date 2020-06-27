const image = new Image(300,200);
const dvi = document.querySelector("#imagebox");
var texted = document.querySelector("#resulttextd");
var textedd = document.querySelector("#imagetext");
texted.textContent= "당신의 인물퀴즈 능력은!"
if(localStorage.point > 70){
    image.src = 'image/result1.png';
    dvi.appendChild(image); 
    textedd.textContent = localStorage.point+"개 맞춘 너는 이수근급 실력!"
}else if(localStorage.point > 50){
    image.src = 'image/result2.png';
    dvi.appendChild(image); 
    textedd.textContent = localStorage.point+"개 맞춘 너는 은지원급 실력!"
}
else if(localStorage.point > 30){
    image.src = 'image/result3.png';
    dvi.appendChild(image); 
    textedd.textContent = localStorage.point+"개 맞춘 너는 조규현급 실력!"
}
else if(localStorage.point > 10){
    image.src = 'image/result4.png';
    dvi.appendChild(image); 
    textedd.textContent = localStorage.point+"개 맞춘 너는 강호동급 실력!"
}
else if(localStorage.point > 0 || localStorage.point == 0){
    image.src = 'image/result5.png';
    dvi.appendChild(image); 
    textedd.textContent = localStorage.point+"개 맞춘 너는 송민호급 실력!"
}
