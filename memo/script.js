'use strict';

{
    const text = document.getElementById('text');
    const save = document.getElementById('save');
    const clear = document.getElementById('clear');
    const message = document.getElementById('message');

    if(localStorage.getItem('memo') === null) {
        localStorage.setItem('memo', '');
    }
    text.value = localStorage.getItem('memo')

    save.addEventListener('click', () => {
        message.classList.add('appear');
        setTimeout(() => {
            message.classList.remove('appear');
        }, 1000);
        localStorage.setItem('memo', text.value);
    });

    clear.addEventListener('click', () => {
        if(confirm('削除しますか？') === true) {
            text.value = '';
            localStorage.removeItem('memo');
        }
    });
}