const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MovieDB");

const Movie = mongoose.model("Movie", {
    name: {
      type: String,
      required: [true, "No name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    }
});


const movie = new Movie({
  name: "Shutter Island",
  rating: 10
});

const truman = new Movie({
  name: "Truman Show",
  rating: 10
});

movie.save().then(() => console.log("The movie was recorded."))

const seven = new Movie({
  name: "Se7en",
  rating: 10
});

const mind = new Movie({
  name:"A Beautiful Mind",
  rating: 10
});

const girl = new Movie({
  name: "Gone Girl",
  rating: 10
});

const parazit = new Movie({
  name: "Parasite",
  rating: 10
});

const prestige = new Movie({
  name: "The Prestige",
  rating: 10
});

const prisoners = new Movie({
  name: "Prisoners",
  rating: 10
});

const night = new Movie({
  name: "Nightcrawler",
  rating: 10
});

const code = new Movie({
  name: "Source Code",
  rating: 10
});

const budapest = new Movie({
  name: "The grand Budapest hotel",
  rating: 10
});

const paradoks = new Movie({
  name: "Predestination",
  rating:10
});

const fall = new Movie({
  name: "Before I Fall",
  rating: 10
});

const contratiempo = new Movie({
  name: "Contratiempo",
  rating: 10
});

const dios = new Movie({
  name: "Los renglones torcidos de Dios",
  rating: 10
});

const ready = new Movie({
  name: "Ready or Not",
  rating: 10
});

const butterfly = new Movie({
  name: "The butterfly effect",
  rating: 10
});

const labirent = new Movie({
  name: "The maze runner",
  rating: 10
});

const fractured = new Movie({
  name: "Fractured",
  rating: 10
});

const room = new Movie({
  name: "The Escape Room",
  rating: 10
});

Movie.insertMany([truman, seven, mind, girl, parazit, prestige, prisoners, night, code, budapest, 
  paradoks, fall, contratiempo, dios, ready, butterfly, labirent, fractured, room]).then(function(){
  console.log("Başarıyla kaydedildi.");
}) .catch(function(err) {
  console.log(err);
}); 

/*
const movie = new Movie({
  rating: 4,
});
//İsmi zorunlu kullandığımız için adı yazmazsak kaydetmez ve kod hata verir.
name: ValidatorError: Path `name` is required.
_message: 'Movie validation failed'
 */

/*
const movie = new Movie({
    name: "Shutter Island",
    rating: 11,
});

//Eğer kaydedilen max veya min sayıdan daha azını veye daha fazlasını yazarsan bu hata ile karşılaşırsın.
errors: {
    rating: ValidatorError: Path `rating` (11) is more than maximum allowed value (10).
  _message: 'Movie validation failed'
}
*/



const findDocuments = function(db, callback) {
    const collection = db.collection('movie');
    collection.find({}).toArray(function(err, movie) {
        assert.equal(err, null); 
        console.log("Found the following records"); 
        console.log(movie); 
        callback(movie);
    });
}; 

/* 
Yenilemek istediğim film varsa filmin id'sini yazmam ve neleri değistireceğimi belirtmem yeterli.
Movie.updateOne({ _id: "film_id"}, {name: "The Platform"}).then(function(){
  console.log("Güncelleme başarılı.");
}) .catch(function(err) {
  console.log(err);
});
*/

/*
Silmek istediğim bir alan varsa bunu yazmam yeterli:
id'sini adını veya reytingini yazarak silme yapabiliriz.
!!!!reytingi aynı olanların hepsini siler.
Movie.deleteOne({ _id: "film_id"}).then(function(){
  console.log("Güncelleme başarılı.");
}) .catch(function(err) {
  console.log(err);
});
*/