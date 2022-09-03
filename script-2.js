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