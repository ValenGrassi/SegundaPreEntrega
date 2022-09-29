class Suplemento{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const creatina = new Suplemento("Creatina",5000,10);
const proteina = new Suplemento("Proteína",2500,5);
const preWorkout = new Suplemento("Pre-entreno",3500,0);
const massGainer = new Suplemento("Ganador de masa",2000,3);

const inventarioDeProductos = [];
inventarioDeProductos.push(massGainer);
inventarioDeProductos.push(proteina);
inventarioDeProductos.push(preWorkout);
inventarioDeProductos.push(creatina);

const nuevoInventario = [];

const contenedorSuplementos = document.getElementById("contenedorSuplementos");

const contenedorSuplementos2 = document.getElementById("contenedorSuplementos2");

const formulario = document.getElementById("formulario");

/* Local Storage */
if(localStorage.getItem("suplementos")) {
    let nuevoSuplemento = JSON.parse(localStorage.getItem("suplementos"));
    nuevoInventario.push(...nuevoSuplemento); 
}
/**/
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nuevoNombre");
    const precio = document.getElementById("nuevoPrecio");
    const cantidad = document.getElementById("nuevaCantidad");
    const suplemento = new Suplemento(nombre.value,precio.value,cantidad.value);
    nuevoInventario.push(suplemento);
    console.log(nuevoInventario);
    localStorage.setItem("suplementos", JSON.stringify(nuevoInventario))
    formulario.reset();
})


inventarioDeProductos.forEach(suplemento => {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                            <p>Tiene un precio de $${suplemento.precio}.</p>
                            <p>Quedan ${suplemento.cantidad} unidades.</p>
                            `
    const boton = document.createElement("button");
    boton.innerText = `Comprar`
    contenedorSuplementos.appendChild(contenedor);
    contenedorSuplementos.appendChild(boton)
    boton.addEventListener("click",()=>{
        if(suplemento.cantidad >= 1){
            suplemento.cantidad--;
            console.log("¡Agregaste un elemento al carrito!");
        }else{
            console.log("¡No queda stock!")
        }
        contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                            <p>Tiene un precio de $${suplemento.precio}.</p>
                            <p>Quedan ${suplemento.cantidad} unidades.</p>
                            `
    })
})

const verSuplementos = document.getElementById("verSuplementos")
verSuplementos.addEventListener("click",()=>{
    nuevoInventario.forEach(suplemento => {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                                <p>Tiene un precio de $${suplemento.precio}.</p>
                                <p>Quedan ${suplemento.cantidad} unidades.</p>
                                `
        const boton = document.createElement("button");
        boton.innerText = `Comprar`
        contenedorSuplementos2.appendChild(contenedor);
        contenedorSuplementos2.appendChild(boton)
        boton.addEventListener("click",()=>{
            if(suplemento.cantidad >= 1){
                suplemento.cantidad--;
                console.log("¡Agregaste un elemento al carrito!");
            }else{
                console.log("¡No queda stock!")
            }
            contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                                <p>Tiene un precio de $${suplemento.precio}.</p>
                                <p>Quedan ${suplemento.cantidad} unidades.</p>
                                `
        })
    })
})

const borrarSuplementos = document.getElementById("borrarSuplementos");
borrarSuplementos.addEventListener("click", () => {
    nuevoInventario.splice(0,nuevoInventario.length)
    localStorage.clear()
})


 







