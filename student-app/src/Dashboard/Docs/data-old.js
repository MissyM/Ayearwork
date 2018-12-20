// export const temas = [
//   { value:, label:, color:,  }
// ]
export const temas = [
  { value: 'numerosNaturales', label: '1.Numeros Naturales'},
  { value: 'variacionyEcuaciones', label: '2.Variacion y Ecuaciones'},
  { value: 'teoriadelosNumeros', label: '3.Teoria de los Números'},
  { value: 'fraccionariosyDecimales', label: '4.Fraccionarios y Decimales'},
  { value: 'enteros', label: '5.Enteros'},
  { value: 'medicion', label: '6.Medición'},
  { value: 'estadistica', label: '7.Estadística'},
  { value: 'probabilidad', label: '8.Probabilidad'},
  { value: 'generalidadesdeGeometria', label: '9.Generalidades de Geometría'},
  { value: 'cuadrosMagicos', label: '10.Cuadros Mágicos'},
];

export const subtemas = [
  { value: 'sistemadeNumeracion', label: 'Sistema de Numeración' },
  { value: 'operacionesenelConjuntodelosNumerosNaturales', label: 'Operaciones en el Conjunto de los Números Naturales' },
  { value: 'nocinesdeCambio', label: 'Nociones de Cambio' },
  { value: 'ecuaciones', label: 'Ecuaciones' },
  { value: 'multiplosyDivisores', label: 'Multiplos y divisores' },
  { value: 'numerosPrimosyCompuestos', label: 'Números Primos y Compuestos' },
  { value: 'mcd', label: 'MCD' },
  { value: 'fracciones', label: 'Fracciones' },
  { value: 'sumayRestadeFraccionesHomogeneas', label: 'Suma y Resta de Fracciones Homogeneas' },
  { value: 'sumayRestadeFraccionesHeterogemeas', label: 'Suma y Resta de Fracciones Heterogemeas' },
  { value: 'multiplicacionyDivisiondeFracciones', label: 'Multiplicacion y División de Fracciones' },
  { value: 'decimales', label: 'Decimales' },
  { value: 'operacionesdeDecimales', label: 'Operaciones de Décimales' },
  { value: 'conceptodeEnteros', label: 'Concepto de  Enteros' },
  { value: 'operacionesconNumerosEnteros', label: 'Operaciones con Números Enteros' },
  { value: 'amplitud', label: 'Amplitud' },
  { value: 'longitud', label: 'Longitud' },
  { value: 'masa', label: 'Masa' },
  { value: 'poblacionyMuestra', label: 'Poblacion y Muestra' },
  { value: 'variablesEstadisticas', label: 'Variables Estadisticas' },
  { value: 'caracterizacióndeVariables', label: 'Caracterización de Variables' },
  { value: 'conjuntos', label: 'Conjuntos' },
  { value: 'experimentosAleatorios', label: 'Experimentos Aleatorios' },
  { value: 'conteo', label: 'Conteo' },
  { value: 'probabilidad', label: 'Probabilidad' },
  { value: 'conceproscBasicoscdecGeometria', label: 'Concepros Básicos de Geometría' },
  { value: 'poligonos', label: 'Poligonos' },
  { value: 'triangulos', label: 'Triángulos' },
  { value: 'cuadrilateros', label: 'Cuadriláteros' },
  { value: 'transformacionesRigidas', label: 'Transformaciones Rígidas' },
  { value: 'definiciondeCuadrosMágicos', label: 'Definición de Cuadros Mágicos' },
  { value: 'tiposdeCuadrosMagicos', label: 'Tipos de Cuadros Mágicos' },
  { value: 'formasdeObtenerCuadrosMagicos', label: 'Formas de Obtener Cuadros Mágicos' },
  { value: 'propiedadesdelosCuadrosMagicos', label: 'Propiedades de los Cuadros Mágicos' },
  { value: 'estrategiasdeResoluciondeCuadrosMagicos', label: 'Estrategias de Resolución de Cuadros Mágicos' },
  { value: 'construcciondeOrdenImpardeCuadrosMagicos', label: 'Construcción de Orden Impar de Cuadros Mágicos' },
];

// export const optionLength = [
//   { value: 1, label: 'general' },
//   {
//     value: 2,
//     label:
//       'Evil is the moment when I lack the strength to be true to the Good that compels me.',
//   },
//   {
//     value: 3,
//     label:
//       "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
//   },
// ];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(temas);
// }

export const groupedOptions = [
  {
    label: 'Temas',
    options: temas,
  },
  {
    label: 'Subtemas',
    options: subtemas,
  },
];
