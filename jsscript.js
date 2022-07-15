let displayNum = document.getElementById("displayNum");
let displayOp = document.getElementById("displayOp");
let clearButton = document.getElementById("clear");


let numberButtons = document.querySelectorAll('.numberButtons');
let chosenOperator;
let result;

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {

        if ((displayNum.childNodes.length === 0) && (!displayOp.textContent.includes(' '))) {
            displayOp.textContent += `${e.target.textContent}`;
            window.localStorage.setItem('inputNumber1', JSON.stringify(displayOp.textContent));
        }
         if ((displayOp.childNodes.length != 0) && (displayOp.textContent.includes (' '))) {
            displayNum.textContent += `${e.target.textContent}`;
            window.localStorage.setItem('inputNumber2', JSON.stringify(displayNum.textContent));
        }
    })
})
            
    let evaluatorButtons = document.querySelectorAll('.evaluatorButtons');

    evaluatorButtons.forEach((button) => {
        button.addEventListener('click', (e) => {

            if (displayNum.childNodes.length === 0) {
                window.localStorage.setItem('chosenOperator', JSON.stringify(e.target.textContent));
                displayOp.textContent = `${JSON.parse(window.localStorage.getItem('inputNumber1'))}` + ' ' 
                + `${e.target.textContent}`;
                }
            
            if ((displayOp.childNodes.length != 0) && (displayNum.childNodes.length != 0))  {
                    let firstNumber = Number(JSON.parse(window.localStorage.getItem('inputNumber1')));
                    let secondNumber = Number(JSON.parse(window.localStorage.getItem('inputNumber2')));
                    let functionSign = (JSON.parse(window.localStorage.getItem('chosenOperator')));
                    let result = operate(firstNumber,secondNumber,functionSign);
                    if (result % 1 !=0) {
                        result = result.toFixed(2)
                    }
        
                    if (button.id == 'equals') {
                        displayOp.textContent = '=' + ' ' + `${result}`; 
                        displayNum.textContent = '';
                        window.localStorage.setItem('inputNumber1', JSON.stringify(result));
                        window.localStorage.removeItem('chosenOperator');
                              }
        
                    else {
                        displayOp.textContent = `${result}` + ' ' + `${e.target.textContent}`;
                        displayNum.textContent = '';
                        firstNumber = window.localStorage.setItem('inputNumber1', JSON.stringify(result));
                        functionSign = window.localStorage.setItem('chosenOperator', JSON.stringify(e.target.textContent));
                    }
                }
            })
        })

    clearButton.addEventListener('click', () => {

        displayOp.textContent = '';
        displayNum.textContent = '';
        window.localStorage.clear();
    })


function operate (a,b,operator) {
    if (operator == '+') {
        let sum;
        sum = a + b;
        return sum;
        
    }

    if (operator == '-') {
        let remainder;
        remainder = a - b;
        return remainder;

    }

    if (operator == 'x') {
        let product;
        product = a*b;
        return product;
       
    }

    if (operator == '÷') {
        let divided;
        divided = a/b;
        return divided;
        
    }
    
}


