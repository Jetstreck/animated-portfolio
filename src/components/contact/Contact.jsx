import "./contact.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";

const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {

  const ref =useRef()

  const isInView = useInView(ref,{margin:"-100px"});
  return (
    <motion.div 
    ref={ref}
    className="contact" variants={variants} initial="intitial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Play Together</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Discord</h2>
            <span>Ainur#2133</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>ainur@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Steam</h2>
            <span>Kizuna Ai</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="discordSVG" 
          initial={{opacity:1}} 
          whileInView={{opacity:0}} 
          transition={{ delay:3, duration:1 }}
        >
          <svg 
          width="600px" 
          height="600px" 
          viewBox="0 0 48 48" 
          id="b" 
          xmlns="http://www.w3.org/2000/svg">
          <motion.path 
          strokeWidth={0.2}
          fill="none"
          initial={{pathLenght:0}}
          animate={isInView && {pathLenght:1}}
          transition={{duration:3}}
          class="c" d="m17.59,34.1733c-.89,1.3069-1.8944,2.6152-2.91,3.8267-7.38-.21-10.18-5-10.18-5,.1049-6.7869,1.7496-13.4614,4.81-19.52,2.6902-2.1046,5.9681-3.3207,9.38-3.48l1,2.31c1.4283-.1983,2.8681-.3018,4.31-.31,1.4484.0048,2.8948.105,4.33.3l1-2.31c3.4152.1679,6.6935,1.3947,9.38,3.51,3.0506,6.0542,4.6883,12.7214,4.79,19.5,0,0-2.8,4.79-10.18,5-1.0166-1.2213-1.9711-2.4929-2.86-3.81m6.46-2.9c-3.84,1.9454-7.5555,3.89-12.92,3.89s-9.08-1.9446-12.92-3.89"/>
          <path class="c" d="m21.197,26.23c0,1.8502-1.4998,3.35-3.35,3.35s-3.35-1.4998-3.35-3.35h6.7Z"/><path class="c" d="m33.503,26.23c0,1.8502-1.4998,3.35-3.35,3.35s-3.35-1.4998-3.35-3.35h6.7Z"/></svg>
        </motion.div>
        <motion.form 
          initial={{opacity:0}} 
          whileInView={{opacity:1}} 
          transition={{ delay:4, duration :1 }}>
            <input type="text" required placeholder="Name" />
            <input type="text" required placeholder="Email" />
            <textarea rows={8} placeholder="Message"/>
            <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
