import './App.css';
import { useEffect, useState } from 'react';
import AnimatedRoute from './components/AnimatedRoute';
import {motion} from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';
import SquareIcon from '@mui/icons-material/Square';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  

  return (
    <>
    <div className='container-1'>
      {
        loading ? (
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
            <AnimatedRoute />
          </div>
        )
      }
    </div>
    </>
  );
}

export default App;
