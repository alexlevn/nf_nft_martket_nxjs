# README

- Link [tutorial interract with Smart Contract in React](https://www.youtube.com/watch?v=h9PdvEDuZS8)
- [graph tuts](https://thegraph.com/docs/en/)

**Interact with Smart Contract**

## Setup react app

- create react app

```bash
./create-react-app react_web3_tutorial
```

- install web3

```
./cd react_web3_tutorial
./npm install web3
```

- remove redundant code: css, title, content in App.js

- Add Tailwinds: Follow this [install tailwind to react framework](https://tailwindcss.com/docs/installation/framework-guides)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Add the paths to all your template file in yuor `tailwind.config.js` file

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the taildind directives to your CSS
  Add the `@tailwind` directives for each of Tailwind's layers to you `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- start you build process

```bash
yarn && yarn start
```

- Start using Tailwind's utility classes to style your content in App.js

```js
// ...
<div className="p-10 text-center bg-gray-400 text-red-600 font-semibold font-sans">
  REACT - WEB3 - TUTORIAL
</div>
// ...
```

- The App will not auto builds css, dont know why => So you have to rebuid the app for apply tailwind

```bash
yarn build
```

## Install Web3

- Install libarys:

```bash
yarn add web3
```

- Copy 'Struffle' folder to the project folder

- Run the local blockchain

```bash
./truffle/contracts/npx ganache-cli
```

- Let deploy the contract first

```bash
./yarn
./truffle/ npx truffle migrate
```

- Edit App.js

```js
function App() {
  const providerUrl = process.env.PROVIDER_URL || 'http://localhost:8545/'
  useEffect(() => {
    let provider = window.ethereum

    if (typeof provider !== 'undefined') {
      provider.request({ method: 'eth_requestAccounts' }).then((accounts) =>
        console.log(accounts).catch((err) => {
          console.log(err)
        }),
      )
    }

    const web3 = new Web3(providerUrl)
  }, [])
  return <div className="test-screen my-font">REACT - WEB3 - TUTORIAL</div>
}

export default App
```

- reload the local site & connect to Metamark
- Select Local NetWork: Metamart => Right Top Circle => Settings => Networks => "Localhost:8545"

## Web3Client.js

- Create 'web3client.js' file

```js
import Web3 from 'web3'

let selectedAccount

export const init = () => {
  let provider = window.ethereum

  if (typeof provider !== 'undefined') {
    // Metamask is intalled!

    provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        selectedAccount = accounts[0]
        console.log(`Selected accoutn is ${selectedAccount}`)
      })
      .catch((err) => {
        console.log(err)
      })

    // ...
    window.ethereum.on('accounsChanged', (accounts) => {
      selectedAccount = accounts[0]
      console.log(`Selected account changed to ${selectedAccount}`)
    })
  }

  const web3 = new Web3(provider)
}
```

- update 'App.js'

```js
```

## STEPS TO DEPLOYS

- Run the BlockChain Network & rebuild the NFT.Json

```bash
truffle/contracts > npx ganache-cli
truffle > npx truffle migrate
```

- Re-build the webapp

```bash
yarn && yarn start
```

- import Test Wallet from _'npx ganache-cli'_ process

