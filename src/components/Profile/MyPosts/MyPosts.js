import React ,{Component} from 'react';
import Post   from './Posts/Post.js'

const  MyPosts = ()=> {

    
    return <div>
    My post 
    <div>

      <textarea></textarea>
      <button>Add post</button>
  
  </div>
  
    <Post message="hi,my name Denis"    likesCount="0"/>
    <Post  message="hi,my name Vasy" likesCount="23" />
    <Post message="эй нигер"   likesCount="15000"/>
    <Post  message="аахзхахз  орешь :)))"  likesCount="0"/>
   

  </div>

    


}


export  default MyPosts;