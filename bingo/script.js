'use strict';

// Bingo Card Generator

{
    // Create a single column
    function createColumbn(col) {
        const source = [];
        for (let i = 0; i < 15; i++) {
            source[i] = i + 1 + col * 15;
        }

        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }

        return column;
    }

    // Create all columns
    function createwColumbns() {
        const columns = [];
        for (let i = 0; i < 5; i++) {
            columns[i] = createColumbn(i);
        }
        columns[2][2] = 'FREE';
        return columns;
    }

    // Create bingo card
    function createBingo(columns) {
        const bingo = [];
        for (let row = 0; row < 5; row++) {
            bingo[row] = [];
            for (let col = 0; col < 5; col++) {
                bingo[row][col] = columns[col][row];
            }
        }
        return bingo;
    }

    // Render bingo card
    function renderBingo(columns) {
        for (let row = 0; row < 5; row++) {
            const tr =document.createElement('tr');
            for (let col = 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = columns[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }

    // Main execution
    const columns = createwColumbns();
    const bingo = createBingo(columns);
    renderBingo(columns);
}