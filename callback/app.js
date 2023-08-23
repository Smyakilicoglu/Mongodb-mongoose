const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CallDB");

const Call = mongoose.model("Callback", {
    name: String,
    age: Number
});

const call = new Call({
    name: "Random",
    age: 49
});

call.save();

//Terminale yazdırmak için kullanılan kod:

Call.find().then(function() {
    console.log(call);
}) .catch(function(err) {
    console.log(err);
}); 

/*
// Eski version
People.find(function(err, call){
    if (err) {
        console.log(err);
    } else {
        console.log("Çağırıldı");
    }
})
*/
const findDocuments = function(db, callback) {
    const collection = db.collection('people');
    collection.find({}).toArray(function(err, people) {
        assert.equal(err, null); 
        console.log("Found the following records"); 
        console.log(people); 
        callback(people);
    });
}; 