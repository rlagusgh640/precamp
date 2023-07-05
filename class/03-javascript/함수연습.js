
const randombutton=()=>{
 const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0");
  document.getElementById("target").innerText=token
  document.getElementById("target").style.color="#"+token
}
const randombutton2=function(){
  const token2=String(Math.floor(Math.random()*1000000)).padStart(6,"0");
  document.getElementById("target").innerText=token2
}
function randombutton3(){
  const token3=String(Math.floor(Math.random()*1000000)).padStart(6,"0");
  document.getElementById("target").innerText=token3
}
