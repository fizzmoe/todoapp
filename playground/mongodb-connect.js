const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://admin:fuck2you@ds141872.mlab.com:41872/todoapp',
    (err, client) => {
        if (err) {
          return   console.log('Unable to connect ot MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('todoapp');

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Unable to insert todo', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        db.collection('Users').insertOne({
            name: 'Mothafucka',
            age: 99,
            location: 'hell'
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert user', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });
        client.close();
    });