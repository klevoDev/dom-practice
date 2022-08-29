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
    const buttonEl = sectionBackEl.querySelector('button')
    const buttonDefault = buttonEl.nextElementSibling
    const bodyEl = sectionBackEl.closest('body')
    const colorBackEl = selectedColor.value

    buttonDefault.addEventListener('click', (event) => {
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
    })
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


function lottery() {

    const lotoEl = document.querySelector('.loto__form')
    console.log(lotoEl);
    const buttonEl = lotoEl.querySelector('button')
    console.log(buttonEl);

    const checkBox1 = lotoEl.querySelector('[name="lot-1"]')
    const checkBox2 = lotoEl.querySelector('[name="lot-2"]')
    const checkBox3 = lotoEl.querySelector('[name="lot-3"]')
    const checkBox4 = lotoEl.querySelector('[name="lot-4"]')
    const checkBox5 = lotoEl.querySelector('[name="lot-5"]')

    let countTap = '';

    buttonEl.addEventListener('click', (e) => {

        let onCheckBox = parseInt(Math.random() * (5 - 1 + 1) + 1);

        countTap += String(onCheckBox)

        if (countTap.length > 3) {
            buttonEl.disabled = true
        }

        if (onCheckBox === 1) {
            (checkBox1.disabled = false)
        } else if (onCheckBox === 2) {
            checkBox1.disabled = false
            checkBox2.disabled = false
        } else if (onCheckBox === 3) {
            checkBox1.disabled = false
            checkBox2.disabled = false
            checkBox3.disabled = false
        } else if (onCheckBox === 4) {
            checkBox1.disabled = false
            checkBox2.disabled = false
            checkBox3.disabled = false
            checkBox4.disabled = false
        } else if (onCheckBox === 5) {
            checkBox1.disabled = false
            checkBox2.disabled = false
            checkBox3.disabled = false
            checkBox4.disabled = false
            checkBox5.disabled = false

            checkBox1.checked = true
            checkBox2.checked = true
            checkBox3.checked = true
            checkBox4.checked = true
            checkBox5.checked = true

            alert("Вы выиграли приз.")
        }
        e.preventDefault()
    })
}
lottery()