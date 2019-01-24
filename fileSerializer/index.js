const glob = require('glob')
const fs = require('fs')

const files = glob.sync('../**/**.{js,jsx,css}', {
  nodir: true,
  ignore: [
    '../**/node_modules/**',
    '../**/release/**',
    '../**/student-app-compiled/**',
    '../**/build/**',
    '../**/public/**',
    '../**/fileSerializer/**',
  ],
})

let serializedContent = ''

for (const fileName of files) {
  const fileContent = fs.readFileSync(fileName, 'utf-8')
  serializedContent += `

=========================
${fileName}
-------------------------

${fileContent}

-------------------------

`
}

fs.writeFileSync('./serializedFiles.txt', serializedContent, 'utf-8')
