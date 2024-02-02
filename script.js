let display = document.getElementById('display');

let buttons = document.querySelectorAll('button');
let resultStr = "0";

let operators = ['%', '/' , '*' , '-' , '+' , '.']

let arr = Array.from(buttons);


arr.forEach(btn => {
    btn.addEventListener('click', (el) =>{
        let content = el.target.innerHTML

        if (content == 'AC'){

            resultStr = '0';

        } else if (content == 'DEL'){
            if (display.innerHTML.length == 1){
                resultStr = 0 
            } else {
                resultStr = resultStr.substring(0, resultStr.length-1)
            }


        } else if (content == '00'){

            if (!(display.innerHTML == '0' || display.innerHTML == 0)){
                resultStr += '00';
            }

        } else if (content == '.' && (display.innerHTML == '0' || display.innerHTML == 0)){
            resultStr = '0.';

        } else if (content == '='){ 

            resultStr = eval(resultStr);

        } else if (operators.includes(content) && operators.includes(display.innerHTML[display.innerHTML.length-1]) ||
                    (content == '0' && display.innerHTML == 0)){
            resultStr = resultStr.substring(0, resultStr.length-1) + content

        } else if (display.innerHTML == '0' || display.innerHTML == 0){
            resultStr = content;

        } else if (display.innerHTML == 'Infinity'){
            resultStr = content;
        } else {
            resultStr += content;
        }
        
        
        display.innerHTML = resultStr

    });
});



document.addEventListener('keydown', (e) => {
    let keyMap = {
        'Delete': 'AC',
        'Escape': 'AC',
        'Backspace': 'DEL',
        'Enter': '=',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        ',': '.',
        '%': '%'

    };

    // Adiciona suporte para números e teclas específicas
    if ((e.key >= 0 && e.key <= 9) || Object.keys(keyMap).includes(e.key)) {
        let content = e.key in keyMap ? keyMap[e.key] : e.key;

        simulateButtonClick(content);
    }
});


function simulateButtonClick(key) {
    let button = Array.from(buttons).find(btn => btn.innerHTML === key);

    if (button) {
        button.click();
    }
}


// TODO
// 
// Tratamento de erros da virgula/ponto
// 