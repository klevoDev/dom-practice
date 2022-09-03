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



function enterPassword() {
    const aboutEl = document.querySelector('.about');
    const linkEl = aboutEl.querySelectorAll('.about__link')
    const buttonPasEl = aboutEl.querySelector('.about__password')

    linkEl.forEach((e) => e.href = '#')

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
            linkEl[1].href = 'https://yandex.ru'
            linkEl[2].href = 'https://google.com'
            linkEl[3].href = 'https://mail.ru'
            userPassword = ''
        } else if (password.length === userPassword.length && password !== userPassword)
            userPassword = ''
        console.log(userPassword);
    })
}

enterPassword()
