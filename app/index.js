import request from 'utils/request';

// ================================
// START YOUR APP HERE
const app = document.querySelector(".root");

const logo = document.createElement("img");
logo.src = 'assets/images/113.png';

const container = document.createElement("div");
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
fetch(request)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data));
        for (let x in data.location) {
            document.querySelector(".root").innerHTML +=
`<table>
  <tr>
    <th>${x}</th>
  </tr>
  <tr>
    <td>${data.location[x]}</td>
  </tr>
</table>`;
        }
    })
    .catch(error => console.error('Error:', error));
// ================================