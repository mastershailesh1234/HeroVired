function add_item(){
    let el = document.createElement('li');
    const el1 = document.getElementById("box");
    el.innerHTML=el1.value;
    const parent = document.getElementById("list_item");
    parent.appendChild(el);
    el1.value="";
}