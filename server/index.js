import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/recipes.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/recipes', postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://project:1s2s2p3s3p4s3d4p5s4d5p@cluster0.fkfhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server run on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
