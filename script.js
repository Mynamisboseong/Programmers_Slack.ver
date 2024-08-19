const $app = document.getElementById("app");

const $header = document.createElement("h1");
$header.textContent = "오늘의 Todo_List"

$app.appendChild($header);

//list만들기(innetHTML이용)
$form = document.createElement("form")
$app.appendChild($form)
$form.innerHTML = `
    <input/><button>입력</button>
    <ul>
        <li>할일1</li>
        <li>할일2</li>
        <li>할일3</li>
        <li>할일4</li>
    </ul>
`

