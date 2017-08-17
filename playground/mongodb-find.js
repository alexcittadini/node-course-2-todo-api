//const MongoClient = require('mongodb').MongoClient;
//Destructured call below. MongoClient is pulled from Mongodb like above
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5995276a8cd9b4e1e269e0b1')
    // }).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos',err);
    // });

    db.collection('Todos').find().count().then((count)=>{
      console.log(`Todos count: ${count}`);

    }, (err) => {
      console.log('Unable to fetch todos',err);
    });
    db.collection('Users').find({name: 'Alex Cittadini'}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
      console.log('Unable to fetch todos',err);
    });
    db.collection('Users').find({name: 'Alex Cittadini'}).count().then((count)=>{
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch todos',err);
    });


  //  db.close();
});
