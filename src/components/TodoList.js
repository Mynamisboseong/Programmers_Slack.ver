export default function TodoList({$target, initialState}){
    const $div = document.createElement("div")
    $div.innerHTML = `
    <ul>
        ${initialState.map(row => `<li>${row.text}</li>`).join([])}
    </ul>
    `
    $target.appendChild($div)
}