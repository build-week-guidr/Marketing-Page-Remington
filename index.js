const mouseOverNav = document.querySelector('.navBox');
mouseOverNav.addEventListener('mouseover', (event) => {
    event.target.style.color = "yellow";
    setTimeout(() => event.target.style.color = "", 2000)
});

const mouseOverCopy = document.querySelectorAll('.copy');
mouseOverCopy.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = "yellow";
        setTimeout(() => event.target.style.color = "", 2000)
    })
})
