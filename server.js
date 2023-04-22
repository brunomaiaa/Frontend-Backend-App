import express from 'express';
import cors from 'cors';
//importing routes
import postsRoutes from './routes/postsRoutes.js';
import { StatusCodes } from 'http-status-codes';
//create app using all express functionality (we can use this for config and setting up the application)
const app = express();

//registering middleware/configuration (in this case the express.json middleware which takes the JSON body of the request and turns it into a javascript object accessible through req.body inside our controller)
app.use(express.json());
// enable cors
app.use(cors());

//use the postsRoutes router on this endpoint ('/posts')
app.use('/api/posts', postsRoutes);

//every other endpoint we try that we didn't define will go here (wildcard endpoint = could be antyhing let's go here)
app.all('*', (req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Invalid path');
});


//listening for requests. 
app.listen(4000, () => {
    console.log("The server is listening for requests on port 4000");
});

