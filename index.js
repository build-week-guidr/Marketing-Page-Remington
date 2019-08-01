const mouseOverLogo = document.querySelector('.copy');
mouseOverLogo.forEach(element => {
    element.addEventListener('mouseover', event => {          event.target.style.color = "white";
    })
})
