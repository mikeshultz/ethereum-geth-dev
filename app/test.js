/**
 * Created by Jaaq on 11/25/2017.
 */
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// console.log(web3.eth.getBalance("94f42970ebce4b678bdc9aa829918e926e407aa4"));
//
console.log(web3.eth.sendTransaction({
  from: "0xC903958DcFD79213Da6AE68C8c3e0F3A4A87820b",
  to: "0xe8570c953B65EE5C330685a461dc6Ca281f7F697",
  value: web3.toWei(50, "ether")
}))

// console.log(web3.eth);
// setInterval(() => {
//   console.log(web3.eth.getHashrate(console.log))
// }, 1000);
