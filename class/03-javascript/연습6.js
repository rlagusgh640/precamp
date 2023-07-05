const fruits=[
  {number:1 ,title:"레드향"},
  {number:2 ,title:"샤인머스켓"},
  {number:3 ,title:"딸기"},
  {number:4 ,title:"한라봉"},
  {number:5 ,title:"사과"},
  {number:6 ,title:"망고"},
  {number:7 ,title:"산청딸기"},
  {number:8 ,title:"천해향"},
  {number:9 ,title:"과일선물세트"},
  {number:10 ,title:"귤"}
  ]


// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, title: '레드향'}1: {number: 2, title: '샤인머스켓'}2: {number: 3, title: '딸기'}3: {number: 4, title: '한라봉'}4: {number: 5, title: '사과'}5: {number: 6, title: '망고'}6: {number: 7, title: '산청딸기'}7: {number: 8, title: '천해향'}8: {number: 9, title: '과일선물세트'}9: {number: 10, title: '귤'}length: 10lastIndex: (...)lastItem: (...)[[Prototype]]: Array(0)
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].number+" "+fruits[i].title)
}

for(let k=0; k<fruits.length; k++){
  console.log(`${fruits[k].number} ${fruits[k].title}`)
  
}