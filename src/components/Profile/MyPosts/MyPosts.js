import React ,{Component} from 'react';
import Post   from './Posts/Post.js'

const  MyPosts = ()=> {

    
    return <div>
    My post 
    <div>

      <textarea></textarea>
      <button>Add post</button>
  
  </div>
  
    <Post />
    <Post />
    <Post />
    <Post />
   

  </div>

    


}


export  default MyPosts;