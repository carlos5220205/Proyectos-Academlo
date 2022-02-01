"use stric"


document.addEventListener("DOMContentLoaded", () => consumirAPI()) // Agregamos el addventListener cn el parametro DOMContentLoaded para detectar en el momento que se cargue el domcuento y comienze a ejecutar la función consumirApi.
const URL = "https://rickandmortyapi.com/api/" // Establecemos la url base como una constante. Por que no se modifica este valor , solo se añade contenido. 
const main =document.querySelector("main")

//Funcion para consumir Api
async function consumirAPI () {

   let data = await fetch(`${URL}character`  )//Fetch automaticamente utiliza el metodo GET por lo que pasamos solo el valor de la url. Agrgamos await para indicar que espere el resultado de fetch. 
                .then(response => response.json()) //Utilizamos .then para especificar lo que haremos con el producto de fetch (Una promesa), en este caso lo cambiaremos a lenguaje json. Hacemos un return implicito.
                .then(data => data )//Utilizamos .then para seguir con el producto , lo renombramos data . Y lo imprimimos en consola. 
                .catch(error => console.error("Ups algo salio mal"));//Utilizamos .catch para especificar accione en caso de una respuesta negativa.

    mostrarPersonajes(data)
}
//Funcion para mostrar la informacion recivida de la Api

function mostrarPersonajes (personajesData){
    console.log(personajesData)

    let fragmento= ""

    personajesData.results.map((personaje, index) => { 

        //Desetructuracion de informacion recibida, en este caso recibimos un arreglo con varios objetos con propiedades,y queremos accesar a cada una de ellas para poder mostrarlas individualmente.
        const {name, image,species,status} = personaje  //Seleccionamos las propiedades que son constantes , son las que queremos accesar por cada objetos. En este caso nombramos las nuevas variables de la misma forma que las propiedad que tendrad como valor.
           // console.log(name,image)
        fragmento += ` <article class="characcter-card">
        <div class="avatar-neon">
            <img src="${image}" alt="">
        </div>
        <h5>${name}</h5>
        <P>ESPECIE: <span>${species}</span></P>
        <p>Status : <span>${status}</span></p>
        </article>
        ` 
    })
    main.innerHTML = fragmento


    



}



