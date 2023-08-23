const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');
/*
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow')); */

const FruitSchema = new mongoose.Schema ({
    name: String,
    reting: Number,
    review: String,
});
const Fruit = mongoose.model("Fruit", FruitSchema);
const fruit = new Fruit ({
    name: "apple",
    reting: 7,
    review: "pretty solid as a fruit."
});
fruit.save();
/*
// Bu yazım mongo'ya ait.
const insertDocuments = function(db, callback) {
    const collection = db.collection("fruits");
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit."
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        }
    ], function(err, result) {
        assert.equal(err,null);
        assert.equal(3, result.result.n);
        assert.equal(3,result.ops.lenght);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};
*/

const findDocuments = function(db, callback) {
// Get the documents collection
const collection = db.collection('fruits');
//Find some documents 
collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null); 
    console.log("Found the following records"); 
    console.log(fruits); 
    callback(fruits);
});
}; 