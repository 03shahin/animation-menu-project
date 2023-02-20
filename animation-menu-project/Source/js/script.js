
// const animStart = document.querySelector('.anim')
// const home = document.querySelector('#home')
// const shop = document.querySelector('#shop')
// const basket = document.querySelector('#basket')
// const about = document.querySelector('#about')
// const contact = document.querySelector('#contact')



// home.addEventListener('mouseenter' , () => {
// animStart.style.width = '78px'
// animStart.style.marginRight = '0px'
// })
// shop.addEventListener('mouseenter' , () => {
// animStart.style.width = '109px'
// animStart.style.marginRight = '91px'
// })
// basket.addEventListener('mouseenter' , () => {
// animStart.style.width = '121px'
// animStart.style.marginRight = '217px'
// })
// about.addEventListener('mouseenter' , () => {
// animStart.style.width = '109px'
// animStart.style.marginRight = '351px'
// })
// contact.addEventListener('mouseenter' , () => {
// animStart.style.width = '125px'
// animStart.style.marginRight = '475px'
// })

const allBtn = document.querySelectorAll('a')
const animStart = document.querySelector('.anim')

animStart.style.width = 

allBtn.forEach(allBtn => {
       allBtn.addEventListener('mouseenter' , (event) => {
     

        animStart.style.width =  event.target.offsetWidth + 'px'
        
        animStart.style.left =  event.target.offsetLeft + 'px'
       })
})