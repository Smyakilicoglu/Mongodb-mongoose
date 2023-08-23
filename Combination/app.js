const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/FootDB");

const ContentSchema = new mongoose.Schema ({
    content: Array,
});

const Content = mongoose.model("Contents", ContentSchema);
const content = new Content({
    content: [
        "Sarma", "Salça", "Bulgur", "Domates"
    ]
});


content.save();

const Foot = mongoose.model("Foot", {
    name: String,
    connect: ContentSchema,
});
const foot = new Foot({
    name: "Sarma",
    content: content
});

foot.save();

const findDocuments = function(db, callback) {
    const collection = db.collection('fruits');
    collection.find({}).toArray(function(err, fruits) {
        assert.equal(err, null); 
        console.log("Found the following records"); 
        console.log(fruits); 
        callback(fruits);
    });
    }; 