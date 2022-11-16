import React from 'react'
import { useState, useEffect } from 'react'

export default function FetchApi() {

    const [post, setPost]= useState([]);

    const getPost = async()=>{
        try{
            const result = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await result.json();
            return data
        }
        catch (error){
            console.error(error)
        }
    }

    //useeeffect
    useEffect(()=>{
        getPost()
        .then((res)=>{setPost(res)})
        .catch((err)=>{console.error(err)})
    }, [])
  return (
    <div>
       <h1>Fetch Api</h1>
       {post.map((e)=>(
            <div key={e.id}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
            </div>
       ))} 
    </div>
  )
}
