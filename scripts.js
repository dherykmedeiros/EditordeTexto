let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');

// Adiciona funcionalidade aos botões da barra de ferramentas
for (let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        if (cmd === 'createlink') {
            let url = prompt("Enter the link here: ", "http://");
            document.execCommand(cmd, false, url);
        } else {
            document.execCommand(cmd, false, null);
        }
    });
}

// Adiciona funcionalidade para alternar entre temas claro e escuro
let toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = 'Alternar Tema';
toggleThemeBtn.classList.add('tool--btn');
document.querySelector('.tool-list').appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
