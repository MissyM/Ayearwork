
export const model = {
  topics: [
    {
      id: 'numerosNaturales',
      title: 'Numeros Naturales',
      subtopics: [
        {
          id: 'sistemadeNumeracion',
          title: 'Sistemas de Numeración',
          resources: [],
        },
        {
          id: 'operacionesenelConjuntodelosNumerosNaturales',
          title: 'Operaciones en el conjunto de números naturales',
          resources: [],
        },
      ],
    },
    {
      id: 'variacionyEcuaciones',
      title: 'Variacion y Ecuaciones',
      subtopics: [
        {
          id: 'nocinesdeCambio',
          title: 'Nociones de cambio',
          resources: [],
        },
        {
          id: 'ecuaciones',
          title: 'Ecuaciones',
          resources: [],
        },
      ],
    },
    {
      id: 'teoriadelosNumeros',
      title: 'Teoria de los Números',
      subtopics: [
        {
          id: 'multiplosyDivisores',
          title: 'Múltiplos y divisores',
          resources: [],
        },
        {
          id: 'numerosPrimosyCompuestos',
          title: 'Números primos y compuestos',
          resources: [],
        },
        {
          id: 'mcd',
          title: 'MCD',
          resources: [],
        },
      ],
    },
    {
      id: 'fraccionariosyDecimales',
      title: 'Fraccionarios y Decimales',
      subtopics: [
        {
          id: 'fracciones',
          title: 'Fracciones',
          resources: [],
        },
        {
          id: 'operacionesConFracciones',
          title: 'Operaciones con fracciones',
          resources: [
            // Homo
            { id: 'SUMA Y RESTA DE FRACCIONES HOMOGENEAS-MARCELA.mp4', type: 'video', title: 'Suma y resta de fracciones homogéneas', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '1_1 SUMA Y RESTA FRACCIONES HOMOGÉNEAS.pdf', type: 'pdf', title: 'Suma y resta de fracciones homogéneas', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: 'SUMA FRACCIONES HOMOGENEAS-YOUTUBE.mp4', type: 'video', title: 'Suma de fracciones homogéneas', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: 'RESTA DE FRACCIONES HOMOGENEAS-YOUTUBE.mp4', type: 'video', title: 'Resta de fracciones homogéneas', description: 'lorem asdasdasd adsdsdf sdfdf' },
            // Hetero
            { id: 'SUMA FRACCIONES HETEROGENEAS-YOUTUBE.mp4', type: 'video', title: 'Suma y resta de fracciones heterogéneas - 1', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: 'SUMA FRACCIONES HETEROGENEAS-ESTUDIANTE.mp4', type: 'video', title: 'Suma y resta de fracciones heterogéneas - 2', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '1_2 SUMA Y RESTA FRACCIONES HETEROGÉNEAS.pdf', type: 'pdf', title: 'Suma y resta de fracciones heterogéneas', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '1_3 EJERCICIOS SOBRE SUMA Y RESTA DE FRACCIONES DE IGUAL DENOMINADOR.pdf', type: 'pdf', title: 'Ejercicios sobre suma y resta de fracciones de igual denominador', description: 'lorem asdasdasd adsdsdf sdfdf' },
            // mult
            { id: 'Multiplicación y División de fracciones.mp4', type: 'video', title: 'Multiplicación y división de fracciones', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: 'MULTIPLICACION DE FRACCIONES YOUTUBE.mp4', type: 'video', title: 'Multiplicación de fracciones', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: 'DIVISION DE FRACCIONES.mp4', type: 'video', title: 'División de fracciones', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '2_1 MULTIPLICACIÓN DE FRACCIONES.pdf', type: 'pdf', title: 'Multiplicación de fracciones', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '3_1 DIVISIÓN DE FRACCIONES.pdf', type: 'pdf', title: 'División de fracciones - 1', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '3_2 DIVISION DE FRACCIONES.pdf', type: 'pdf', title: 'División de fracciones - 2', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '3_3 EJERCICIOS DE MULTIPLICACION Y DIVISION DE FRACCIONES.pdf', type: 'pdf', title: 'Ejercicios de multiplicacion y division de fracciones', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '4_1 SUMA, RESTA, MULTIPLICACION Y DIVISION DE FRACCIONARIOS.pdf', type: 'pdf', title: 'Suma, resta, multiplicacion y division de fraccionarios - 1', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '4_2 SUMA, RESTA, MULTIPLICACION Y DIVISION DE FRACCIONARIOS.pdf', type: 'pdf', title: 'Suma, resta, multiplicacion y division de fraccionarios - 2', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '4_3 SUMA, RESTA, MULTIPLICACION Y DIVISION DE FRACCIONARIOS.pdf', type: 'pdf', title: 'Suma, resta, multiplicacion y division de fraccionarios - 3', description: 'lorem asdasdasd adsdsdf sdfdf' },
            { id: '4_4 SUMA, RESTA, MULTIPLICACION Y DIVISION DE FRACCIONARIOS.pdf', type: 'pdf', title: 'Suma, resta, multiplicacion y division de fraccionarios - 4', description: 'lorem asdasdasd adsdsdf sdfdf' },
          ],
        },
      ],
    }
  ],
}

export const subtopics = []

for (const topic of model.topics) {
  subtopics.push.apply(subtopics, topic.subtopics)
}
