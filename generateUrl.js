var fs = require('fs')
var os = require('os')

const fileText = fs.readFileSync('./index.html', 'utf8')
const regex = /\"\/?images\/.+\.(jpg|gif)\"/gm
const paths = fileText.match(regex)
const trimmedPaths = paths.map(path => {
  let trimmedPath =  path.slice(1, -1)
  if (trimmedPath.charAt(0) !== '/') {
    trimmedPath = '/' + trimmedPath
  }
  return trimmedPath
})

function createFetchImageCommand(path) {
  const siteUrl = 'http://www.ilan-traveler.com'
  return `curl -o .${path} --create-dirs ${siteUrl}${path}`
}


const bashCommand = trimmedPaths.map(path => createFetchImageCommand(path)).join(os.EOL)
fs.writeFileSync('./getImage.sh', bashCommand)