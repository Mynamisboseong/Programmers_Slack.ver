const $app = document.getElementById("app");

const $header = document.createElement("h1");
$header.textContent = "안녕하세요!!!"

$app.appendChild($header);

//input과 button만들기
const $input = document.createElement("input")
const $button = document.createElement("button")
$app.appendChild($input)
$app.appendChild($button)
$button.innerText = "입력"

//list만들기
const $ul = document.createElement("ul")
$app.appendChild($ul)
const $li = document.createElement("li")
$ul.appendChild($li)
 
$li.textContent = "리스트 만들기"


