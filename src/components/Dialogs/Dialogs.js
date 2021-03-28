import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';



const Dialogs = () => 
{

return( 
    <div>
<div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
        <div className={classes.dialog + '' + classes.active}>
       <NavLink to="/dialogs/1"> Denis</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/2"> Vasy</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/3">Natasha</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/4"> Pter</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/5"> Gey</NavLink>
        </div>

    </div>

    
        
        
     <div className={classes.messages}>
        <div className={classes.message}>
            Hi
        </div>
        <div className={classes.message}>
            it`s  beautiful
        </div>
        <div className={classes.message}>
        wau
        </div>

    </div>
    </div>
</div>
)
}
export  default Dialogs