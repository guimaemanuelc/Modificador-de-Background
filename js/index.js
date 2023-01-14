const colors = ["green","red", "pink", "brown", "yellow", "purple","blue"];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
})
