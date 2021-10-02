let buttons = [...document.querySelectorAll('input[type="radio"]')];
let cube = document.querySelector('.cube');

for (let i=1; i<=6; i++) {

    buttons[i-1].addEventListener ('click', () => {
        
        for (let j=1; j<=6; j++) {
            cube.classList.remove(`${'show'+j}`);
        }

        cube.classList.add(`${`show`+`${i}`}`);  

    })
}