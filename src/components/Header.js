export default function Header({$target}){
    const $header = document.createElement("h1")
    $header.innerText = "오늘 할 일"
    $target.appendChild($header)
}