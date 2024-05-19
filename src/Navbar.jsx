import Logo from './assets/logo.svg'
import "./navbar.css"
import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.div
 whileInView={{opacity:1,x:0}}
 initial={{opacity:0,x:-100}}
//  transition={{duration:0,delay:0}}


     id='navbar'>
      <motion.img
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.7,delay:0.5}}
       src={Logo}></motion.img>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:0.7,delay:0.5}}
       id='ul_li'>
        <ul id='uls'>
          <li>Home</li>
          <li>Movies</li>
          <li>Web-Series</li>
          <li>Hindi Dubbed</li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
