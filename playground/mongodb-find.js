// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://admin:fuck2you@ds141872.mlab.com:41872/todoapp',
    (err, client) => {
        if (err) {
          return   console.log('Unable to connect ot MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('todoapp');

        // db.collection('Todos').find(
        //     {
        //         _id: new ObjectID('5b8c44dd58b44f76f82e3e1e')
        //     }).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch todos', err);
        // });

        // db.collection('Todos').find().count().then((count) => {
        //     console.log(`Todos ${count}`);
        // }, (err) => {
        //     console.log('Unable to fetch todos', err);
        // });

        db.collection('Users').find(
            {
                name: 'Mothafucka'
            }
        ).toArray().then((users) => {
                console.log(JSON.stringify(users, undefined, 2));
            }, (err) => {
                console.log('Unable to fetch users');
        }); 

        // client.close();
    });