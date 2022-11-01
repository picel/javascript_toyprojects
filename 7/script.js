let buttons = document.querySelectorAll('.expandBtn');

buttons.forEach(element => {
    element.addEventListener('click', function() {
        if (!element.parentElement.parentElement.children[1].hasAttribute('hidden')) {
            element.parentElement.parentElement.children[1].setAttribute('hidden', '');
            element.classList.remove('expanded');
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] != element) {
                    buttons[i].parentElement.parentElement.children[1].setAttribute('hidden', '');
                    buttons[i].classList.remove('expanded');
                }
            }
            element.parentElement.parentElement.children[1].removeAttribute('hidden');
            element.classList.add('expanded');
        }
    });
});