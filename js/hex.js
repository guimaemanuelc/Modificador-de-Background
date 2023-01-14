const colors = [1, 2, 3 ,4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hex = document.querySelector('.hex');
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let hexadecimal = "#";
    for (let i = 0; i < 6; i++) {
        hexadecimal += colors[randomHex()]
    }
    hex.textContent = hexadecimal
    document.body.style.backgroundColor = hexadecimal
})

function randomHex() {
    return Math.floor(Math.random() * colors.length)
}