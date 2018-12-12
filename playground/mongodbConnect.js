const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err)
        console.log('Unable to connect to MongoDb Server');

    console.log('Conencted to Mongo Db Server');

    const db = client.db('ToDoApp');

    //db.collection('ToDos').insertOne({
    //    text: 'Soemthing to Do',
    //    Completed: false
    //}, (err, result) => {
    //    if (err)
    //        console.log('Unbale to insert into Todo', err);

    //    console.log(JSON.stringify(result.ops, undefined, 2));
    //});

    db.collection('Users').insertOne({
        Name: 'Vijay Ganapathy',
        Age: 42,
        Location: {
            Address1: 'Street2',
            ZipCode: 20999
        }
    }, (err, result) => {
        if (err) {
            console.log('Unbale to insert into Users', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});
