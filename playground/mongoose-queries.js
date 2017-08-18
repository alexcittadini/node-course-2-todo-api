const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

User.findById('59963db1c41fc22725aa8def').then((User)=>{
  if (!User) {
    return console.log('ID not found');
  }
  console.log('User ',User);
}).catch((e) => console.log(e));



// var id = '599657d44401f72abeaf6503111';
//
// if(!ObjectId.isValid(id)) {
//   console.log('ID is not valid');
// }
// Todo.find({
//   _id: id,
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id,
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID',todo);
// }).catch((e) => console.log(e));
