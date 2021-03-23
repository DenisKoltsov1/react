import React ,{Component} from 'react';
import classes   from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.js'
const  Profile = ()=> 
{
    return    <div className="content">
    <div>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/1781567/pub_5cbd802a3456ac00b393fda8_5cbd807170f6f500b0ddb979/scale_1200"/>
   </div>


    <div>
    <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic"/>
   </div>

   <MyPosts/>
   </div>

}


export  default Profile;