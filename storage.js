
function guardoDato(dato) {
    if (dato.value !== '')
        localStorage.setItem(dato.id, dato.value)
}

function recuperoDatos() {
    if (localStorage.length > 0) {
        for (let i = 0; i < ls.length; i++) {
            clave = localStorage.key(i)
            document.getElementById(clave).value = localStorage.getItem(clave)
        }    
    }
}