class shoppingCart {
    constructor(carrito, dipcitos) {
        var subtotal = 0
        this.carrito = carrito
        this.dipcitos = dipcitos
        this.verCompra = function (grillaCheckout) {
            let grilla = ""
            for (let i in this.carrito) {
                for (let k in this.dipcitos) {
                    if (this.dipcitos[k].dipcitoid === carrito[i])
                    {
                        grilla += `<tr class="shoppingCartItem tabla-carrito">  
                                  <td class="red lighten-4"><h6 class="itemNombre cyan-text"> ${dipcitos[k].nombre}</h6><img class="logoCheckout" src="img/PicsArt_12-29-09.21.18.png"></td>
                                  <td class=" itemPrecio red lighten-4 center">$ ${dipcitos[k].precio} </td> 
                                  </tr>`
                        subtotal += dipcitos[k].precio;
                    }
                    // ESTO DE ABAJO ES LO QUE IBA A IR EN LOS SHOPPINGCARTITEMS
                                                    //   <td class="numerogrilladip red lighten-4 class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3""> 
                                //   <input  class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                //       value="1">
                                //       <td class="botondelete red lighten-4">
                                //   <button onclick="quitarDip(${carrito[i]})" class="btn btn-danger buttonDelete">X</button></td>
                }
            }
            grillaCheckout.innerHTML = grilla
        }
        this.verTotales = function (grillaTotales) {
            let grilla =
                `<tr class="red accent-1 lighten-4"><td class="leyendanumerototal">TOTAL</td><td class="right"><p class="leyendanumerototal">$${this.total().toFixed(0)} </p></td></tr>`
            grillaTotales.innerHTML = grilla
        }
        this.total = function () {
            return Number(subtotal)
        }
    }
}

// const buttons = document.querySelectorAll(".buttonDelete")
// for (const button of buttons) {
//   button.addEventListener('click', function(event) {
//     const elementoAborrar = carrito[i];
//     if (carrito.dipcitoid == chango.dipcitoid) {
//         document.getElementsByClassName("shoppingCartItem").remove()
//     }

//   })
// }

function muestroCheckout() {
    if (carrito.length === 0) {
        alert("Todavía no agregó ningun producto al carrito.")
    } else {
        chango = new shoppingCart(carrito, DIPCITOS)
        chango.verCompra(checkout)
        chango.verTotales(totales)
    }}
    // for (let i = 0; i < chango.length; i++) {
    //     const elementsTitle = document.getElementsByClassName("itemNombre")
    //     if (chango[i] === DIPCITOS[i].dipcitoid) {
    //       let elementQuantity = elementsTitle[i].closest('.shoppingCartItemQuantity');
    //       elementQuantity.value++;
    //     }
    //   }
