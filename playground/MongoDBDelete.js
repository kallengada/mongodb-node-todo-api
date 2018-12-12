const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err)
        console.log('Unable to connect to MongoDb Server');

    console.log('Conencted to Mongo Db Server');

    const db = client.db('ToDoApp');

    //delete many
    db.collection('ToDos').deleteMany({text:'Eat lunch'}).then((result) => {
        console.log(result);
        
    }, (err) => {
        console.log('Unable to fetch collection', err);
    });

    //delete one
    db.collection('ToDos').deleteOne({ text: 'Eat lunch' }).then((result) => {
        console.log(result);

    }, (err) => {
        console.log('Unable to fetch collection', err);
    });

    //find and delete
    db.collection('ToDos').findOneAndDelete({ text: 'Eat lunch' }).then((result) => {
        console.log(result);

    }, (err) => {
        console.log('Unable to fetch collection', err);
        });

    client.close();
});
