document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            switch (button.id) {
                case 'clear':
                    display.innerText = '0';
                    break;
                case 'equals':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    if (display.innerText === '0') {
                        display.innerText = button.innerText;
                    } else {
                        display.innerText += button.innerText;
                    }
            }
        });
    });
});
