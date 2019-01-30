// build script
// Se importa la librería shell 
const shell = require('shelljs')
//Sale de la carpeta de electron
shell.cd('..')
//Entra en la carpeta student-app
shell.cd('student-app')
//el metodo .exec ejecuta un comando npm y cp copia el contenido de build a student-app-compiled
shell.exec('npm run build', () => {
  shell.cp('-Rf', 'build/*', '../electron/student-app-compiled')
})
