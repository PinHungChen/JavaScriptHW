let clickPoint = document.querySelectorAll(".pointer a");
    
let bgc=document.querySelector(".icon");
let preClicks=document.querySelector(".prePic img");
let postClicks=document.querySelector(".postPic img");

let nowPic=0;
addEvent();
function addEvent(){
    for (let clickPoints of clickPoint) {
        clickPoints.addEventListener("click", addClick)
    }
}

preClicks.addEventListener("click", preClick);
postClicks.addEventListener("click", postClick);
function addClick()
{   
    checkPointReset()
    
    clickPoint[this.id-1].className="select";
    console.log(this.id-1);
    let getClickIndex = document.querySelector(".pointer .select");
    nowPic = +getClickIndex.id;
    console.log(getClickIndex.id);
    bgc.style.backgroundImage= `url(./picImg/img${nowPic}.jpeg)` ;
}

function preClick(){
    preClicks.className = "click";
    let timeHover = setTimeout( function (){preClicks.className = ""},2000);
    checkPointReset();
    if(nowPic >1){
    bgc.style.backgroundImage= `url(./picImg/img${nowPic-1}.jpeg)` ;
    clickPoint[nowPic-2].className="select";
    let getClickIndex = document.querySelector(".pointer .select");
    nowPic=+getClickIndex.id; //change to int

}   
    else{
    bgc.style.backgroundImage= `url(./picImg/img${clickPoint.length}.jpeg)` ;
    clickPoint[clickPoint.length-1].className="select"
    let getClickIndex = document.querySelector(".pointer .select");
    nowPic=+getClickIndex.id; //change to int
}

}


function postClick(){
    postClicks.className = "click";
    checkPointReset();
    console.log(nowPic);
    
    let timeHover = setTimeout( function (){postClicks.className = ""},2000);
    if(nowPic <7 && nowPic>=0){
    bgc.style.backgroundImage= `url(./picImg/img${nowPic+1}.jpeg)` ;
    clickPoint[nowPic].className="select";
    let getClickIndex = document.querySelector(".pointer .select");
    console.log(getClickIndex);
    nowPic=+getClickIndex.id; //change to int

}
else if(nowPic == 7){
    bgc.style.backgroundImage= `url(./picImg/img${nowPic-clickPoint.length+1}.jpeg)` ;
    clickPoint[nowPic-clickPoint.length].className="select";
    let getClickIndex = document.querySelector(".pointer .select");
    nowPic=+getClickIndex.id; //change to int}
 }
 else{}

}


function checkPointReset(){
    for (let clickPoints of clickPoint) {
        clickPoints.className="";
    }
}


let playButton = document.querySelector(".picFoot img");
playButton.addEventListener("click", autoPlay);

function autoPlay(){
    console.log(playButton.className == "pause");
    if  (playButton.className == "pause")
    {
        playButton.className = "start";
        playButton.src = "./picImg/start.png";
        clearInterval(timeout);
    }
    else if(playButton.className == "start"){
        playButton.className = "pause";
        playButton.src = "./picImg/pause.png";
        timeout = setInterval(seccal, 1500);
    }
    else{}
}

let timeout = setInterval(seccal, 2000);
function seccal(){
    
    if (nowPic>=0 && nowPic<7){
    checkPointReset();
    bgc.style.backgroundImage= `url(./picImg/img${nowPic+1}.jpeg)` ;
    clickPoint[nowPic].className="select";
    let getClickIndex = document.querySelector(".pointer .select");
    nowPic= +getClickIndex.id;
    
    }else if (nowPic>=7){
        nowPic=0;
        checkPointReset();
        bgc.style.backgroundImage= `url(./picImg/img${nowPic+1}.jpeg)` ;
    clickPoint[nowPic].className="select";
    let getClickIndex = document.querySelector(".pointer .select");
    nowPic=+getClickIndex.id;
    }
    
    
}