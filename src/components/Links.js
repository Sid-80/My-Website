import React from "react";
import {motion} from 'framer-motion';
import './Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Links = () => {

  const card = {
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

  return (
    <>
      
          <div className="link">
            <motion.div
                    initial="initial"
                    animate="animate"
                    variants={card}
                    >
                    <div className="link-but">
                      <div className=" shadow-lg">
                        <a href="https://www.instagram.com/_.sid.bramhecha._/"><button>Instagram <InstagramIcon sx={{ color: "white" , fontSize: 40 }} /></button></a>
                      </div>
                      <div className=" shadow-lg">
                        <a href="https://www.linkedin.com/in/siddharth-bramhecha-524191230/" ><button>LinkedIn <LinkedInIcon sx={{ color: "white" , fontSize: 40 }} /></button></a>
                      </div>
                      <div className=" shadow-lg">
                        <a href="https://github.com/Sid-80"><button>Github <GitHubIcon sx={{ color: "white", fontSize: 40 }} /></button></a>
                      </div>
                    </div>
                    <div>
                      <p>© 2022 Siddharth Bramhecha</p>
                    </div>
            </motion.div>
          </div>
          
    </>
  );
}

export default Links;