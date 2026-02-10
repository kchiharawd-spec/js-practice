'use strict';

// チェック時、最低１文字は数字or記号を含めるようにする実装


//パスワードの長さを直接入力できるようにする実装

{
    function showPassword() {
        const result = document.getElementById('result');
        const numberCheck = document.getElementById('numbers-checkbox');
        const symbolsCheck = document.getElementById('symbols-checkbox');
        const lettes = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*';
        let password = '';
        let seed = lettes + lettes.toUpperCase();

        if (numberCheck.checked) {
            seed += numbers;
        }

        if (symbolsCheck.checked) {
            seed += symbols;
        }

        for (let i = 0 ; i < slider.value; i++) {
            password += seed[Math.floor(Math.random() * seed.length)];
        }

        result.textContent = password;
    }

    const slider = document.getElementById('slider');
    //スライダーをマウスホイールで操作できるようにする実装
    slider.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            slider.value = Math.min(parseInt(slider.value) + 1, 30);
        } else {
            slider.value = Math.max(parseInt(slider.value) - 1, 6);
        }
        const passwordLength = document.getElementById('password-length');
        passwordLength.textContent = slider.value;
    });
    const btn = document.getElementById('btn');

    slider.addEventListener('input', () => {
        const passwordLength = document.getElementById('password-length');

        passwordLength.textContent = slider.value;
    });

    btn.addEventListener('click', () => {
        showPassword();
    });
}