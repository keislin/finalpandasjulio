let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
console.log(datosMemoria)

let contenedor=document.getElementById("contenedor")

datosMemoria.forEach(function(reserva){
    let fila=document.createElement("div")
    fila.classList.add("row","my-5","shadow")
    let columna=document.createElement("div")
    columna.classList.add("col-2")
    let columna2=document.createElement("div")
    columna2.classList.add("col-4")
    let columna3=document.createElement("div")
    columna3.classList.add("col-3")
    let columna4=document.createElement("div")
    columna4.classList.add("col-4")
    


    let titulo=document.createElement("h3")
    titulo.textContent="AGENDA"

    let cliente=document.createElement("h2")
    cliente.textContent=reserva.names

    let email=document.createElement("h2")
    email.textContent=reserva.emails

    let phone=document.createElement("h2")
    phone.textContent=reserva.phones
    
    

    columna.appendChild(titulo)
    columna2.appendChild(cliente)
    columna3.appendChild(email)
    columna4.appendChild(phone)
    fila.appendChild(columna)
    fila.appendChild(columna2)
    fila.appendChild(columna3)
    fila.appendChild(columna4)
    contenedor.appendChild(fila)
    
})