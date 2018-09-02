// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://admin:fuck2you@ds141872.mlab.com:41872/todoapp',
    (err, client) => {
        if (err) {
          return   console.log('Unable to connect ot MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('todoapp');

        // db.collection('Todos').deleteMany({text: 'Go away'}).then((result) => {
        //     console.log(result);
        // });

        // db.collection('Todos').deleteOne({text: 'fuck bees'}).then((result) => {
        //     console.log(result.result);
        // });

        // db.collection('Todos').findOneAndDelete({text: 'fuck bees'}).then((result) => {
        //     console.log(result);
        // });
        
        db.collection('Users').findOneAndDelete( {
            _id: new ObjectID("5b8c51f158b44f76f82f10fe")
        }).then((result) => {
            console.log(result.value);
        });
        // client.close();
    });