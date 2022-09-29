import CryptoJs from 'crypto-js'


function genPassword(password) {
    return CryptoJs.MD5(password).toString()
}

function getBaseUrl() {
  const baseUrl = 'localhost:3001'
  const protocol = 'http://'

  return `${protocol}${baseUrl}`
}

export {
  genPassword,
  getBaseUrl
}