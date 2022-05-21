// Variables

/**
 * Contenedor de los resultados de la búsqueda. 
 * @type {HTMLElement}
 */
const resultadoBusqueda = document.querySelector('#resultado');
/**
 * Titulo del contenedor de los resultados de la búsqueda. 
 * @type {HTMLElement}
 */
 const titulo = document.querySelector('#tituloResultados');
/**
 * Selector para definir el año de búsqueda. 
 * @type {HTMLElement} 
 */
const year              = document.querySelector('#year');
/**
 * Selector para definir la marca.
 * @type {HTMLElement}
 */
const marca             = document.querySelector('#marca');
/**
 * Selector para definir el precio mínimo. 
 * @type {HTMLElement}
 */
const minimo            = document.querySelector('#minimo');
/**
 * Selector para definir el precio máximo.
 * @type {HTMLElement}
 */
const maximo            = document.querySelector('#maximo');
/**
 * Selector para definir la cantidad de puertas. 
 * @type {HTMLElement}
 */
const puertas           = document.querySelector('#puertas');
/**
 * Selector para definir el tipo de transmisión. 
 * @type {HTMLElement}
 */
const transmision       = document.querySelector('#transmision');
/**
 * Selector para definir el color. 
 * @type {HTMLElement}
 */
const color             = document.querySelector('#color');
/** 
 * Botón para resetear los filtros de búsqueda. 
 * @type {HTMLElement}
*/
const btnReset = document.querySelector('#resetFiltros');
/**
 * Obtiene el año actual. 
 * @type {number}
 */
const yearMax           = new Date().getFullYear();
/**
 * Resta 10 años al año actual.
 * @type {number}
 */
const yearMin           = yearMax - 10;
/**
 * Objeto que contendrá los datos de la búsqueda, generados dinamicamente al filtrar con los selectores.  
 * @type {{marca: string, year: string, minimo: string, maximo: string, puertas: string, transmision: string, color: string}}
 */
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

// Listeners
document.addEventListener('DOMContentLoaded', () => {

    // Mostrar la información de los autos al cargar la página. 
    // mostrarAutos(autos);

    // Genera e inserta el contenido de los años en el selector correspondiente. 
    for (let i = yearMax; i >= yearMin; i--){

        const opcion       = document.createElement('option');
        opcion.value       = i;
        opcion.textContent = i;

        year.appendChild(opcion);

    }

});

// Bloque de eventos para llenar el objeto datosBusqueda con cada cambio en los selectores. 
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e => {
    // Se convierte a número con el operador + para que los tipos sean igual en la comparación de la función filtrarAuto.  
    datosBusqueda.year = +e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = +e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = +e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = +e.target.value;
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

btnReset.addEventListener('click', () => {

    year.value                = '';
    marca.value               = '';
    minimo.value              = '';
    maximo.value              = '';
    puertas.value             = '';
    transmision.value         = '';
    color.value               = '';

    datosBusqueda.year        = '';
    datosBusqueda.marca       = '';
    datosBusqueda.minimo      = '';
    datosBusqueda.maximo      = '';
    datosBusqueda.puertas     = '';
    datosBusqueda.transmision = '';
    datosBusqueda.color       = '';

    titulo.classList.add('hide');

    limpiarHTML();
});

