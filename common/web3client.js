import Web3 from 'web3'

let selectedAccount
let isInitialied = false



export const init = async () => {
  let provider = window.ethereum

  if (typeof provider !== 'undefined') {
    provider
      .request({
        method: 'eth_requestAccounts',
      })
      .then((accounts) => {
        selectedAccount = accounts[0]
        console.log('accs = ', accounts)
        console.log('Selected account: ', selectedAccount)
      })
      .catch((err) => {
        console.log('Error: ', err)
        return
      })

    window.ethereum.on('accountsChanged', (accounts) => {
      selectedAccount = accounts[0]
      console.log('Selected account changed to accs: ', selectedAccount)
    })
  }

  const web3 = new Web3(provider)
  const netWorkId = await web3.eth.net.getId()
  console.log(netWorkId)
  isInitialied = true
}

// export const mintToken = async () => {
//   if (!isInitialied) {
//     await init()
//   }

//   return nftContract.methods
//     .mint(selectedAccount)
//     .send({ from: selectedAccount })
// }
