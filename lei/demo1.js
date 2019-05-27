


var start=document.getElementById('start');
var flagbox=document.getElementById('flagbox');
var box=document.getElementById('box');
var alertimg=document.getElementById('alertimg');
var alertimg1=document.getElementById('alertimg1');
var degree=document.getElementById('degree');
var de1=document.getElementById('de1');
var de2=document.getElementById('de2');
var de3=document.getElementById('de3');
var cha=document.getElementById('cha');
var cha1=document.getElementById('cha1');
var score=document.getElementById('score');
var back=document.getElementById('back');
var minesNum;
var mineOver;
var block;
var block1;
var block2;
var mineMap=[];//shifouyoulei
	bindEvent();

	function bindEvent(){
		start.onclick=function(){
			degree.style.display='block';
			start.style.display='none';
			back.style.display='block';
		}
	    de1.onclick=function(){
			degree.style.display='none';
			box.style.display='block';
			flagbox.style.display='block';
		
			init1();
		}
		de2.onclick=function(){
			degree.style.display='none';
			box.style.display='block';
			flagbox.style.display='block';
		
			init();
		}
		de3.onclick=function(){
			degree.style.display='none';
			box.style.display='block';
			flagbox.style.display='block';
		
			init2();
		}
		back.onclick=function(){
		degree.style.display='none';
		start.style.display='block';
		box.style.display='none';
		back.style.display='none';
		flagbox.style.display='none';
		box.innerHTML='';//html置空
		
		}


        box.oncontextmenu=function(){
			return false;
		}
        box.onmousedown=function(e){
			var event=e.target;
			if(e.which==1){
              leftClick(event);
			}
			else if(e.which==3){
				rightClick(event);
			  }
		}
		cha.onclick=function(){
			alertimg.style.display='none';
			start.style.display='block';
			box.style.display='none';
			flagbox.style.display='none';
			back.style.display='none';
			box.innerHTML='';//html置空
		}
		cha1.onclick=function(){
			alertimg1.style.display='none';
			start.style.display='block';
			box.style.display='none';
			flagbox.style.display='none';
			back.style.display='none';
			box.innerHTML='';//html置空
		}
	}


function init(){
		minesNum=40;
			mineOver=40;
			var b=16;
		 score.innerHTML=mineOver;
     for(var i=0;i<b;i++){
	     for(var j=0;j<b;j++){
	 	 var con=document.createElement('div');
		 con.classList.add('block');
		  con.setAttribute('id',i+'-'+j);
		 box.appendChild(con);
		 mineMap.push({mine:0});
 	        }
    }
      block=document.getElementsByClassName('block')
    while(minesNum){
        var mineIndex=Math.floor(Math.random()*256);
         if(mineMap[mineIndex].mine===0){ 
		 mineMap[mineIndex].mine=1;
	     block[mineIndex].classList.add('islei');
          minesNum--;
         }
    }
}



function init1(){
	minesNum=10;
		mineOver=10;
		var b=10;
	 score.innerHTML=mineOver;
 for(var i=0;i<b;i++){
	 for(var j=0;j<b;j++){
	  var con=document.createElement('div');
	 con.classList.add('block1');
	  con.setAttribute('id',i+'-'+j);
	 box.appendChild(con);
	 mineMap.push({mine:0});
		 }
}
  block1=document.getElementsByClassName('block1')
while(minesNum){
	var mineIndex=Math.floor(Math.random()*100);
	 if(mineMap[mineIndex].mine===0){ 
	 mineMap[mineIndex].mine=1;
	 block1[mineIndex].classList.add('islei');
	  minesNum--;
	 }
}
}

function init2(){
	minesNum=85;
		mineOver=85;
		var b=20;
	 score.innerHTML=mineOver;
 for(var i=0;i<b;i++){
	 for(var j=0;j<b;j++){
	  var con=document.createElement('div');
	 con.classList.add('block2');
	  con.setAttribute('id',i+'-'+j);
	 box.appendChild(con);
	 mineMap.push({mine:0});
		 }
}
  block2=document.getElementsByClassName('block2')
while(minesNum){
	var mineIndex=Math.floor(Math.random()*400);
	 if(mineMap[mineIndex].mine===0){ 
	 mineMap[mineIndex].mine=1;
	 block2[mineIndex].classList.add('islei');
	  minesNum--;
	 }
}
}



function leftClick(dom){
	var islei=document.getElementsByClassName('islei');
	if(dom&&dom.classList.contains('flag')){
		return;
	}else if(dom&&dom.classList.contains('islei')){
	  console.log('gameover');
	  for(var i=0;i<islei.length;i++){
		  islei[i].classList.add('show');
	  }
	  setTimeout(function(){
         alertimg.style.display='block';

	  },1200);
	}
	else{
      var n=0;   
	var posArr=dom&&dom.getAttribute('id').split('-');
	var posx=posArr&&+posArr[0];
	var posy=posArr&&+posArr[1];
	dom&&dom.classList.add('num');
	for(var i=posx-1;i<=posx+1;i++){
		for(var j=posy-1;j<=posy+1;j++){
			var aroundBox=document.getElementById(i+'-'+j);
			if(aroundBox&& aroundBox.classList.contains('islei')){ 
				n++;
			}
				}
		}
		dom&& (dom.innerHTML=n);
		if(n==0){
		for(var i=posx-1;i<=posx+1;i++){
			for(var j=posy-1;j<=posy+1;j++){
			var near=document.getElementById(i+'-'+j);
				if(near&&near.length!=0){
                  if(!near.classList.contains('check')){
					near.classList.add('check');
					leftClick(near);
				  }
				}
					}
				
				}
	}
}
}

function rightClick(dom){
if(dom.classList.contains('num')){
	return;}
dom.classList.toggle('flag');
if(dom.classList.contains('islei')&&dom.classList.contains('flag')){
mineOver--;
}
if(dom.classList.contains('islei')&&!dom.classList.contains('flag')){
	mineOver++;
	}
	score.innerHTML=mineOver;
if(mineOver==0){
	alertimg1.style.display='block';
	
	
	}
}