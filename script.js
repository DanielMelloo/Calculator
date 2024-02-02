let display = document.getElementById('display');

let buttons = document.querySelectorAll('button');
let resultStr = "";

let notRepeat = ['%', '/' , '*' , '-' , '+' , ',']

let arr = Array.from(buttons);


arr.forEach(btn => {
    btn.addEventListener('click', (el) =>{
        let content = el.target.innerHTML

        if (content == 'AC'){

            resultStr = '0';

        } else if (content == 'DEL'){

            resultStr = resultStr.substring(0, resultStr.length-1)

            if (display.innerHTML.length == 1){
                resultStr = 0
            }


        } else if (content == '00'){
            resultStr += '00';

        } else if (content == '='){ 

            resultStr = eval(resultStr);

            if (resultStr == ''){
                resultStr = 0
            }   

        } else if (notRepeat.includes(content) && notRepeat.includes(display.innerHTML[display.innerHTML.length-1])){

        } else {
            resultStr += content
        }
       
        display.innerHTML = resultStr

    });
});

