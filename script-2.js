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
    const ledResult = calcEl.querySelector('[name="result"]')

    let a = '';
    let b = '';
    let sign = '';
    let result = '';

    calcEl.addEventListener('click', (e) => {

        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        const operator = ['÷', '×', '-', '+']

        let value = e.target.innerHTML

        //очистить
        if (value === 'Сброс') {
            a = ''
            b = ''
            sign = ''
        }

        // наполняем a и б
        if (b === '' && sign === '') {
            numbers.forEach(el => value === el && (a += value));
            result = a
        } else if (a !== '' && sign !== '') {
            numbers.forEach(el => value === el && (b += value));
            result = b
        }

        // наполняем знак
        operator.forEach(el => {
            if (value === el) {
                sign += value
                result = sign
            }
        });

        // меняем знак
        if (value === '±' && sign === '+') {
            sign = '-'
            result = '-'
        } else if (value === '±' && sign === '-') {
            sign = '+'
            result = '+'
        }

        // возводим в степень
        if (value === 'x²') {
            result = Math.pow(a, 2)
        }

        if (value === '=') {
            switch (sign) {
                case '-':
                    result = a - b
                    break;
                case '÷':
                    result = a / b
                    break;
                case '×':
                    result = a * b
                    break;
                case '+':
                    result = (+a) + (+b)
                    break;
                default:
                    break;
            }
        }

        console.log(a, sign, b);
        ledResult.value = result
    })
}

calculator()