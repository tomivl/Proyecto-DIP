function confirmarCompra() {
    setTimeout(() => {
        carrito = []
        alert("Su compra finalizó con éxito")
        $("#shoppingcart").hide("slow")
        $("#dips").slideDown(1500)
        itemsEnCarrito()
    }, );
}