function chekEvenNumber() {
    const formEl = document.querySelector('.start__form');

    const queryInputEl = formEl.querySelector('input');

    const resultInputEl = formEl.querySelector('[readonly]')

    const buttonEl = formEl.querySelector('button');

    buttonEl.addEventListener('click', () => {
        const data = queryInputEl.value
        if (isNaN(data)) {
            resultInputEl.value = "NaN"
        } else if (data % 2 === 0) {
            resultInputEl.value = 'четное'
        } else {
            resultInputEl.value = 'нечетное'
        }
    })
}
chekEvenNumber()


function calculate() {
    const formEl = document.querySelector('.begin__form')

    const firstOperandEl = formEl.querySelector('input')
    const secondOperandEl = formEl.querySelector('[name="operand-2"]')
    const operatorEl = formEl.querySelector('select')
    const resultEl = formEl.querySelector('[readonly]')
    const buttonSubmitEl = formEl.querySelector('button')

    buttonSubmitEl.addEventListener('click', (e) => {

        const a = firstOperandEl.value
        const b = secondOperandEl.value
        const sign = operatorEl.value

        if (isNaN(a) || isNaN(b)) {
            resultEl.value = 'NaN'
        } else {
            switch (sign) {
                case 'plus':
                    resultEl.value = parseInt(a) + parseInt(b)
                    break;

                case 'subtraction':
                    resultEl.value = a - b
                    break;

                case 'divide':
                    resultEl.value = (a / b).toFixed(2)
                    break;

                case 'multiplication':

                    resultEl.value = a * b
                    break;
            }

        }
        e.preventDefault()

    });
}
calculate()


function changeBackground() {
    const sectionBackEl = document.querySelector('.page__back');
    const selectEl = sectionBackEl.querySelector('select');
    const buttonEl = sectionBackEl.querySelector('button');
    const bodyEl = document.body

    const buttonDefault = buttonEl.nextElementSibling
    const colorDefault = selectEl.value

    buttonDefault.addEventListener('click', () => {
        console.log(selectEl.value);
        bodyEl.style.backgroundColor = colorDefault
    })

    buttonEl.addEventListener('click', () => {
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
    const formEl = document.querySelector('.loto__form')
    const checkBoxList = formEl.querySelectorAll('.loto__check')
    const buttonEl = formEl.querySelector('button');

    let countTap = 0

    buttonEl.addEventListener('click', (e) => {

        let successCount = 0

        checkBoxList.forEach((el) => {
            const isChecked = !!(parseInt(Math.random() * 2));
            el.checked = isChecked
            successCount += isChecked
        })
        successCount === 5 && alert('Победа')
        countTap += 1
        countTap === 3 && (e.currentTarget.disabled = true)

        e.preventDefault()
    })
}
lottery()



function move() {
    const pageEl = document.querySelector('.page__move');
    const radioList = pageEl.querySelectorAll('.move__radio')
    const leftButtonEl = pageEl.querySelector('button')
    const rightButtonEl = leftButtonEl.nextElementSibling

    console.log(radioList[2]);

    let indexS = 2

    rightButtonEl.addEventListener('click', (event) => {
        radioList.forEach((el, index) => {
            if (el.checked === true) {
                el.checked = false
            }


            if (el.index === index) {
                el.checked = true
            }
        })

    });

    leftButtonEl.addEventListener('click', (event) => {

    });

}
move()