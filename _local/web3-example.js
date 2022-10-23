// COPY
// LINK: https://stackoverflow.com/questions/67856902/how-to-logout-of-metamask-account-using-web3-js

let connected = false
let installed = false

function isMetaMaskInstalled() {
  return Boolean(window.ethereum && window.ethereum.isMetaMask)
}

async function isMetaMaskConnected() {
  const { ethereum } = window
  const accounts = await ethereum.request({ method: 'eth_accounts' })
  return accounts && accounts.length > 0
}

async function initialise() {
  connected = await isMetaMaskConnected()
  installed = isMetaMaskInstalled()
}

initialise()

window.ethereum.on('accountsChanged', async () => {
  initialise()
})
