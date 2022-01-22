/*let form = document.querySelector( "form" )

form.addEventListener("submit", event => leerFormulario( event ))

function leerFormulario(event) {
    let userName = document.getElementById("username").value
    let email = form.querySelector("#email").value
    let password = document.getElementById("password").value
    
    let userData = {
        userName : userName,
        email: email,
        password: password
    } 
    enviarInformacion( JSON.stringify( userData ) ) //Invoke the funtion that send the request, is used the JSON STRINGIFY method to change to string the information.
    event.preventDefault()*/

//Estructura Basica de una peticion atraves de fetch
   /*   fetch("url",{
        method: "Metodo",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: {
            'info': "Informacion en formato JSON",
        }    
    })*/

    /*function enviarInformacion (data){   //Create the function to send the data.
        fetch("./register",{  //Fetch with an url as params. 
            method : "POST", //Specify the maccion to do . 
            headers: {
                'Content-Type': 'application/json' //Specify the type of content
            },
            body: data //The message.
        })
        .then(response => response.json()) //Use .then  to specify the next actions when a  response is received. We use the response as params, after that ,it's specifys  to change the  promise to a Json lenguage.
        .then(data => console.log(data)) // The actions to follow if the response is correct.
        .catch(error => alert(error))//Use .catch to specifie the actions when we recive an error.
        
    }
}*/

/* 
*Asincrono: No ocure en tiempo real .Las respuestas pueden procesarse de forma diferida

*Bloqueante : No nos permite continuar.

*No Bloqueante : Acciones o procesos que devuelven el control de inmediato sin importar el resultado.

*Paralelismo : En programacion , seria tareas que ocucrren de manera simultanea.
 

Javascript es asincrono y no bloqueante. 

 /*
//Ejemplo para ver cual accion se ejecuta primero .
 document.addEventListener("DOMContentLoaded",()=> fetchData())
function fetchData (pokemon= "bulbasaur") { //This function contains the Fetch method used to comunicate with a server. Whit the default parameter pokemon with value bulbasaur.
    console.log("1")
    
    let url  =`https://pokeapi.co/api/v2/pokemon/${pokemon}`// Guardamos la URL en una variable 
  //fetch(url).then( response => console.log(response) ) //Damos a fetch la instruccion .then y apsamos como parametro las respuesta seguida de una arrow function y pasamos como parametro la respuesta del servidor. En este caso imprmiremos la respuesta con un console pra apreciar la respuesta en console. (Se psa el nombre de response, por que en este punto es una respuesta.Tambien se utiliza res)
  fetch(url)
  .then( response => response.json ()) //Indicamos a la Api Fetch que procese la informacion de la url , agregamos un metodo .then para procesar la informacion una vez que sea exitosa, con  la función arrow con parametro la respuesta del servidor, indicamos que convierta la respuesta a lenguaje JSON.(Se pasa el nombre de data , por que ya no es una respuesta , ahora son datos)
  .then( data =>  console.log( data))  // Le indicamos que muestre la data con el console.log.(Solo para apreciaocion del ejemplo)
    
    console.log("2")
    /*On this example we can see that javaScrpti show in console  first  the console.log 1 . 
    Then shows the second console.log , after that , it shows the promise. This behavior happend because , complete the full request for the promise  takes  more time than complete the second console.og , so it brings on a secundary order complete the response and follows with the next order. 
} */

/*
//Another example of asinchronism
(function (){
    console.log(1)

    setTimeout(()=> console.log("2"), 5000); //Specifies an order to follow in a period of time, in this case 5 seconds. 
    setTimeout(()=> console.log("3"), 3000);//
    console.log(4)
    //In this case the result is 1,4,3,2
}) ()*/

//Example: How to specifies the waiting for a process, on this case the relotuion for a promise. 
 /*async function funcionAsincrona() {
    console.log( 1 )
    
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`
    //Espera a que una promesa se resuelva
    await   fetch( url ) // await is used, to force the waiting. Making this function
            .then( response => response.json() )
            .then( data =>  console.log( data ))
    console.log( 2 )
}

funcionAsincrona()
*/


/*const promesa = new Promise ( resolve , reject) =>{ // promise es palabra reservada.
        //Codigo de la promesa.
        //resolve ()  en caso e que todohya salido correcto. 
        //reject () en caso que haya algún error 

} */

const promesa = (numero ) => new Promise ((resolve, reject) =>{
    setTimeout(()=> {
        if ((numero % 2) === 0) {
        resolve("Es par!, todo ok!!")
        }else {
        reject("ups, algo salio mal ")   
        }
    },2000);    
})
/*promesa(11)
.then(response => console.log(resultado))
.catch(console.log(error))*/

async function funcionAsincrona(number) {
    console.log(1)
    try{
        console.log(1)
    let resultadoPromesa = await promesa(number) //At the moment we add the expression await the result its understandable by JavaScript, the promise is resolved, is not showed just as a pending promise, is showed like the real result, on this case an phrase.

    console.log(resultadoPromesa)
    console.log(2)
    }catch (error) { //We specifies here the accions to take when an error is recived. 
        console.error("error");

    }
}

funcionAsincrona (15)
