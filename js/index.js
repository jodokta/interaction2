const shapeOfYou = document.querySelector('#welcome-page');
const bullsEye = document.querySelector('#red-ball');
const text = document.querySelector('#text p');
const body = document.querySelector('body');

let focus = document.getElementById('focus');
let focusHalfWidth= focus.offsetWidth/2;

document.onmousemove = function(e){
    focus.style.left = e.pageX - focusHalfWidth + "px";
    focus.style.top = e.pageY - focusHalfWidth + "px";
}
text.innerHTML = text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 14}deg)">${char}</span>`).join("")


window.addEventListener('load', ()=>{
    setTimeout(()=>{
        bullsEye.classList.remove('hidden');
        shapeOfYou.classList.remove('hidden');
        body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9) ), url(../img/one-piece-wallpaper-laptop.png)';
    }, 3000);
})

