

// import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
import React from "react";

function Header(){
    return(
        
        
 <nav>
    <h1>Techystar</h1>  
    <main>
<HashLink to={'/#home'}>Home</HashLink>
<HashLink  to={'/#about'}>About</HashLink>
<HashLink to={'/contact'}>Contact</HashLink>
<HashLink to={'/#brands'}>Brands</HashLink>
<HashLink to={'/services'}>Services</HashLink>

               
    </main>
</nav> 
        
    );
}

export default Header;