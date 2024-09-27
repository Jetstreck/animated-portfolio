import "./portofolio.scss";
import{ motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const item = [
    {
        id:1,
        title:"The Finals",
        img:"https://i.ytimg.com/vi/YnLvovS1_do/maxresdefault.jpg",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum amet, eligendi facilis natus omnis repudiandae delectus placeat explicabo libero aut, modi officia quos soluta maiores ducimus aspernatur corrupti illo!",
    },
    {
        id:2,
        title:"Valorant",
        img:"https://cdn.arstechnica.net/wp-content/uploads/2020/04/FirstLook_Smoke_VALORANT.jpg",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum amet, eligendi facilis natus omnis repudiandae delectus placeat explicabo libero aut, modi officia quos soluta maiores ducimus aspernatur corrupti illo!",
    },
    {
        id:3,
        title:"Dota 2",
        img:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg?t=1724428927",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum amet, eligendi facilis natus omnis repudiandae delectus placeat explicabo libero aut, modi officia quos soluta maiores ducimus aspernatur corrupti illo!",
    },
];

const Single = ({item}) => {  

    const ref = useRef ()

    const { scrollYProgress } = useScroll({
        target: ref, 
        // offset: ["start start", "end start"]
        });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                     <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Gameplay</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portofolio = () => {

    const ref= useRef()

    const { scrollYProgress } = useScroll({
        target: ref, 
        offset:["end end" , "start start"
        ]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portofolio">
        <div className="progress">
            <h1>Featured Gameplay</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {item.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portofolio
