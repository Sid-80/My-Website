import React from "react";
import { NavLink } from "react-router-dom";
import sidgif from './SID.gif';
import ClearIcon from '@mui/icons-material/Clear';
import './Navbar.css';

const Navbar = () => {

    

    return(<>
        <nav id="navbar" class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbut" type="submit"><NavLink className='nav3' to={'/menu'}><ClearIcon sx={{fontSize : "2rem"}} /></NavLink></button>
                <div className="nav-head">
                    <div>
                        <NavLink className='nav' to={'/'}><div className="nav_head">
                            <span className="nav-head2">Siddharth</span><p>Web Developer</p></div>
                        </NavLink>
                    </div>
                    <div>
                        <img className="logo" src={sidgif} alt="img"/>
                    </div>
                </div>
            </div>
        </nav>
    </>)
};

export default Navbar;