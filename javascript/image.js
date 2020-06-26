const image = new Image(300,200);
const dvi = document.querySelector('#imagebox');
//var num = 1;
var num = Math.floor(Math.random() * 40);
var nawhat = [];
var time =0;
var swit =0;
var answered = ["강다니엘","골룸","괴도키드","김구","김전일","나루토","데드풀","도라에몽","도르마무","라이언","로버트다우니주니어","로키","루피","마네","맨티스","모드리치","미키마우스","민경훈","보노보노","볼드모트","브래드피트","빌게이츠","살라","서장훈","세종대왕","손흥민","송지효","수지","스벤","스칼렛요한슨","스티븐잡스","스펀지밥","시진핑","신사임당","아베","안효섭","엘리자베스2세","엘리자베스올슨","엘사","엠마왓슨"]
var answer;
image.src = 'image/'+num+'.jpg';
    dvi.appendChild(image); 

//window.onload(timeirstart());
timeirstart();
function timeirstart(){
    
    swit = setInterval("timier()", 1000); 
    
    
    
}

function timier(){
    time ++;
    if(time >5){
        answer = document.querySelector("#input").value;
        if(answer == answered[num]){
            alert("정답이다.");
            nawhat.push(num);
            shbbob();
            
            
        }else {
            alert("오답 정답:"+answered[num]);
        }
        document.querySelector("#input").value ="";
        time =0;
        
        clearInterval(swit); 
        timeirstart()
    }
    
}
function shbbob(){
    var imsi = Math.floor(Math.random() * 40);
    for(var i =0; i<nawhat.length; i++){
        if(imsi == nawhat[i]){
            alert("다시한다");
            return shbbob();
        }
    }
    num = imsi;
    image.src = 'image/'+num+'.jpg';
    dvi.appendChild(image); 
}
function levelup(){
    num++;
    image.src = 'image/'+num+'.jpg';
    dvi.appendChild(image); 
}