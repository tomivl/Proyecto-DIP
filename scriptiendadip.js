let dips = document.getElementById("dips");
let dipslistado = document.getElementById("dipslistado") 
let dipscomprados = document.getElementById("dipscomprados");
let checkout = document.getElementById("checkout");
let totales = document.getElementById("totales")
var carrito = []
let chango = ""

function cargaDip(carga) {
    let filas = "<div><p>No hay dips disponibles</p></div>"
    if (DIPCITOS.length > 0) {
        filas = ""
        for (let i in DIPCITOS) {
            filas += `<div class="row">
                        <div class="col s12 m10">
                            <div class="card">
                                <div class="card-image">
                                <img src="${DIPCITOS[i].imagen}">
                                </div>
                                <div class="card-content">
                                <h1 id="titulo-card-dip" class="card-title cyan-text" >${DIPCITOS[i].nombre}</h1>
                                <p class= "descripcionCard">${DIPCITOS[i].descripcion}</p>
                                <p>$ ${DIPCITOS[i].precio}</p>
                                </div>
                                <div class="card-action">
                                <button class="addToCart waves-effect waves-light btn blue white-text" onclick="M.toast({html: '¡Se añadió al carrito!', classes:'rounded'});agregarDip(${DIPCITOS[i].dipcitoid})"><i class='material-icons'>add_shopping_cart</i></button>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
    }
    carga.innerHTML = filas
    itemsEnCarrito()
}
document.body.onload = cargaDip(dipslistado)

function itemsEnCarrito() {
    let leyendacarrito = "TOTAL DE DIPS EN SU CARRITO: "
    document.getElementById("itemscarrito").innerText = leyendacarrito  + carrito.length
}

function agregarDip(dipcitoid) {
    let existe = false
    if (existe == false) {
        carrito.push(dipcitoid)
        localStorage.setItem("dipcitos", JSON.stringify(carrito))
        itemsEnCarrito()
    }
}
function quitarDip(){
    let existe = true
    if(existe == true){
        for (let i = 0; i < carrito.length; i++) {
            let subtotal = 0
            const elementAdeletiar = $(".shoppingCartItem");
             elementAdeletiar.remove()
             carrito.length = 0
             alert("se han quitado los items del carrito")
             localStorage.removeItem("dipcitos")
             itemsEnCarrito()
            $("#shoppingcart").hide("slow")
            $("#dips").slideDown(1500)
    }}}
$("#botonJquery").click(function () {
    muestroCheckout()
    if (carrito.length > 0) {
    $("#dips").slideUp(1500)
    $("#shoppingcart").show("slow");
}
})

$("#btnvolver2").click(function () {
    $("#shoppingcart").slideUp(1500)
    $("#dips").slideDown(1500)
})
