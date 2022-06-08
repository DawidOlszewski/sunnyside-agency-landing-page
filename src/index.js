const menuBtn = document.querySelector('[data-menu-btn-label]')
const menuCheckBox = document.querySelector('[data-menu-btn]')
const menu = document.querySelector('[data-menu]')

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('open-menu', menuCheckBox.checked)

    if (menuCheckBox.checked) {
        menu.classList.toggle('invisible', false)
        menu.classList.toggle('out', false)
    } else {
        menu.classList.toggle('out', true)
        menu.addEventListener(
            'animationend',
            () => {
                menu.classList.toggle('invisible', !menuCheckBox.checked)
            },
            { once: true }
        )
    }
})
