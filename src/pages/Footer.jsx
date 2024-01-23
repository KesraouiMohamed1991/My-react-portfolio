/* eslint-disable react/prop-types */
import twitterIcon from '../assets/twitter.svg';
import linkedinIcon from '../assets/LinkedIn.svg';
import githubIcon from '../assets/Github.svg';
import instagramIcon from '../assets/Instagram.svg';
import { motion} from 'framer-motion'
import Blure from '../Components/blure';
const socialMediaLinks = [
  {
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/kesraoui-mohamed-298a6a147/',
    label: 'LinkedIn',
  },
  {
    icon: githubIcon,
    link: 'https://github.com/KesraouiMohamed1991',
    label: 'Github',
  },
  {
    icon: twitterIcon,
    link: 'https://twitter.com/KesraouiMohame1',
    label: 'Twitter',
  },
  {
    icon: instagramIcon,
    link: 'https://www.instagram.com/massiliapixx',
    label: 'Instagram',
  },
];

function SocialMediaLink({ icon, link, label, index }) {
  return (
    <motion.li
      
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, easing: 'ease', delay: 0.25*index }}
      className="text-xs flex items-center justify-center flex-col hover:text-purple-400 cursor-pointer">
      <img className="py-4" src={icon} alt={`${label} Icon`} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </motion.li>
  );
}

function Footer() {


  return (
    <div id='footer' className="h-screen relative   overflow-hidden mt-16 flex flex-col items-center justify-around  mx-auto sm:w-5/6 w-screen">

      <div className="overflow-hidden h-36 ">

            <motion.h1
            initial={{ opacity: 1 , y:'100%'}}
            whileInView={{ opacity: 1 , y:'0%' }}
            transition={{ duration: 0.5,  delay: 0.3 }}
            viewport={{ once: true }}
          className="px-4 text-3xl hover:shadow shadow-purple-500  w-full selection:bg-purple-500
              font-extrabold overflow-hidden selection:text-white text-center py-8 sm:text-5xl md:text-7xl
              
              bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text">
            Get in Touch
            </motion.h1>


          </div>
  

      <div className="w-full">
        <ul className="flex flex-row justify-center items-center  text-white sm:gap-10 gap-4 ">
          {socialMediaLinks.map((socialMedia, index) => (
            <SocialMediaLink key={socialMedia.label} index={index} {...socialMedia} />
          ))}
        </ul>
      </div>
          <Blure position={'right-44'}/>

      <p className="text-center w-full selection:bg-purple-500 selection:text-white  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text " ><a href="#">Kesraoui.dev@gmail.com</a></p>
      <p className="text-center w-full text-xs  text-white ">©{new Date().getFullYear()} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
