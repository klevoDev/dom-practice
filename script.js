function chekEvenNumber() {
    const enputEl = document.querySelector('.start__form');

    const queryInputEl = enputEl.querySelector('input');

    const resultEnput = enputEl.querySelector('[readonly]')

    const buttonSubmit = enputEl.querySelector('button');

    buttonSubmit.addEventListener('click', (e) => {
        const data = queryInputEl.value
        if (isNaN(data)) {
            resultEnput.value = "NaN"
        } else if (data % 2 === 0) {
            resultEnput.value = 'четное'
        } else if (data % 2 !== 0) {
            resultEnput.value = 'нечетное'
        }
    })
}

chekEvenNumber()

function calculate() {
    const beginEl = document.querySelector('.begin__form')
    const firstOperand = beginEl.querySelector('input')
    const secondOperand = beginEl.querySelector('[name="operand-2"]')
    const operator = beginEl.querySelector('select')
    const result = beginEl.querySelector('[readonly]')
    const buttonSubmit = beginEl.querySelector('button')

    buttonSubmit.addEventListener('click', (e) => {

        const a = firstOperand.value
        const b = secondOperand.value
        const sign = operator.value

        if (isNaN(a) || isNaN(b)) {
            result.value = 'NaN'
        } else {
            sign === 'plus' && (result.value = parseInt(a) + parseInt(b))
            sign === 'subtraction' && (result.value = a - b)
            sign === 'divide' && (result.value = (a / b).toFixed(2))
            sign === 'multiplication' && (result.value = a * b)
        }

        e.preventDefault()
        // ? почему не работает я же задал + ?
        // ? if (sign === '+') {
        // ?    result.value = parseInt(a) + parseInt(b)
    });
}

calculate()