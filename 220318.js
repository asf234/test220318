let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')
let boxBonus = document.getElementById('boxBonus')
let lottoStart = document.getElementById('lottoStart')

let arrLotto = [];
let bonus = null;
let temp;
let timerID = null;
let arrBox = [box1,box2,box3,box4,box5,box6,boxBonus]
let j = null;

//boolean값으로 하는거 생각해보기

function lotto(){
  j=0;
  for(let i=0; i<7; i++){
    arrBox[i].style.opacity = 0;
  }
  for(let i=0; i<7; i++){
    let a=Math.floor(Math.random()*45+1)
    if(arrLotto.indexOf(a)!=-1){
      i--
    }else{
      arrLotto[i]=a;
    }
  }

  bonus = arrLotto.pop()

  for(let i=0; i<arrLotto.length; i++){
    for(let j=0; j<arrLotto.length; j++){
      if(arrLotto[j]>arrLotto[i]){
        let temp= arrLotto[i]
        arrLotto[i]=arrLotto[j]
        arrLotto[j]=temp
      }
    }
  }
  box1.innerText=arrLotto[0]
  box2.innerText=arrLotto[1]
  box3.innerText=arrLotto[2]
  box4.innerText=arrLotto[3]
  box5.innerText=arrLotto[4]
  box6.innerText=arrLotto[5]
  boxBonus.innerText=bonus
  timerID = setTimeout(start,1000)
  lottoStart.disabled = true;
  
}
function start(){
    arrBox[j].style.opacity = 1;
    j++
    if(j<7){
      timerID = setTimeout(start,1000)
      if(j===6){
        timerID = setTimeout(stop,1500)
      }
    }
}
function stop(){
  lottoStart.disabled = false;
}
lottoStart.addEventListener('click', lotto, true)