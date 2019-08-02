const mouseOverNav = document.querySelector('.navBox');
mouseOverNav.addEventListener('mouseover', (event) => {
    event.target.style.color = "yellow";
    setTimeout(() => event.target.style.color = "", 800)
});

const mouseOverCopy = document.querySelectorAll('.copy');
mouseOverCopy.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = "yellow";
        setTimeout(() => event.target.style.color = "", 800)
    })
})
