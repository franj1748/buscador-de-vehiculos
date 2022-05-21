/**
 * @module Funciones
 */


/**
 *Limpia el HTML previo, si existe, en el contenedor de los resultados, permitiendo mostrar solamente los datos de la *búsqueda actual. 
 */
 function limpiarHTML() {

    // limpiar los resultados anteriores
    while(resultadoBusqueda.firstChild) {
        resultadoBusqueda.removeChild(resultadoBusqueda.firstChild);
    }
}


/**
 *Crea el HTML con la información de los autos, según el filtro. 
 * @param {array} autos Arreglo de autos de la base de datos en db.js
 */
function mostrarAutos(autos){

    // Limpia el HTML existente. 
    limpiarHTML();

    // Crea el HTML con la información de los autos. 
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.classList.add('border-bottom', 'border-2', 'p-0', 'm-3');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Precio: $${precio} - ${color}`
        
        resultadoBusqueda.appendChild(autoHTML);
        titulo.classList.remove('hide');

    });
}


/**
 *Genera el HTML necesario para mostrar un mensaje de error si no existen resultados para los filtros de búsqueda.
 */
function noResultado() {

    // Limpia el HTML existente. 
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alert', 'alert-danger');
    noResultado.appendChild(document.createTextNode('¡No hay Resultados, intenta con otros filtros!'));
    resultadoBusqueda.appendChild(noResultado);
}


/**
 *Filtra los resultados de búsqueda por cada uno de los selectores. 
 */
function filtrarAuto() {
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

   if(resultado.length){
        mostrarAutos(resultado);
   } else {
       noResultado();
   }
}

/**
 *Aplica los filtros según la marca. 
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}

/**
 *Aplica los filtros según el año.
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

/**
 *Aplica los filtros según el precio minimo. 
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

/**
 *Aplica los filtros según el precio maximo. 
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

/**
 *Aplica los filtros según la cantidad de puertas. 
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

/**
 *Aplica los filtros según la transmisión. 
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

/**
 *Aplica los filtros según el color. 
 * @param {object} auto Elemento iterado por el método filter de la función {@link filtrarAuto}. 
 * @return {object} El objeto con los cambios si se aplica el filtro o el objeto completo sin modificaciones para conservar los demás filtros. 
 */
function filtrarColor(auto) {
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}
