contents = document.querySelectorAll('.content');
buttons = document.querySelectorAll('.nav-link');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        hideAllContents();
        contents[index].hidden = false;
        button.classList.add('active');
    });
});

function hideAllContents() {
    contents.forEach(e => {
        e.hidden = true;
    });
    buttons.forEach(e => {
        e.classList.remove('active');
    });
}