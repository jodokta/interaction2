const shapeOfYou = document.querySelector('#welcome-page');
const bullsEye = document.querySelector('#red-ball');
const text = document.querySelector('#text p');
const body = document.querySelector('body');

const focusObj = document.getElementById('focus');
let focusPos= {
    x : focusObj.offsetWidth/2,
    y : focusObj.offsetHeight/2
}

document.onmousemove = function(e){
    // focusObj.style.left = e.pageX - focusObjHalfWidth + "px";
    // focusObj.style.top = e.pageY - focusObjHalfWidth + "px";

    focusObj.style.clipPath = `circle(140px at ${e.pageX - focusObj.getBoundingClientRect().left}px ${e.pageY - focusObj.getBoundingClientRect().top}px)`
    console.log(e.pageX,focusPos.x)
    console.log()
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

