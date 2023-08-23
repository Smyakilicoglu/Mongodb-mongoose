const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/PeopleDB" ,{ useNewUrlParser: true});

const People = mongoose.model("People", {
    _id: Number,
    name: String,
    age: Number
});

const people = new People({
    _id: 1,
    name: "Kerem",
    age: 35
});
 
people.save().then(() => console.log("Kaydedildi."));

const melih = new People({
    _id: 2,
    name: "Melih",
    age: 23
});
const melis = new People(
   {
    _id: 3,
    name: "Melis",
    age: 18
} 
);
const arzu = new People(
    {
    _id: 4,
    name: "Arzu",
    age: 40
}
);
const bugra = new People(
   {
    _id: 5,
    name: "Buğra",
    age: 26
});

/*
eski yazılış şekli:
People.insertMany([melih, melis, arzu, bugra](
if(err){
    console.log(err);
  }else{
    console.log("...");
  });
*/
// insertMany böyle yazılır. Diğer türlü hata verir.
People.insertMany([melih, melis, arzu, bugra]).then(function(){
    console.log("Başarıyla kaydedildi.");
}) .catch(function(err) {
    console.log(err);
}); 

/*
adlarını tek tek terminale yazdırmak için kullanabiliriz.
People.find().then(function() {
    people.forEach(function(people) {
        console.log(people.name);
    })
}) .catch(function(err){
    console.log(err);
});
*/
// ilkini oluşturduktan sonra diğerlerini atama yapabilirsin.

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('people');
    //Find some documents 
    collection.find({}).toArray(function(err, people) {
        assert.equal(err, null); 
        console.log("Found the following records"); 
        console.log(people); 
        callback(people);
    });
}; 