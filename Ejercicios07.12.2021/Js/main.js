//Ejercicios de Uso Fetch y Promises

"use strict"
let form = document.querySelector("#search-pokemon")//Specifies the object form with  the value on the tag.
let loading = document.getElementById("loading")
document.addEventListener("DOMContentLoaded", () => fetchData()) //Agregamos un escuchador de eventos con el parametro DomcontentLoadded para que la pagina se muestre cuadno el HTML inicial esta completo , sin esperar por los estilos o imagenes. Y pasamos como parametroa ejecutar una función.
form.addEventListener("submit", event => buscarPokemon(event))//Add the event listener , it starte when submit happend on form tag. Then starts buscarPokemon function with envent parmeter.

//Ejercicio de Uso de Fetch y Consumo de Apis



function fetchData (pokemon= "bulbasaur") { //This function contains the Fetch method used to comunicate with a server. Whit the default parameter pokemon with value bulbasaur.
    loading.style.display = "flex" // Specifyes the value of display property of  style ,and style its a property of loading.In this case is set for the loading page, once the new data charge this will be remove in other function.
    
    let url  =`https://pokeapi.co/api/v2/pokemon/${pokemon}`// Guardamos la URL en una variable 
  //fetch(url).then( response => console.log(response) ) //Damos a fetch la instruccion .then y apsamos como parametro las respuesta seguida de una arrow function y pasamos como parametro la respuesta del servidor. En este caso imprmiremos la respuesta con un console pra apreciar la respuesta en console. (Se psa el nombre de response, por que en este punto es una respuesta.Tambien se utiliza res)
  fetch(url).then( response => response.json ()) //Indicamos a la Api Fetch que procese la informacion de la url , agregamos un metodo .then para procesar la informacion una vez que sea exitosa, con  la función arrow con parametro la respuesta del servidor, indicamos que convierta la respuesta a lenguaje JSON.(Se pasa el nombre de data , por que ya no es una respuesta , ahora son datos)
  .then( data => { //  Despues indicamos con otro .then pasamos la data como parametro y le indicamos que muestre la data con el console.log.
      console.log( data)  // Le indicamos que muestre la data con el console.log.(Solo para apreciaocion del ejemplo)
      mostrarPokemon( data) // Indicamos que ejecute una funición creada especialmente apra mostrar la data.
    
    })
}






function mostrarPokemon ( pokemonData) {
    let contenedor = document.getElementById("pokemon-wrapper") //Seleccionamos el div con el id creado y lo guardamos en una variable llamada contenedora.
    let img = contenedor.querySelector("img")//Seleccinamos la seccion de img de nuestro HTML , dentro del variable contenedor.
    let p = contenedor.querySelector("p")//Seleccinamos la seccion de p de nuestro HTML , dentro del variable contenedor.
    
    img.src = pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default   // JavaScript permite manipular la variable como objeto, permitiendo modificar y accesar a informacion como si fuese objetos.En esete caso indicamos la propiedad .src de img , y indicamos que es igual a la caracteristica font-default de la propiedad sprites , de la data recibida. (objeto) 
    p.textContent = pokemonData.name // Seleccionamos la seccion P y le añadimos texto, Ubicamos la propiedad nombre de la data recibida.

    setTimeout(()=>{
        loading.style.display = "none" // // Specifyes the value of display property of  style ,and style its a property of loading.This specifies the value none , so the new search data result can be shows.And this specifies the end of the comunication wiht server(loading).
    },2000);

   }





function buscarPokemon(event){ //Create the function for the search, start when the event happend. 
    loading.style.display = "flex"
    console.log(event)
    let input = form.querySelector("input") //Specifies the value of input in the html tag.
    let pokemonName = input.value.toLowerCase() //Create the let variable with the specific value of input, with lower case methd.
    /*let pokemonName = input.value.toLowerCase() //Create a let with the value searched , with a method to change letters to lower case.
    console.log(pokemonName)//The value of an input is saved as a property. 

    let url = "https:pokeapi.co/api/v2/pokemon/" + pokemonName //Save the url in a variable. Add the searched pokemon to the url.
    fetch(url).then(response =>response.json())//Use the fetch method to contact wiht the Api server from the url value, then the response is translated to json language.
    .then(data=>{
        mostrarPokemon(data)//Execute the function mostrarpokemon. 
    })
    .catch(error => mostrarErrorBusqueda() )
    */
   fetchData(pokemonName)
    event.preventDefault() // Allows prevent the automatic refresh.
}



function mostrarErrorBusqueda(response){
    loader.style.display = "none"
    console.log("si entro el error")
    let toast = document.getElementById("toast")
    toast.classList.toggle("hide")// ClassList.toggle is used for adding or removing the existing classes.
    setTimeout(function(){ //calls a function after a number of milliseconds
        toast.classList.toggle("hide")//Spicifies de property classList, to show the hide class.
    },2000)
    

}