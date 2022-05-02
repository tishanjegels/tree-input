function ifStatement(){
    var num1 = parseInt(document.getElementById(num1).value);
    var num2 = parseInt(document.getElementById(num2).value);
    var oper = document.getElementById('operators').value;

    if(oper === '+'){
        document.getElementById('results').value = num1 + num2;
    }

    if(oper === '-'){
        document.getElementById('result').value = num1 - num2
    }

    if(oper === '*'){
        document.getElementById('result').value = num1 * num2
    }

    if(oper === '/'){
        document.getElementById('result').value = num1 / num2
    }

    else{
        document.getElementById('error')
    }

}