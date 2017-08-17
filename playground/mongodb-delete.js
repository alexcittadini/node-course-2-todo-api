//const MongoClient = require('mongodb').MongoClient;
//Destructured call below. MongoClient is pulled from Mongodb like above
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

//deleteMany
// db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });


//deleteOne
 // db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((result)=>{
 //   console.log(result.result);
 // });




// //findOneAndDelete
// db.collection('ToDos').findOneAndDelete({completed: false}).then((result)=>{
//   console.log(result);
// });

// db.collection('Users').findOneAndDelete({completed: false}).then((result)=>{
//   console.log(result);
// });

db.collection('Users').deleteMany({name: 'Alex Cittadini'}).then((result)=>{
  console.log(result.result);
});

  //  db.close();
});
