import React, { useState } from 'react'
import axios from 'axios'

export default function PostList() {
 
  const[items, setItems] = useState([]); //state that holds our list of posts

  const refreshList = async () => {
console.log("refreshing list")
const res = await axios.get('http://localhost:4000/api/posts')

console.log( "The response is", res);
setItems(res.data)

  }

  return (
    <div>
        <ul>
            {items.map(item => (<li key={item.id}>{item.title} : {item.content}</li>))}
        </ul>

        <button onClick={refreshList}>Refresh</button>
    </div>
  )
}