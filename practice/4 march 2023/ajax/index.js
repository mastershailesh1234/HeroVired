function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var arr = JSON.parse(this.responseText);
      console.log(arr);
      var ele = document.createElement("table");
      ele.style.border = "1px solid black";
      for (var i = 0; i < arr.length; i++) {
        var td = document.createElement("tr");
        td.innerHTML = arr[i].login;
        ele.appendChild(td);
      }
      document.getElementById("data").appendChild(ele);
    }
  };
  xhttp.open("GET", "https://api.github.com/users", true);
  xhttp.send();
}
