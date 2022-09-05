function chekSymbol() {
    const startEl = document.querySelector('.start__block')

    startEl.addEventListener('click', (e) => {
        switch (e.target.type) {
            case 'checkbox':
                console.log(e.target.name);
                break;
            case 'text':
                console.log(e.target.value);
                break;
            case 'button':
                console.log(e.target.id);
                break;
        }
    })
}

chekSymbol()


function enterPassword() {
    const aboutEl = document.querySelector('.about');
    const linkEl = aboutEl.querySelectorAll('.about__link')
    const buttonPasEl = aboutEl.querySelector('.about__password')


    const defaultLink = (e) => {
        e.preventDefault()
    }

    // linkEl.forEach((el) => {
    //     e.href = '#'
    //     el.prevent

    //     el.addEventListener('click', defaultLink)
    // })



    const password = "1234"
    let userPassword = ''

    buttonPasEl.addEventListener('click', (e) => {

        switch (e.target.id) {
            case '1':
                userPassword += '1'
                break;
            case '2':
                userPassword += '2'
                break;
            case '3':
                userPassword += '3'
                break;
            case '4':
                userPassword += '4'
                break;
        }

        if (password === userPassword) {
            alert('Ссылки теперь доступны')

            // ! TODO: Сделать циклом
            linkEl[1].href = 'https://yandex.ru'
            linkEl[2].href = 'https://google.com'
            linkEl[3].href = 'https://mail.ru'

            // linkEl.forEach((el) => {
            //     //e.href = '#'
            //     // el.prevent
            //     el.removeEventListener('click', defaultLink)
            // })


            userPassword = ''
        } else if (password.length === userPassword.length && password !== userPassword)
            userPassword = ''
        console.log(userPassword);
    })
}

enterPassword()








function calculator() {

    const calcEl = document.querySelector('table')
    let ledResult = calcEl.querySelector('[name="result"]')

    let firstOperand = ''
    let sign = ''
    let secondOperator = 0

    calcEl.addEventListener('click', (e) => {

        let value = e.target.innerHTML
        firstOperand += value
        ledResult.value = firstOperand

        if (value === '÷') {
            sign = '/'
        } else if (value === '-') {
            sign = '-'
        } else if (value === '+') {
            sign = '+'
        } else if (value === '×') {
            sign = '*'
        }

        if (firstOperand !== '' && sign !== '') {
            secondOperator += value
        }

        if (value === '=' && firstOperand !== '' && sign !== '' && secondOperator !== '') {
            ledResult.value = Number(firstOperand * secondOperator)
        }


        console.log(e.target.innerHTML);

        if (value === '=') {
            switch (sign) {
                case '+':
                    ledResult.value = (+firstOperand) + (+secondOperator)
                    break;
                case '-':
                    ledResult.value = firstOperand - secondOperator
                    break;
                case '*':
                    ledResult.value = firstOperand - secondOperator
                    break;
                case '/':
                    ledResult.value = firstOperand - secondOperator
                    break;
                default:
                    break;
            }
        }


        if (value === 'Сброс') {
            firstOperand = ''
            secondOperator = ''
            sign = ''
            ledResult.value = ''
        }

    })


}

calculator()