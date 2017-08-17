//const MongoClient = require('mongodb').MongoClient;
//Destructured call below. MongoClient is pulled from Mongodb like above
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('59950a29fb07c2399c9bc4d7')
 },{
    $set:{
      name: 'Alex Cittadini'
    },
    $inc:{ age: 1
    }
 },{
   returnOriginal: false
 }).then((result)=>{
   console.log(result);
 });

 // db.collection('ToDos').findOneAndUpdate({
 //   _id: new ObjectID('59957f2bad58eba9f9f63a27')
 // },{
 //    $set:{
 //      completed: true
 //    }
 // },{
 //   returnOriginal: false
 // }).then((result)=>{
 //   console.log(result);
 // });

  //  db.close();
});
