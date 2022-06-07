const menuBtn = document.querySelector('.menu')
const menuCheckBox = menuBtn.querySelector('input')

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('open-menu', menuCheckBox.checked)
    // console.log(e.target, e.currentTarget)
})
