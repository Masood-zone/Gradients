const body = document.querySelector('body');
const changeColor = document.querySelector('.note');
const btn = document.querySelector('#btn');

let colors = ["#ff6868", "#ff68de", "#fdc639", "#ff7c60", "#403f44", "#1e1b32", "#ff9e68", "#ff68de", "#45c270", "#21cdc3", "#5b7fff", "#33ccfc"];
btn.addEventListener('click', () => {
    for (let index = 0; index < colors.length; index++) {
        let group;
        group = Math.floor(Math.random()*colors.length);
        body.style.background = colors[group];
        changeColor.style.color = "#fff";
    }
});