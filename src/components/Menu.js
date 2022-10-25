import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {motion} from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import TaskIcon from '@mui/icons-material/Task';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';

const Navbar = () => {

    const contents = {
        animate : {
            staggerChildren : 0.1,
            delayChildren : 2.8
        }
    };
    const title = {
        initial: { y: -20, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 2,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
    };
    const but = {
        initial: { y: -20, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 2.5,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
    };


    return(
        <>
        <motion.div 
        className="menu"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        >
            <motion.div 
            className="nav1"
            initial="initial"
            animate="animate"
            variants={contents}
            > 
                <motion.div variants={title}>
                    <NavLink className='nav' to={'/'}><div className="nav_head">
                        <span className="heading">Siddharth</span><p>Web Developer</p></div>
                    </NavLink>
                </motion.div>
                <motion.div variants={but} className="buttons">
                    <button className="shadow-lg rounded"><NavLink className='nav2' to={'/about'}><div className="menu_sty"><div>About</div><div><InfoIcon /></div></div></NavLink></button>
                    <button className="shadow-lg rounded"><NavLink className='nav2' to={'/skill'}><div className="menu_sty"><div>Skill</div><div><TaskIcon /></div></div></NavLink></button>
                    <button className="shadow-lg rounded"><NavLink className='nav2' to={'/contact'}><div className="menu_sty"><div>Contact</div><div><ContactPageIcon /></div></div></NavLink></button>
                    <button className="shadow-lg rounded"><NavLink className='nav2' to={'/work'}><div className="menu_sty"><div>Work</div><div><ChromeReaderModeIcon /></div></div></NavLink></button>
                </motion.div>
            </motion.div>
        </motion.div>
        </>
    )
}

export default Navbar;