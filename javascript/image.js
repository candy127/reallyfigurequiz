const image = new Image(300,200);
const dvi = document.querySelector('#imagebox');
//var num = 1;
var num = Math.floor(Math.random() * 79);
var nawhat = [];
var time =0;
var swit =0;
var answered = ["강다니엘","골룸","괴도키드","김구","김전일","나루토","데드풀","도라에몽","도르마무","라이언","로버트다우니주니어","로키","루피","마네","맨티스","모드리치","미키마우스","민경훈","보노보노","볼드모트","브래드피트","빌게이츠","살라","서장훈","세종대왕","손흥민","송지효","수지","스벤","스칼렛요한슨","스티브잡스","스폰지밥","시진핑","신사임당","아베","안효섭","엘리자베스2세","엘리자베스올슨","엘사","엠마왓슨","옵티머스프라임","올라프","워렌버핏","유재석","윤아","음바페","이수근","이순신","이승만","이승우","이용","장윤주","전소미","정연","제니","제니퍼로렌스","조로","조현우","주디","징징이","짱아","차은우","철수","캉테","캡틴마블","코난","크롱","크리스햄스위스","톰크루즈","트럼프","푸틴","플래시","피오","피카츄","한지민","할리퀸","헬라","호날두","호빵맨"]
var answer;
var point = 0;
localStorage.point = 0;
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
        document.querySelector("#input").value ="";
        if(answer == answered[num]){
            point += 1;
            localStorage.point = point;
            nawhat.push(num);
            shbbob();
            
            
        }else {
            alert("오답 정답:"+answered[num]);
            location.href="resultpage.html";
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
