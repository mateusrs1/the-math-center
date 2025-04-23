function result(num){
    var number = document.getElementById("result").innerText;
    document.getElementById("result").innerText = number + num;
    
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