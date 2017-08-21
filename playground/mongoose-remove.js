const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

//remove all
// Todo.remove({}).then((result)=>{
//   console.log(result);
// })

// Todo.fineOneAndRemove({});
// Todo.findByIdAndRemove({});

Todo.findOneAndRemove({_id: '599a56c558bdd264c39cd8c4'}).then((todo)=>{
  console.log(todo);
})

// Todo.findByIdAndRemove('599a56c558bdd264c39cd8c4').then((todo)=>{
//   console.log(todo);
// })
