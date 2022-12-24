const SIZE = 2

function display(code) {
    code = code.replaceAll(/[^01]/g, '').trim()
    for (let i = 0; i < SIZE * SIZE; i++) {
        document.querySelector(`#c${i}`).style.backgroundColor = 'initial'
    }
    for (let i = 0; i < code.length; i += 3) {
        const r = 255 * parseInt(code[i])
        const g = 255 * parseInt(code[i + 1])
        const b = 255 * parseInt(code[i + 2])
        document.querySelector(`#c${i / 3}`).style.backgroundColor = `rgb(${r},${g},${b})`
    }
}

function initTable(table) {
    let content = '';
    for (let r = 0; r < SIZE; r++) {
        content += '<tr>'
        for (let c = 0; c < SIZE; c++) {
            const i = r * SIZE + c
            content += `<td id="c${i}"></td>`
        }
        content += '</tr>'
    }
    table.innerHTML = content
}

const displayDiv = document.querySelector('#display')
const codeInput = document.querySelector('#code')
document.querySelector('#displayButton').addEventListener('click', () => {
    const s = codeInput.value
    console.log(`Displaying "${s}"...`)
    display(s)
})
codeInput.addEventListener('keyup', () => {
})
let keydown_last = -1;
codeInput.addEventListener('keydown', e => {
    const l = codeInput.value.replaceAll(/[^01]/g, '').length
    if (l !== keydown_last && l > 0 && l % (SIZE * 3) == 0) {
        codeInput.value += '\n'
    }
    else if (l !== keydown_last && l > 0 && l % 3 == 0) {
        codeInput.value += ' '
    }
    keydown_last = l
})


initTable(document.querySelector('table'))

document.querySelector('form').addEventListener('submit', e => e.preventDefault())
