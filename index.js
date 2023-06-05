import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import {Course} from "./model/product.js";

const PORT = process.env.PORT || 3000;

const url = process.env.URL || 'mongodb://localhost:27017/study';

const app = express();

app.use(express.static('css'));

app.set('view engine', 'pug');

mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});

app.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.render('index', {courses})
    } catch (err){
        console.log(err);
    }

});
