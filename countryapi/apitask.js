const tableBody = document.querySelector("table tbody");
fetch("https://restcountries.com/v3.1/all")
  .then((request) => request.json())
  .then((response) => {
    data(response)

    function data(request) {
      let content = document.getElementById("demo")
      for (let i = 0; i <= request.length; i++) {

        let list = `<tr>
                            <td>${i + 1}</td>
                            <td>${request[i].name.common}</td>
                            <td>${request[i].capital}</td>
                            <td>${request[i].population}</td>
                            <td><img onclick="details(${i})" src= ${request[i].flags.png}></td>

                         </tr>`

        content.innerHTML += list
      }
    }
  })

function myFunction() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("demo");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

var modal = document.getElementById('button');
function details(i) {
  fetch("https://restcountries.com/v3.1/all")
    .then((request) => request.json())
    .then((response) => {

      document.getElementById("countryname").innerHTML = "Country Name:" + response[i].name.common;
      document.getElementById("capitalname").innerHTML = "Capital Name:" + response[i].capital;
      document.getElementById("population").innerHTML = "Population:" + response[i].population;
      document.getElementById("flag").src = response[i].flags.png;
      document.getElementById("latitude").innerHTML = "Latitude:" + response[i].latlng[0];
      document.getElementById("longitude").innerHTML = "Longitude:" + response[i].latlng[1];
      document.getElementById("currencyname").innerHTML = "Currency Name:" + (response[i].currencies[Object.keys(response[i].currencies)].name);
      document.getElementById("currencysymbol").innerHTML = "Currency Symbol :" + (response[i].currencies[Object.keys(response[i].currencies)].symbol);


    })
  modal.style.display = "block";

}
var closemodal = document.getElementById("close");

closemodal.onclick = function () {
  modal.style.display = "none";
}