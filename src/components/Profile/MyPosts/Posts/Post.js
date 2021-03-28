import React ,{Component} from 'react';
import classes   from './Post.module.css'

const  Post = (props)=> {

    
    return <div>
   
  
     <div  className={classes.item}>
    <img  src="https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-99.jpg"/>
    {props.message}
     <div>
     <span>like</span> {props.likesCount}
     </div>
    
    </div>
   
   

  </div>

    


}


export  default Post;