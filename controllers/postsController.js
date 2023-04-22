import {StatusCodes} from 'http-status-codes';
import data from '../posts-data.js';

/**
 * Controller method to get all the posts. 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getPosts = (req, res) => {
//.json will convert our javascript object into JSON. (serialization)
return res.status(StatusCodes.OK).json(data);
}

/**
 * Controller method to create a new post
 * @param {*} req 
 * @param {*} res 
 */
export const createPost = (req, res) => {
    //Get the maximum ID from our data file 
    let maxId = Math.max.apply(Math, data.map(function(o) { return o.id; }));
    //creating a new post
    const newPost = {
        id:maxId + 1, //maxid + 1 = our new id 
        title:req.body.title,
        content:req.body.content
    }
    //adding that post to the data array. 
    data.push(newPost);

    //send the response
    return res.status(StatusCodes.CREATED).json({message:'Post created'});

}


export default {getPosts, createPost}