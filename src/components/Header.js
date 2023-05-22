

import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";


function Header(){
    return(
        
        
 <nav>
    <h2>FirstProject</h2>  
    <main>
<HashLink to={'/#home'}>Home</HashLink>
<HashLink  to={'/#about'}>About</HashLink>
<HashLink to={'/contact'}>Contact</HashLink>
<HashLink to={'/#brands'}>Brands</HashLink>
<Link to={'/services'}>Services</Link>

               
    </main>
</nav> 
        
    );
}

export default Header;