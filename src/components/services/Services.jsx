import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react"

const variants = {
  initial:{
    x:-500,
    y: 100,
    opacity:0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div 
      className="services" 
      variants={variants} 
      initial="initial" 
      // animate="animate"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
            PLaying Game For Fun 
            <br /> and getting more relation.
        </p>
        <hr />
      </motion.div> 
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Best</b> Team
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Playing</b> Games.
          </h1>
          <button>Come And Play</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>
            Kemplo Halo
          </h2>
          <p>
          The Player Has The Task Of Protecting The Clownfiesta 
          From Enemy Attacks Behind And Around Him
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>
            ClownFiesta
          </h2>
          <p>
          Players Who Have The Task of Killing All The Enemies
          In Front of Them For The Success Of The Mission
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>
            Billsnorth
          </h2>
          <p>
          Players Who Have The Task of Killing All The Enemies
          In Front of Them For The Success Of The Mission
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
