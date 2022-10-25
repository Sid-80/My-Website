import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './Home.css';
import Links from "./Links";
import SquareIcon from '@mui/icons-material/Square';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Work = () => {
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
          <div className="work">
          <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-4">
                    <motion.div class="card mb-3 shadow p-3 mb-5 bg-body rounded"
                    initial="initial"
                    animate="animate"
                    variants={card}
                    >
                        <div class="row g-0 ">
                            <div class="col-md-4">
                                {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Adding soon</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    </div>
                    {/* <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div> */}
                </div>
            </div>
            
          </div>
          <Links />
          </>
        )}
      </div>
    </>
  );
}

export default Work;