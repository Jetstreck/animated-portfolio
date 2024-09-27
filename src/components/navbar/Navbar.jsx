import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                intial={{ opacity:0, scale:0.5 }} 
                animate={{ opacity:1, scale:1 }} 
                transition={{ duration:0.5 }}
                >
                    Hell Divers Team
                </motion.span>
                <div className="social">
                <a href="#"><img src="/twitch.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                <a href="#"><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar