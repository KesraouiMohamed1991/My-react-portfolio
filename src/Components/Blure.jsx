/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'



function Blure({position}) {

  return (
      <motion.div
            initial={{ scale:0, opacity: 0, y: 100 }}
            whileInView={{ scale:1, opacity: 1, y: 0, delay:1}}    
          className={`h-24 sm:w-48 rounded-full blur-3xl z-30     animate-spin-reverse-slow bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 absolute ${position} `}>
          


          <div className='w-24 h-48 animate-pulse bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900  absolute ' >
              
          </div>
    </motion.div>
  )
}

export default Blure





