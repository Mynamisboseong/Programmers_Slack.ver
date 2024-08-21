export default function TodoForm({$target,onSubmit}){
    const $form = document.createElement("form")
    this.render = () => {
        $form.innerHTML = `
    <input / >
    <button>입력</button>
    `
    }
    
    $form.addEventListener("submit", (e) => {
        e.preventDefault()

        const $input = $form.querySelector("input")
        const text = $input.value  

        if (text.length > 1) {
            onSubmit(text); 
        }
        console.log(text)
    })
    $target.appendChild($form)
    this.render()
}