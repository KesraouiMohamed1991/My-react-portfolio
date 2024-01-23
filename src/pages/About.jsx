import {   useRef } from "react";
import Paragraph from "../Components/Paragraph";
import {  motion } from "framer-motion";
import Blure from "../Components/blure";

function About() {
  const containerRef = useRef(null);




  const part1 =
    "Welcome! I am Kesraoui Mohamed, an enthusiastic web developer with a passion for turning ideas into tangible, accessible realities.";
  const part2 =
    "Being a self-taught learner, I embarked on my coding journey starting with HTML and CSS, gradually advancing to JavaScript and React.";
  const part3 =
    "Seeking more knowledge, I enrolled in La Capsule to delve into ExpressJS, NodeJS, and MongoDB, mastering the creation of my own REST API. The entire design of my portfolio was meticulously crafted by yours truly using Figma. Beyond my technical skills, my soft skills shine through. I am known for my creativity, autonomy, and knack for self-directed learning. I thrive on bringing innovative concepts to life and continuously seek opportunities to expand my horizons. Lets build something amazing together! ✨";

  return (
    <>
      <div
        
        id="About"
        ref={containerRef}
        className="h-[100 vh] relative  sm:h-screen mx-auto sm:w-5/6 w-screen flex flex-col items-center justify-center "
      >
      <div className="overflow-hidden sm:h-[80px] flex items-center  sm:my-8  ">
        <motion.h1
         initial={{ opacity: 1 , y:'100%'}}
          whileInView={{ opacity: 1 , y:'0%' }}
          transition={{ duration: 0.5,  delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl    md:text-7xl  mt-16  font-extrabold  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text sm:my-32 selection:bg-purple-500  selection:text-white"
        >
          About Me
        </motion.h1>
        </div>
        
        <motion.div
        initial={{ opacity: 1 , y:100}}
        whileInView={{ opacity: 1 , y:0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Paragraph paragraph={part1} />
        <Paragraph paragraph={part2} />
        <Paragraph paragraph={part3} />
        </motion.div> 


          <Blure position={'top-64 left-48'}/>


      </div>

    </>
  );
}

export default About;
