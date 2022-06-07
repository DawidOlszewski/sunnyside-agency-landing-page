const menuBtn = document.querySelector('[data-menu-btn-label]')
const menuCheckBox = document.querySelector('[data-menu-btn]')
const menu = document.querySelector('[data-menu]')

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('open-menu', menuCheckBox.checked)
    menu.classList.toggle('open-menu', menuCheckBox.checked)
    // console.log(e.target, e.currentTarget)
})
