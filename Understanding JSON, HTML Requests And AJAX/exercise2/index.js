async function show() {
  var input = document.getElementById("input").value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fec31dfa3fmsh15e3a564e8853e8p16cf5ejsn8ed49ec688a0",
      "X-RapidAPI-Host": "get-population.p.rapidapi.com",
    },
  };
  var table = document.getElementById("table");
  var tr = document.createElement("tr");
  await fetch(
    `https://get-population.p.rapidapi.com/population/country?country=${input}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      if (response != null) {
        var ele = document.createElement("td");
        ele.innerHTML = response.country;
        tr.appendChild(ele);
        var ele2 = document.createElement("td");
        ele2.innerHTML = response.readable_format;
        tr.appendChild(ele2);
        table.appendChild(tr);
      } else {
        alert("Please enter a valid country");
      }
    })
    .catch((err) => console.error(err));
}
