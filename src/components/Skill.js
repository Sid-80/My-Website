import React from "react";
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import Navbar from "./Navbar";
import './Home.css';
import Links from "./Links";
import SquareIcon from '@mui/icons-material/Square';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Skill = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    const contents = {
      animate : {
          staggerChildren : 0.1,
          delayChildren : 2.8
      }
    };
    const title2 = {
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
    const skill = {
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
            <div>
              <Navbar />
              <section>
                <motion.div 
                className="home_skills shadow-lg rounded"
                initial="initial"
                animate="animate"
                variants={contents}
                >
                    <motion.div 
                    className="skill-head" 
                    initial="initial"
                    animate="animate"
                    variants={title2}
                    >
                        <hr />
                        <h1>Skills</h1>
                        <hr />
                    </motion.div>
                    <motion.div className="skill" initial="initial" animate="animate" variants={skill}>
                        <h3>Frontend</h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </motion.div>
                    <motion.div className="skill" initial="initial" animate="animate" variants={skill}>
                        <h3>ReactJS</h3>
                        <div className="progress">
                            <div className="progress-bar p2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </motion.div>
                    <motion.div className="skill" initial="initial" animate="animate" variants={skill}>
                        <h3>NodeJS</h3>
                        <div className="progress">
                            <div className="progress-bar p3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </motion.div>
                    <motion.div className="skill" initial="initial" animate="animate" variants={skill}>
                        <h3>MongoDB/FIREBASE</h3>
                        <div className="progress">
                            <div className="progress-bar p4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </motion.div>
                    <motion.div className="skill" initial="initial" animate="animate" variants={skill}>
                        <h3>BOOTSTRAP</h3>
                        <div className="progress">
                            <div className="progress-bar p4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </motion.div>
                    <motion.div className="skill" initial="initial" animate="animate" variants={skill}>
                        <h3>ES6</h3>
                        <div className="progress">
                            <div className="progress-bar p5" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            <Links />
            </div>

          )}
        </div>
      </>
    );
};
  
export default Skill;
  