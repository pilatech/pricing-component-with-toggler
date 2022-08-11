const toggler = document.querySelector('.toggler__checker')
const prices = document.querySelectorAll('.card__price')

function renderDOM(checked){
 prices.forEach(price => {
  const annualPrice = parseFloat(price.getAttribute('data-price')) * 12
  const discountedPrice = annualPrice - annualPrice * 0.1663
  if(checked){
   price.textContent = `$${discountedPrice.toFixed(2)}`
  } else {
   price.textContent = `$${price.getAttribute('data-price')}`
  }
  
 })
}

toggler.addEventListener('input',() => {
 renderDOM(toggler.checked)
})