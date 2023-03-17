const api_url = "https://dummyjson.com/products";

async function getAPI(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  show(data);
}

getAPI(api_url);

function show(data) {
  let tab = `
    <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Description</th>
    <th>Brand</th>
    <th>Price</th>

    </tr>
    `;
    
    for(let r of data.products){
        tab += `<tr>
        <td>${r.id}</td>
        <td><img src = "${r.images[0]}"></td>
        <td>${r.description}</td>
        <td>${r.brand}</td>
        <td>${r.price}</td>
        
        </tr>

        `
    }
  document.getElementById("phone").innerHTML = tab;

}
