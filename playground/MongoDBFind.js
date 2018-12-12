const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err)
        console.log('Unable to connect to MongoDb Server');

    console.log('Conencted to Mongo Db Server');

    const db = client.db('ToDoApp');

    db.collection('ToDos').find({Completed:true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch collection', err);
    });

    db.collection('ToDos').find({
        _id: new ObjectID('5c0ffe6907b09a2e002f1192')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch collection', err);
    });

    db.collection('ToDos').find().count().then((count) => {
        console.log('Todos count:'+count);

    }, (err) => {
        console.log('Unable to fetch collection', err);
    });
    client.close();
});
