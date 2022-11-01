let menus = document.querySelectorAll('.col-6');
let buttons = document.querySelectorAll('.btn');

menus.forEach((element, idx) => {
    let data = menuList[idx];
    let tmp = element.children[0].children[0]
    tmp.children[0].innerHTML = data.title;
    tmp.children[1].innerHTML = data.desc;
    tmp.children[2].innerHTML = data.price;
    element.classList.add(data.category);
});

buttons.forEach(e => {
    e.addEventListener('click', () => {
        // if element has class 'btn-primary'
        if (e.classList.contains('btn-secondary')) {
            menus.forEach(element => {
                if (element.classList.contains(e.id)) {
                    element.classList.remove('hidden');
                }
            }
            );
            e.classList.remove('btn-secondary');
            e.classList.add('btn-primary');
        } else {
            menus.forEach(element => {
                if (element.classList.contains(e.id)) {
                    element.classList.add('hidden');
                }
            }
            );
            e.classList.remove('btn-primary');
            e.classList.add('btn-secondary');
        }
    });
});
