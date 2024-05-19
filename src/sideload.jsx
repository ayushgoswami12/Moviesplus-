import { motion } from "framer-motion"
import BatmanPoster from "./assets/batman.jpg"
import XmenPoster from "./assets/x-men-97.jpg"
import AOTPoster from "./assets/attackontitan.jpg"
import Loki from "./assets/loki.jpg"
import Strangerthings from "./assets/strangerthings.jpg"
import Lastofus from "./assets/lastofus.jpg"
import JJK from "./assets/jujutsukaisen.jpg"
import Spiderman from "./assets/spiderman.jpg"
import War from "./assets/war.jpg"



function Template(prop) {
   
    return (
        <>
            <div id="main_body" className="content">

                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0.5,x:-50}}
                transition={{delay:0.1,duration:0.5}}
   
                 className="main_Div" id="main_header">
                    <img id="images" src={prop.poster}></img>
                    <div id="title">
                        <p id="name">{prop.movieName}</p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
let movielinks = {

    movie1 : "https://i.pinimg.com/originals/be/1e/f7/be1ef7f58d14e1b001e65eedbd33896d.jpg",
    movie2 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsEn5Oe4tZzzxOF91kdPUDpDqmtMIwD_tHQ&usqp=CAU",

}



function Sideload() {

    return (
        <>
            <div id="main_body">
    
                <Template
             
                    
                    poster={movielinks.movie1}
                    movieName="Download Marvel Series Loki  in 720p,1080p,480p (hindi-english)"
                    >
                    
                </Template>
                <Template
     
                    poster={Loki}
                    movieName="Download Marvel Series Loki  in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={BatmanPoster}
                    movieName="Download The Batman in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={XmenPoster}
                    movieName="Download X-Men 97 in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={AOTPoster}
                    movieName="Download Attack On Titan in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={Strangerthings}
                    movieName="Download Stranger Things in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={Lastofus}
                    movieName="Download The Last of us in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={JJK}
                    movieName="Download Jujutsu Kaisen {Season 1 - Season 2 } in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={Spiderman}
                    movieName="Download Spider-Man No Way Home in 720p,1080p,480p (hindi-english)" >
                </Template>
                <Template
     
                    poster={War}
                    movieName="Download War in 720p,1080p,480p (hindi-english)" >
                </Template>
             
        
       
 
           

            </div>
        </>
    )
}

export default Sideload
