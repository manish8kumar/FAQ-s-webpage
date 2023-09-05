const accordians = document.querySelectorAll('.accordian');
const btn = document.getElementById("btn");
const h=document.getElementById('faq');
btn.addEventListener("click", () => {
    const bdy = document.getElementById("bod");
    bdy.style.backgroundColor = "black"
    if(btn.innerHTML=="DarkMode"){
        btn.innerHTML="LightMode";
        h.style.color='yellow'
    }
    else if(btn.innerHTML=="LightMode"){
        btn.innerHTML="DarkMode";
        bdy.style.backgroundColor = 'rgb(255, 215, 255)';
        h.style.color='black'
    }

})




accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        
    })
})