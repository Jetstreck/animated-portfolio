import {motion} from "framer-motion"

const Test = () => {

  const variant = {
    visible:{opacity:1},
    hidden:{opacity:0}
  }

  return (
    <div className="course">
      <motion.div className="box"
      variants={variants}
      initial={{ opacity:0.5, scale:1 }} 
      transition={{ duration:2 }}
      whileInView={{opacity:1, scale:2}}
      ></motion.div>
    </div>
  )
}

export default Test
