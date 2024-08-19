export default function TodoForm({$target}){
    const $form = document.createElement("form")
    $form.innerHTML = `
    <input / ><button>입력</button>`
    $target.appendChild($form)
}