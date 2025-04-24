console.log("Olá, Node!");

function hovercalcicon(i){
    if (i === 1){
        const el = document.getElementsByClassName("lateral-bar");
         el[0].style.width="300px";
         const el1 = document.getElementsByClassName("calcicon");
         el1[0].style.right="290px";
         el1[0].style.cursor="pointer";
        console.log("troxa")
        }else{
            const el = document.getElementsByClassName("lateral-bar");
         el[0].style.width="10px";
         const el1 = document.getElementsByClassName("calcicon");
         el1[0].style.right="0px";
        console.log("troxa")
     }
}




 
function result(num){
    var number = document.getElementById("result").innerText;
    document.getElementById("result").innerText = number + num;
    
}

function writexp(){
    
    document.addEventListener("keydown", numberw);
}
function numberw(event) {
    const text = event.key;
    const simbolsn = /^[0-9+\-*/().]$/;
    const simbols = "+-*/().";
    if (simbolsn.test(text)) {
      const resultEl = document.getElementById("result");
      const atual = resultEl.innerText;
      const endsimbol = atual.charAt(atual.length - 1);

      if (simbols.includes(text) && simbols.includes(endsimbol)) {
        return; 
      }
      resultEl.innerText = atual + text;
    }
  }
  

function clean(){
    
    document.getElementById("result").innerText ="";
    
}





function calc(){
    var number = document.getElementById("result").innerText;
    if(number)
    {
        document.getElementById("result").innerText = eval(number);
    }
}

