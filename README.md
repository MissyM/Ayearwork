# COMO CORRER ESTE CÓDIGO EN MODO DESARROLLO
1.  Descargue el código
2.  Debe tener un editor de código como VSCode. Abra la carpeta Yupay en su editor
3.  Haga click click derecho sobre la carpeta electron
4.  Haga click izquierdo en la opción abrir terminal. Se abrirá el terminal en la carpeta en la que hizo click.
5.  Asegurese de que el terminal está en la carpeta electron y escriba el comando `<npm start>`. Este comando corre la aplicación
de electron y puede ir al navegador y abrir una ventana con la dirección http://localhost:8000

Y listo, puede hacer cambios en la aplicación. 

## CÓMO COMPILAR ESTE CÓDIGO Y GENERAR UN EJECUTABLE 

1. En windows, escribe en el terminal, en la carpeta electron el comando `<npm run package-win>`
2. En Mac, dentro de la carpeta de electron en el termina escribe el comando: `<npm run package-mac>`
3. En linux, dentro de la carpeta de electron en el termina escribe el comando: `<npm run package-linux>`

El ejecutable que se genera se encuentra en la carpeta: yupay/electron/release