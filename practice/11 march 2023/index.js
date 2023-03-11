const url = "https://dummyjson.com/products";
var btn = document.getElementById("button");
btn.addEventListener("click", getData());
async function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((ress) => {
      var table = document.createElement("table");
      var ress = ress.products;
      for (var i = 0; i < ress.length; i++) {
        var tr = document.createElement("tr");
        for (const ele in ress[i]) {
          var td = document.createElement("td");
          td.style.border = "1px solid black";
          td.style.padding = "10px";
          td.style.textAlign = "center";

          if (ele == "images") {
            for (var j = 0; j < ress[i][ele].length; j++) {
              var img = document.createElement("img");
              img.src = ress[i][ele][j];
              img.alt = "image";
              img.style.height = "200px";
              img.style.width = "200px";
              td.appendChild(img);
            }
          } else if (ele == "thumbnail") {
            var img = document.createElement("img");
            img.src = ress[i][ele];
            img.alt = "image";
            img.style.height = "300px";
            img.style.width = "300px";
            td.appendChild(img);
          } else {
            td.innerHTML = ress[i][ele];
          }
          tr.style.border = "1px solid black";
          tr.appendChild(td);
        }
        table.style.border = "1px solid black";
        table.style.borderCollapse = "collapse";
        table.appendChild(tr);
      }
      console.log(table);
      document.getElementById("table").appendChild(table);
      console.log(ress);
    })
    .catch((err) => {
      console.log(err);
    });
}
