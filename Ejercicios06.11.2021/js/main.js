

let  arregloNumeros = [1,2,3]
let objetoUsuario = {
    nombre : "Brenda",
    edad: 26
}

let arregloJSON =  JSON.stringify(arregloNumeros) // Convertimos el objeto a lenguaje JSON
console.log(arregloNumeros)
console.log(arregloJSON)


console.log(JSON.stringify(objetoUsuario))

let cadenaArreglo = "[1,2,3,4,5]" 

//Ejemplo de añadir, modificar, y leer una información en un local storage.

myStorage = window.localStorage //Creamos la variable local storage

let carrito = ['Chocolate','agua'] // Creamos la variable carrito
let carritoJSON = JSON.stringify(carrito)   //Convertimos la variable a lenguaje JSON con el metodo Stringify
//Añadimos el caritoCompras a la informacion a guardar en la localStorage.
myStorage.setItem("carritoCompras",carritoJSON)


function agregarProducto ( nuevoProducto){  //declaramos una funcion donde el parametro sera el producto nuevo . 
    let carritoActual = JSON.parse(localStorage.getItem("carritoCompras")) //Traemos la informacion del carrio actual almacenado en locaslStorage y aplicamos la transformacion con parse, para poder modificarlo como cualquier otro objeto.

    carritoActual.push(nuevoProducto)//Agregamos al carritoactual, el nuevoProducto 
    let carritoActualJSON = JSON.stringify(carritoActual)//Comvertimos el carritoActual ya con el nuevo producto, con stringify. 
    localStorage.setItem("carritoCompras",carritoActualJSON)//Modificamos el valor de la clave carrito compras en el localStorage. 
}
agregarProducto("alcohol")
agregarProducto("videojuegos")