# Ethereum DEVnet Container

One geth node, based on Ubuntu 16.04 LTS

#### Features:

- Automatic address generation (generates a new coinbase address)
- Genesis block setup (low difficulty for quick tx confirmations, high gas block limit)
- Mining script (starts mining only when new transactions are present)

### Usage:

    docker pull mordhau/ethereum-geth-dev
    docker run -p 8545:8545 mordhau/ethereum-geth-dev


It also has:

- Node JS
- Web3 as npm module