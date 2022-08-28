function chekEvenNumber() {
    const enputEl = document.querySelector('.start__form');

    const queryInputEl = enputEl.querySelector('input');

    const resultEnput = enputEl.querySelector('[readonly]')

    const buttonSubmit = enputEl.querySelector('button');
    console.log(buttonSubmit);

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