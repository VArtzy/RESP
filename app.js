const subtitle = document.querySelector('#subtitle');
const subtitle_text = ['next level', 'greatest', 'limits']
const dialog = document.querySelector('#started');

function changingText(el, texts) {
    let i = 0;
    setInterval(() => {
        el.addEventListener('animationend', () => el.classList.remove('appear'))
        el.classList.add('appear')
        if(i === 3) {
            i = 0
            el.textContent = texts[i]
        } else {
            el.textContent = texts[i]
            i++
        }
    }, 8000)
}

function openDialog() {
        dialog.showModal()
}

changingText(subtitle, subtitle_text)