const paraEle = document.getElementById("para");
paraEle.setAttribute("class", "my-class");

const divEl = document.querySelector(".my-class");
divEl.setAttribute("class", "example");

console.log(`${divEl.outerHTML}`);
console.log(`${para.outerHTML}`);
