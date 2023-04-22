import React, {useState} from 'react'
import axios from 'axios'

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
e.preventDefault();
console.log("sending post to server")

const data = {
    title: title,
    content: content

    }
    //making post request to the crate endpoint
const res = await axios.post('http://localhost:4000/api/posts/create', data);
if (res.status === 201) {
    console.log("Post created")
   
}
    }

  return (
    <form onSubmit={e => {handleSubmit(e)}}>
    <label>Title:</label>
    <br />
    <input 
      name='title' 
      type='text'
      value={title}
      onChange={e => setTitle(e.target.value)}
    />
    <br/>
    <label>Content:</label>
    <br />
    <input 
      name='content' 
      type='text' 
      value={content}
      onChange={e => setContent(e.target.value)}
    />
    <br />
    <input 
      type='submit' 
      value='Add Post' 
    />
  </form>
  )
}
