function press() {
  const el = document.getElementById("select");
  el.innerText = "Hi";
  console.log(el.innerText); //el.value //textcontent
}
function random() {
  const arr = ["SHailesh", "ram", "shyam", "Karthik", "radha"];
  const num = Math.floor(Math.random() * arr.length);
  const el = document.getElementById("select");
  console.log(num);
  el.innerText = "Hi " + arr[num];
  console.log(el.innerText);
}
function input() {
  const el = document.getElementById("name");
  console.log(el.value * 2);
}
function add() {
  const el1 = document.getElementById("num1");
  const el2 = document.getElementById("num2");

  const el3 = document.getElementById("ans");
  const num = Number(el1.value) * Number(el2.value);
  el3.innerText = "Output " + String(num);
  console.log(el3);
}
function new1() {
  let el = document.createElement("h1");
  el.innerHTML = "Shilesh";
  console.log(el);
  //append chiled
  let parent = document.getElementById("parent");
  parent.appendChild(el);
}
function table() {
  let parent = document.getElementById("parent");
  const el1 = document.getElementById("num1");
  const el2 = document.getElementById("num2");
  for (let i = 1; i <= Number(el2.value); i++) {
    let el = document.createElement("p");
    el.innerHTML = `${el1.value} X ${i} = ${el1.value * i}`;
    parent.appendChild(el);
  }
}
