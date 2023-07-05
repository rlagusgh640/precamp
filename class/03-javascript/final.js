const changeP1=()=>{
  let phone1=document.getElementById("phone1").value
  if(phone1.length==3){
    document.getElementById("phone2").focus()
  }
}
const changeP2=()=>{
  let phone2=document.getElementById("phone2").value
  if(phone2.length==4){
    document.getElementById("phone3").focus()
  }
}
const changeP3=()=>{
  let phone3=document.getElementById("phone3").value
  if(phone3.length==4){
    document.getElementById("send").disabled=false;
    document.getElementById("send").style ="background-color:#0068FF; cursor: pointer;"
  }
}
function sendMessage(){
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  document.getElementById("text").innerText = token
  document.getElementById("send").style =""
  document.getElementById("send").setAttribute("disabled", "true")
  document.getElementById("finish").style="background-color:#0068FF; cursor: pointer;"
  document.getElementById("finish").removeAttribute("disabled")
  gettokenTimer();

}
let interval
const gettokenTimer=()=>{
  let timer=10
  interval=setInterval(function(){
    if(timer>=0){
      let min=Math.floor(timer/60)
      let sec=String(timer%60).padStart(2,"0");
      document.getElementById("clock").innerText=min+":"+sec
      timer=timer-1

    }else{
      document.getElementById("text").innerText="000000"
      document.getElementById("send").style =""
      document.getElementById("send").setAttribute("disabled",true)

      document.getElementById("clock").innerText="3:00"
      document.getElementById("finish").style =""
      document.getElementById("finish").setAttribute("disabled",true)
      clearInterval(interval)

    }

  },1000)

 
}
function submitMessage(){
  clearInterval(interval)
  document.getElementById("finish").style =""
  document.getElementById("finish").setAttribute("disabled", "true")
  alert("인증이 완료되었습니다.")
  document.getElementById("finish").innerText="인증완료"
  document.getElementById("submitButton").style ="cursor:pointer;"
  document.getElementById("submitButton").removeAttribute("disabled")
}
const submit=()=>{
  let email=document.getElementById("email").value
  let name=document.getElementById("name").value
  let pw1=document.getElementById("pw1").value
  let pw2=document.getElementById("pw2").value
  let location=document.getElementById("locations").value
  let gender_man=document.getElementById("gender_man").checked
  let gender_woman=document.getElementById("gender_woman").checked
  let vis=true
  //email
  if(email.includes("@")===false){
    document.getElementById("error__email").innerText="이메일이 올바르지 않습니다"
    vis=false;
  }else{
    document.getElementById("error__email").innerText=""
  }

  //name
  if(name===""){
    document.getElementById("error__name").innerText="이름을 입력하세요"
    vis=false;
  }else{
    document.getElementById("error__name").innerText=""
  }
  //pw1
  if(pw1===""){
    document.getElementById("error__pw1").innerText="패스워드를 입력하세요"
    vis=false;
  }else{
    document.getElementById("error__pw1").innerText=""
  }
  //pw2
  if(pw2===""){
    document.getElementById("error__pw2").innerText="패스워들를 다시입력하세요"
    vis=false;
  }else{
    document.getElementById("error__pw2").innerText=""
  }
  if(pw1!==pw2){
    document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
    document.getElementById("error__pw2").innerText = "비밀번호가 일치하지 않습니다."
    vis=false;
  }

  if(location!=="서울" && location!=="부산" && location!=="경기"){
    document.getElementById("error__location").innerText="지역을 입력"
    vis=false;
  } else {
    document.getElementById("error__location").innerText = ""
  }
  if(gender_man===false && gender_woman===false){
    document.getElementById("error__gender").innerText="성별 선택좀"
    vis=false;
  }
  else{
    document.getElementById("error__gender").innerText=""
  }
  if(vis===true){
    alert("가입 축하")
    
  }

}

//  let isStarted=false
//  if(isStarted===false){
  // isStarted=true;
  // document.getElementById("submit").disabled=false
  
  // let time=10;
  // let timer
//   timer=setInterval(function(){
//     if(time>=0){
//       let min=Math.floor(time/60);
//       let second=String(time%60).padStart(2,"0")
//       document.getElementById("clock").innerText=min+":"+second
//       time=time-1;
//     }
//     else{
//       document.getElementById("submit").disabled=true;
//       isStarted=false
//       clearInterval(timer)

//     }
//   },1000)
//  }
 
