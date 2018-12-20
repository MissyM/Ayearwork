// export const temas = [
//   { value:, label:, color:,  }
// ]
export const temas = [
  { type: 'tema', value: 'numerosNaturales', label: '1.Numeros Naturales'},
  { type: 'tema', value: 'variacionyEcuaciones', label: '2.Variacion y Ecuaciones'},
  { type: 'tema', value: 'teoriadelosNumeros', label: '3.Teoria de los Números'},
  { type: 'tema', value: 'fraccionariosyDecimales', label: '4.Fraccionarios y Decimales'},
  { type: 'tema', value: 'enteros', label: '5.Enteros'},
  { type: 'tema', value: 'medicion', label: '6.Medición'},
  { type: 'tema', value: 'estadistica', label: '7.Estadística'},
  { type: 'tema', value: 'probabilidad', label: '8.Probabilidad'},
  { type: 'tema', value: 'generalidadesdeGeometria', label: '9.Generalidades de Geometría'},
  { type: 'tema', value: 'cuadrosMagicos', label: '10.Cuadros Mágicos'},
];

export const subtemas = [
  { type: 'subtema', value: 'sistemadeNumeracion', label: 'Sistema de Numeración' },
  { type: 'subtema', value: 'operacionesenelConjuntodelosNumerosRacionales', label: 'Operaciones en el Conjunto de los Números Racionales' },
  { type: 'subtema', value: 'nocinesdeCambio', label: 'Nociones de Cambio' },
  { type: 'subtema', value: 'ecuaciones', label: 'Ecuaciones' },
  { type: 'subtema', value: 'multiplosyDivisores', label: 'Multiplos y divisores' },
  { type: 'subtema', value: 'numerosPrimosyCompuestos', label: 'Números Primos y Compuestos' },
  { type: 'subtema', value: 'mcd', label: 'MCD' },
  { type: 'subtema', value: 'fracciones', label: 'Fracciones' },
  { type: 'subtema', value: 'sumayRestadeFraccionesHomogeneas', label: 'Suma y Resta de Fracciones Homogeneas' },
  { type: 'subtema', value: 'sumayRestadeFraccionesHeterogemeas', label: 'Suma y Resta de Fracciones Heterogemeas' },
  { type: 'subtema', value: 'multiplicacionyDivisiondeFracciones', label: 'Multiplicacion y División de Fracciones' },
  { type: 'subtema', value: 'decimales', label: 'Decimales' },
  { type: 'subtema', value: 'operacionesdeDecimales', label: 'Operaciones de Décimales' },
  { type: 'subtema', value: 'conceptodeEnteros', label: 'Concepto de  Enteros' },
  { type: 'subtema', value: 'operacionesconNumerosEnteros', label: 'Operaciones con Números Enteros' },
  { type: 'subtema', value: 'amplitud', label: 'Amplitud' },
  { type: 'subtema', value: 'longitud', label: 'Longitud' },
  { type: 'subtema', value: 'masa', label: 'Masa' },
  { type: 'subtema', value: 'poblacionyMuestra', label: 'Poblacion y Muestra' },
  { type: 'subtema', value: 'variablesEstadisticas', label: 'Variables Estadisticas' },
  { type: 'subtema', value: 'caracterizacióndeVariables', label: 'Caracterización de Variables' },
  { type: 'subtema', value: 'conjuntos', label: 'Conjuntos' },
  { type: 'subtema', value: 'experimentosAleatorios', label: 'Experimentos Aleatorios' },
  { type: 'subtema', value: 'conteo', label: 'Conteo' },
  { type: 'subtema', value: 'probabilidad', label: 'Probabilidad' },
  { type: 'subtema', value: 'conceproscBasicoscdecGeometria', label: 'Concepros Básicos de Geometría' },
  { type: 'subtema', value: 'poligonos', label: 'Poligonos' },
  { type: 'subtema', value: 'triangulos', label: 'Triángulos' },
  { type: 'subtema', value: 'cuadrilateros', label: 'Cuadriláteros' },
  { type: 'subtema', value: 'transformacionesRigidas', label: 'Transformaciones Rígidas' },
  { type: 'subtema', value: 'definiciondeCuadrosMágicos', label: 'Definición de Cuadros Mágicos' },
  { type: 'subtema', value: 'tiposdeCuadrosMagicos', label: 'Tipos de Cuadros Mágicos' },
  { type: 'subtema', value: 'formasdeObtenerCuadrosMagicos', label: 'Formas de Obtener Cuadros Mágicos' },
  { type: 'subtema', value: 'propiedadesdelosCuadrosMagicos', label: 'Propiedades de los Cuadros Mágicos' },
  { type: 'subtema', value: 'estrategiasdeResoluciondeCuadrosMagicos', label: 'Estrategias de Resolución de Cuadros Mágicos' },
  { type: 'subtema', value: 'construcciondeOrdenImpardeCuadrosMagicos', label: 'Construcción de Orden Impar de Cuadros Mágicos' },
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
