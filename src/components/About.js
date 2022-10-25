import React from "react";
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './Home.css';
import Navbar from "./Navbar";
import Links from "./Links";
import SquareIcon from '@mui/icons-material/Square';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const aboutHead = {
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
  const aboutFoot = {
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

  return (
    <>
      <div className="container-1">
        {loading ? (
          <motion.div 
          className='loader-background'
          initial={{width: 0}}
          animate={{width:"100%"}}
          exit={{x:window.innerWidth, transition:{duration : 0.4}}}
          >
            <div className='load-head'>
              <h1>Thinking...<TipsAndUpdatesIcon sx={{ color: "white", fontSize: 40 }} /> </h1>
              <p>Wait a bit</p>
            </div>
            <div className='flex-col'>
              <div className='flex-row'>
                <div className='cube cube1'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
                <div className='cube cube2'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
                <div className='cube cube3'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
              </div>
              <div className='flex-row'>
                <div className='cube cube4'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
                <div className='cube cube5'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
                <div className='cube cube6'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
              </div>
              <div className='flex-row'>
                <div className='cube cube7'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
                <div className='cube cube8'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
                <div className='cube cube9'><SquareIcon sx={{ color: "white", fontSize: 50 }}/></div>
              </div>
            </div>
            
          </motion.div>
        ) : (
          <>
          <div className="about">
            <Navbar />
            <section>
                <motion.div className="home_about shadow-lg rounded"
                initial="initial"
                animate="animate"
                variants={aboutHead}
                >
                    <hr />
                    <h1>Few Words About Me</h1>
                    <hr />
                    <p>
                    I am Computer Engineering student from <span className="s2">India</span>.<br /><br />
                    Web developer with a passion for web application development and equipped with
                    a diverse and promising skill-set.<br /><br />
                    Love to play basketball and explore new things.
                    </p>
                </motion.div>
                <div className="about_foot"
                initial="initial"
                animate="animate"
                variants={aboutFoot}
                >
                  <h2>Stay Hungry, Stay Foolish</h2>
                </div>
            </section>
            
          </div>
          <Links />
          </>
        )}
      </div>
    </>
  );
};

export default About;
