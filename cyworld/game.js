const startWord=()=>{
  let myword=document.getElementById("myword").value
  let word=document.getElementById("word").innerText
  let lastWord=word[word.length-1]
  let firstWord=myword[0]
  if(lastWord===firstWord){
    //정답
    document.getElementById("result").innerText="정답입니다."
    document.getElementById("word").innerText=myword
    document.getElementById("myword").value=""

  }else{
    //오답
    document.getElementById("result").innerText="꽝"
    document.getElementById("myword").value=""

  }
}