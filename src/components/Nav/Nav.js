import React ,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import classes from   './Nav.module.css';
console.log('classes');
const  Nav = ()=> 
{
    return    <nav className={classes.nav} >

    <div className={classes.item}>
     
       <NavLink to="/Profile" activeClassName={classes.activeLink}> Profile</NavLink>
      
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/Dialogs" activeClassName={classes.activeLink}>
        Messages
      </NavLink>
    </div>
    <div className={classes.item}>
      <a>
        News
      </a>
    </div>
    <div className={classes.item}>
      <a>
        Music
      </a>
    </div>
    <div className={classes.item}>
      <a>
        Settings
      </a>
    </div>
</nav>

    


}


export  default Nav;