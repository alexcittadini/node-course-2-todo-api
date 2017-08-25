const {ObjectID} = require('mongodb');
const{Todo} = require('./../../models/todo')
const{User} = require('./../../models/user')

const userOneId = new ObjectID();
const user = [{
  _id: new ObjectID(),
  email: 'andrew@example.com',
  password: 'userpassword'

},{

}]

const todos = [{
  _id: new ObjectID(),
  text: 'First Test'
}, {
  _id: new ObjectID,
  text: 'sendond test'
}];

const populateTodos = (done) => {
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
};

module.exports = {todos, populateTodos};
