const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '1234abcd');
console.log(token);

var decoded = jwt.verify(token, '1234abcd');
console.log('decoded',decoded);
//jwt.verify

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somsecret').toString();
//
// if(resultHash === token.hash){
//   console.log('Good Data');
// } else {
//   console.log('Hacked data');
// }