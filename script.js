console.log("Alivianese padrino");

const url = "https://reqres.in/api/users?delay=3"; 

let boton = document.getElementById("boton");
let table = document.getElementById("table");
let gif = document.getElementById("gif");
boton.addEventListener("click", mostrarTabla);

async function mostrarTabla() {
  const tableBody = table.querySelector("tbody"); // Obtenemos el cuerpo de la tabla
  tableBody.innerHTML = null; // Limpiar contenido de la tabla por medio del InnerHTML
  let personas = JSON.parse(localStorage.getItem("memoriaRobada")); // Obtenemos el data de las personas desde el local storage
  if (!personas) { // Condición para saber si tenemos almacenada la informacion
    gif.style.display = "block"; // Mostrar el gif de carga usando la propiedad de css
    const response = await fetch(url); // Promesa fetch para obtener la información de los usuarios
    gif.style.display = "none"; // Ocultamos el gif de carga ya que obtenemos la respuesta del servidor
    const data = await response.json(); // Transformamos la respuesta del API a JSON
    personas = data["data"]; // Accedemos al contenido del JSON y lo guardamos en la variable de personas
    let dataString = JSON.stringify(personas); // Convertimos el JSON en String
    localStorage.setItem("memoriaRobada", dataString); // Guardamomos los datos en la memoria local
  }

  for (const person of personas) {
    let row = `<tr>
        <th scope="row">${person.id}</th>
        <td>${person.first_name}</td>
        <td>${person.last_name}</td>
        <td>${person.email}</td>
        <td><img src="${person.avatar}" class="avatar"></img></td>
      </tr>`;
    table.style.display = "table";
    tableBody.innerHTML += row;
  }
}