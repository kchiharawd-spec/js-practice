'use strict';

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        const results = ['大吉', '中吉', '小吉', '末吉', '凶'];
        const n = Math.floor(Math.random() * results.length);

        result.textContent = results[n];

        // switch (n) {
        //     case 0:
        //         result.textContent = '大吉';
        //         break;
        //     case 1:
        //         result.textContent = '中吉';
        //         break;
        //     case 2:
        //         result.textContent = '小吉';
        //         break;
        //     case 3:
        //         result.textContent = '末吉';
        //         break;
        //     case 4:
        //         result.textContent = '凶';
        //         break;
        // }
    });

}