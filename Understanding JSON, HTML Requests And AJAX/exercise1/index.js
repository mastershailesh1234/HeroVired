import { xml2json } from "xml-js";
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const json = xml2json(this.response, { spaces: 2, compact: true });
    }
  };
  xhttp.open("GET", "data.xml", true);
  xhttp.send();
}
loadDoc();
