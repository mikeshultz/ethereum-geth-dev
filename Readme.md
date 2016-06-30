# Ethereum DEVnet Container

One geth node, based on Ubuntu 16.04 LTS

#### Features:

- Automatic address generation (generates a new coinbase address)
- Genesis block setup (low difficulty for quick tx confirmations, high gas block limit)
- Mining script (starts mining only when new transactions are present)

### Usage:

    docker pull makevoid/ethereum-geth-dev 
    docker run -p 8545:8545 makevoid/ethereum-geth-dev


It also has:

- Node JS
- Web3 as npm module
- Coffeescript

If you want a password different than `foo` please edit `config/password.txt` before running :D, also you'll may want to not automatically unlock the address via the geth `--password` arg/flag.

Please take a look at the Dockerfile, it's quite simple and has few options (logging of some steps, regenerating the address...)



@makevoid


p.s. there are many repositories called `ethereum-geth-dev`, this is the latest version, you should check this out first but the others have some cool differences as well, the `ethereum-geth-dev-solc` one for example, that adds just an `apt-get-install solc` (coming from the ethereum sources, to add more on that, you can check also that you are actually pulling from the correct sources) ;)
