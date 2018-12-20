// build script

const shell = require('shelljs')

shell.cd('..')

shell.cd('student-app')

shell.exec('npm run build', () => {
  shell.cp('-Rf', 'build/*', '../electron/student-app-compiled')
})
