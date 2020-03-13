const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    isExtended: true
}))

mongoose.connect('mongodb://localhost:27017/api')
    .then(()=>{
        console.log("db connected")
    })
    .catch((err)=>{
        console.log(err)
    })

let BOOKS = require('./models/books');
//Routes
app.get('/', (req, res)=>{
    res.send("We are on home");
});

app.get('/books', (req,res)=>{
    BOOKS.find({}, (err, book)=>{
        res.json(book);
    })
})

app.post('/AddBook', (req,res)=>{
    let newBook = new BOOKS({
        BookName: req.body.BookName,
        Author: req.body.Author,
        Price: req.body.Price,
        Genre: req.body.Genre,
        BookInfo: req.body.BookInfo
    })
    newBook.save((err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json({
                status: "Saved"
            })
        }
    });
})

app.delete("/deleteBook/:id",(req, res)=>{
    BOOKS.deleteOne({_id:req.params.id},(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.json({status:"deleted"})
        }
    })
})

app.listen(5000);