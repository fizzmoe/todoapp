// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://admin:fuck2you@ds141872.mlab.com:41872/todoapp',
    (err, client) => {
        if (err) {
          return   console.log('Unable to connect ot MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('todoapp');

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID("5b8c44dd58b44f76f82e3e1e")
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }, {
        //     returnOriginal: false
        // }).then((result) => {
        //     console.log(result);
        // });

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID("5b8c510558b44f76f82f04b6")
        }, {
            $set: {
                name: 'NewMike'
            }, 
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log('fuckin updated');
        });

        // client.close();
    });