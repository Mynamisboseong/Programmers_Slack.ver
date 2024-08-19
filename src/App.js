//$target : Root라는 DOM
export default function App({$target}) {
    
    const $h1 = document.createElement('h1')
    $target.appenChild($h1)
}