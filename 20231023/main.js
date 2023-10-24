console.log("Hi");

let h2 = document.createElement("h2");
// <h2></h2>

// 접근 명령어 getElementById
let dom = document.getElementById("dom");

// 텍스트를 집어 넣는다.
h2.innerText = "My name is Junhyuk Jung"

// dom을 h2의 자식으로 붙힌다.
dom.appendChild(h2);