let time=10
// undefined
setInterval(function(){
    if(time>=0){
        console.log(time)
        time=time-1
    }
    
},1000)
// 교차 출처 읽기 차단(CORB)으로 MIME 유형이 application/json인 교차 출처 응답(<URL> 차단되었습니다. 자세한 내용은 <URL> 참고하세요.
  setInterval(function(){
      if(time>=0){
          let minute=Math.floor(time/60)
          let second=String(time%60).padStart(2,"0")
          console.log(`${minute}:${second}`)
          time=time-1
          
      }
  },1000)
  //3:00 ~