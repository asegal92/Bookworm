import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handlenavbar = () => setToggleMenu(!toggleMenu);    
    return (
       
                </div>
            </div>
        </nav>
    )
}

export default Navbar