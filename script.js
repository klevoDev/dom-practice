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


function getDefaultСolor() {

    const sectionBackEl = document.querySelector('.page__back');
    const selectedColor = sectionBackEl.querySelector('[selected]')
    const bodyEl = sectionBackEl.closest('body')
    const colorBackEl = selectedColor.value

    if (colorBackEl === 'gray') {
        bodyEl.style.backgroundColor = "#ccc"
    } else if (colorBackEl === 'dark-gray') {
        bodyEl.style.backgroundColor = "#332f2c"
    } else if (colorBackEl === 'light-yellow') {
        bodyEl.style.backgroundColor = "#ffffcc"
    } else if (colorBackEl === 'orange') {
        bodyEl.style.backgroundColor = "#ff9640"
    } else if (colorBackEl === 'white') {
        bodyEl.style.backgroundColor = "#fff"
    }
}
getDefaultСolor()


function changeBackground() {
    const sectionBackEl = document.querySelector('.page__back');
    const selectEl = sectionBackEl.querySelector('select');
    const buttonEl = sectionBackEl.querySelector('button');
    const bodyEl = sectionBackEl.closest('body')

    buttonEl.addEventListener('click', (event) => {
        const color = selectEl.value
        if (color === 'gray') {
            bodyEl.style.backgroundColor = "#ccc"
        } else if (color === 'dark-gray') {
            bodyEl.style.backgroundColor = "#332f2c"
        } else if (color === 'light-yellow') {
            bodyEl.style.backgroundColor = "#ffffcc"
        } else if (color === 'orange') {
            bodyEl.style.backgroundColor = "#ff9640"
        } else if (color === 'white') {
            bodyEl.style.backgroundColor = "#fff"
        }
    })
}
changeBackground()




