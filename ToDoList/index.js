const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const _ = require("lodash"); //Bunu kullanmamızın sebebi arama çunuğunda arattığımız her kelime için bir mongodb dosyası oluşturmamak.
//Büyük harfle başlayıp devam etmesini sağlamak.
//const date = require(__dirname + "/date.js")

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/ToDoListDB")

const itemsShema = new mongoose.Schema({
    name: String,
});

const Item = mongoose.model("Item", itemsShema);

/*
const Work = mongoose.model("Work", {
    name: String,
}); */

const listSchema = {
    name: String, //dizi adı
    items: [itemsShema] // onunla ilişkili bir dizi öğesi.
}

const List = mongoose.model("List", listSchema);

const item1 = new Item({
    name: "Welcome to your Todolist!"
});

const item2 = new Item({
    name: "HELLO"
});
const item3 = new Item({
    name: "<--- You can delete it by clicking the checkbox."
});

const defaultitems = [item1,item2,item3];
//const defworkitems = [work1];

//work1.save().then(()=> console.log("başarıyla kaydedildi."));

/*

const Work = mongoose.model("Work", {
    workitem: Array,
});

const work = new Work ({
    workitems: []
});

work.save().then(()=> console.log("başarıyla kaydedildi."));

for (i=0;i<items.length;i++) {
    Item.insertMany(items[i])
}
*/
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', function(req, res){
    Item.find().then(function(founditems){
        if (founditems.length === 0) {
          Item.insertMany(defaultitems).then(function(err){
            console.log(err);
        }) .catch (
            console.log("Başarıyla kaydedildi!")
        ); 
        res.redirect("/"); 
        } else {
            res.render('list', { listTitle: "Today" , newlistItems: founditems})
        }
    }) .catch(function(err) {
        console.log(err)
    });
    /*let today = new Date()

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString("en-US", options);
    const day = date.getDate() listTitle: day */ 
})

app.post('/', function(req, res){
    const itemName = req.body.newItem;
    const listName = req.body.list // butonda list adında bir isim var.

    const item = new Item({
        name: itemName,
    }); 
    if ( listName === "Today") {
       item.save().then(()=> console.log("Kaydedildi!"));
    res.redirect("/");
    } else {
        List.findOne({name: listName}).then(function(foundlist){  //öğeyi yerine kaydeder.
            foundlist.items.push(item);
            foundlist.save().then(()=> console.log("yeni öğe"));
            res.redirect("/" + listName);
        }) .catch(function(err){
            console.log(err);
        })
    }
    

    /*
    if(req.body.list === "Work"){
    Item.insertMany(itemName).then(function() {
        newItem.push(itemName)
        res.redirect("/work")
    }) .catch (function(err) {
        console.log(err);
    }) 
    }else{
        
        newItem.push(itemName)
        res.redirect("/")
    }

    */
    console.log(req.body.list);

    /*

    items.push(item)

    console.log(items);

    res.redirect("/")*/
});

//delete

app.post("/delete", function(req,res){
    const id = req.body.checkbox;
    //const listName = req.body.listTitle;
    //if (listName === "Today") {
        Item.deleteOne({_id: id}).then(function(){
        console.log("Silme başarılı.");
      }) .catch(function(err) {
        console.log(err);
      });
    res.redirect("/"); 
    //} else {
        /*mongoose remove document from array
        <ModelName>. findOneAndUpdate(
        {conditions},
        {$pull: {field: {query}}},
        function(err, results){}
        );
        const item = listName.items;
       item.forEach(item => {
        List.deleteOne({items: item}).then(function(){
            console.log("Silme başarılı.");
        }) .catch(function(err){
            console.log(err);
        });
       });
       List.findOneAndUpdate(
        {name: listName},
        {$pull: {items: {_id: id}}}).then(function(err, foundlist) {
            if (!err) {
                res.redirect("/" + listName);
            }
        }) .catch (function(err){
            console.log(err);
        })
        */
    // DİĞER SAYFALAR İÇİN SİLME İŞLEMİ UYĞULAYAMADIM ANA SAYFAYA GERİ DÖNÜYOR. 
});

app.get("/:customlistName", function(req,res){
    // console.log(req,params.customlistName);
    const customlistName = _.capitalize(req.params.customlistName); //Büyük harfle başlamasını sağlar.

    List.findOne({name: customlistName }).then(function(foundlist){ //belge olduğu için uzunluğu kontrol edilemez.
        if (!foundlist) {
            const list = new List({
            name: customlistName,
            items: defaultitems,
            });
            list.save().then(()=> console.log("kaydedildi"))
            res.redirect("/" + customlistName);
            //res.render('list', { listTitle: list.name , newlistItems: list.items})
        } else {
            /*List.find({name: customlistName }).then(function(){
                const list = new List({
                    name: customlistName,
                    items: defaultitems,
                    });
                console.log(list);
            })*/
            res.render('list', { listTitle: foundlist.name , newlistItems: foundlist.items})
        }
    }) .catch(function(err){
        console.log(err);
    });
    

    
});


app.listen(3000, function(){
    console.log('Server started on port 3000');
}) 

const findDocuments = function(db, callback) {
    const collection = db.collection('items');
    //Find some documents 
    collection.find({}).toArray(function(err, items) {
        assert.equal(err, null); 
        console.log("Found the following records"); 
        console.log(items); 
        callback(items);
    });
    };