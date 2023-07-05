let isStarted=false;

const send=()=>{
 if(isStarted===false){
  isStarted=true;
  document.getElementById("finish").disabled=false
  let token1=String(Math.floor(Math.random()*1000000)).padStart(6,"0");
  document.getElementById("text").innerText=token1;
  let time=10; 
  let timer
  timer=setInterval(function(){
   if(time>=0){
     
     let min=Math.floor(time/60);
     let second=String(time%60).padStart(2,"0");
     document.getElementById("clock").innerText=min+":"+second;
     time=time-1;
   }else{
     document.getElementById("finish").disabled=true;
     isStarted=false
     clearInterval(timer)
   }
  },1000)
 }else{

 }
 
 
}