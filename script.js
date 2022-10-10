console.log('Alivianese padrino')


const url = 'https://reqres.in/api/users?delay=3'

let boton = document.getElementById('boton')
let table = document.getElementById('table')
let gif = document.getElementById('gif')
boton.addEventListener('click', mostrarTabla)

async function mostrarTabla() {
    const tableBody = table.querySelector('tbody')
    gif.style.display = 'block'
    const response = await fetch(url)
    table.style.display = 'table'
    gif.style.display = 'none'
    const data = await response.json()
console.log(data['data'])
    tableBody.innerHTML = null

    for (const person of data['data'] ){
        let row = `<tr>
        <th scope="row">${person.id}</th>
        <td>${person.first_name}</td>
        <td>${person.last_name}</td>
        <td>${person.email}</td>
        <td><img src="${person.avatar}" class="avatar"></img></td>
      </tr>`
      tableBody.innerHTML+=row
    }
}
