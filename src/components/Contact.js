import React from "react";
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './Home.css';
import Navbar from "./Navbar";
import Links from "./Links";
import SquareIcon from '@mui/icons-material/Square';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    const [user,setUser] = useState({
      name:"",
      email:"",
      subject:"",
      message:""
    });
    let name,value;
    const getUserData = (event) => {
      name = event.target.name;
      value = event.target.value;
      setUser({...user,[name]:value})
    }
    const sendData = async (e) => {
      e.preventDefault(); //it will not refresh the form

      if (user.name && user.email && user.subject && user.message) {
        const res = await fetch(
          "https://sidwebsite-2ab2f-default-rtdb.firebaseio.com/messagesid.json",
          {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              name:user.name,
              email:user.email,
              subject:user.subject,
              message:user.message
            }) 
          }
          )
          if (res) {
            setUser( {
              name:"",
              email:"",
              subject:"",
              message:""
            });
            alert("Message Send !!");
          }
      }else{
        alert("Not filled !!");
      }
    };

    const form = {
      animate : {
          staggerChildren : 1.0,
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
    const form2 = {
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
              <motion.section className="form1 shadow rounded"
              initial="initial"
              animate="animate"
              variants={form}
              >
                  <motion.div className="form-head"
                  initial="initial"
                  animate="animate"
                  variants={title}
                  >
                    <h1>Get in Touch</h1>
                    <p>Let's work together</p>
                  </motion.div>
                  <div>
                    <motion.form className="form2" method="POST"
                    initial="initial"
                    animate="animate"
                    variants={form2}
                    >
                      <div className="form3">
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label">Your name</label>
                          <input onChange={getUserData} value={user.name} autoComplete="off" required name="name" type="text" class="form-control" id="formGroupExampleInput" placeholder="What's your Name ?" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label">Your email address</label>
                          <input onChange={getUserData} value={user.email} autoComplete="off" required name="email" type="email" class="form-control" id="formGroupExampleInput" placeholder="Email address" />
                        </div>
                      </div>
                      <div className="form3">
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label">Subject</label>
                          <input onChange={getUserData} value={user.subject} autoComplete="off" required name="subject" type="text" class="form-control" id="formGroupExampleInput" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="form3">
                      <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label">Message</label>
                          <input onChange={getUserData} value={user.message} autoComplete="off" required name="message" type="text" class="form-control" id="formGroupExampleInput" placeholder="What's your message ?" />
                        </div>
                      </div>
                      <div>
                        <button onClick={sendData} className="formbut"> 🗨 SEND MESSAGE</button>
                      </div>
                    </motion.form>
                  </div>
              </motion.section>
              <Links />
            </div>
          )}
        </div>
      </>
    );
};
  
export default Contact;