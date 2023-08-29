// tekrar tekrar buradan kaydedip başlatmak yerine terminale rs yazarsan tekrar yenilenir.
import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import mongoose from "mongoose";

/* NodeJS'de, request(), ayrı dosyalarda bulunan harici modülleri dahil etmek için yerleşik bir işlevdir. request() 
ifadesi temel olarak bir JavaScript dosyasını okur, onu yürütür ve ardından dışa aktarma nesnesini döndürmeye devam eder. */
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
var posts = [];

mongoose.connect("mongodb://127.0.0.1:27017/DailyJournalDB");

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Post = mongoose.model("Post", PostSchema);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req,res) => {
    Post.find().then(function(foundpost){
        res.render("index.ejs", {home: homeStartingContent, posts: foundpost})
    }) .catch(function(err) {
        console.log(err)
    });
    
});

app.get("/about", (req,res) => {
    res.render("about.ejs", {about: aboutContent})
});

app.get("/contact", (req,res) => {
    res.render("contact.ejs", {contact: contactContent})
});

app.get("/compose", (req,res) => {
    res.render("compose.ejs")
});

app.post("/compose", (req,res) => {
    var name = new Post({
    title: req.body.titlename,
    content: req.body.postname
    })

    posts.push(name);
    Post.insertMany(posts).then(function(){
        name.save().then(()=> console.log("Kaydedildi.")); 
        // yazılanları kayıt altına alır bu sayede her yeniden başlatıldığında önceki yazılanlar silinmez
    }) .catch (function(err){
        console.log(err);
    });
    

    res.redirect("/")
});


app.get("/posts/:postId", (req,res) => {
    const requestedpostId = req.params.postId; //mongodb idsini alıp  o sayfaya gitmemizi sağlıyo
        Post.findOne({_id: requestedpostId}).then(function(post){             
            res.render('post', { title: post.title , content: post.content})
        }) .catch (function(err){
            console.log(err);
        })
    }
    

);
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

const findDocuments = function(db, callback) {
    const collection = db.collection('items'); 
    collection.find({}).toArray(function(err, posts) {
        assert.equal(err, null); 
        console.log("Found the following records"); 
        console.log(posts); 
        callback(posts);
    });
    };