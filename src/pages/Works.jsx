import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SuperTitle from '../Components/SuperTitle';
import { Link } from 'react-router-dom';
function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  const data = [
    {
      name: 'MistralTips',
      Img: './mistral.png',
      Link: 'https://example.com',
    },
    {
      name: 'SkillHub',
      Img: './mistral.png',
      Link: 'https://example.com',
    },
    {
      name: 'Fullstack dictionry',
      Img: './mistral.png',
      Link: 'https://example.com',
    },
  ];



  return (
    <div id="works" className="min-h-screen sm:py-32 mx-auto sm:w-5/6 w-screen flex flex-col items-center justify-center relative ">

      <div className="overflow-hidden sm:h-[80px] my-4  flex items-center sm:my-8">
        <motion.h1
          initial={{ opacity: 1, y: '100%' }}
          whileInView={{ opacity: 1, y: '10%' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          // viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl  mt-16  font-extrabold  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text sm:my-32 selection:bg-purple-500 selection:text-white"
        >
          Selected Works
        </motion.h1>
      </div>


        <motion.div
          ref={ref}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isInView ? '100%' : 0, opacity: isInView ? 1 : 0.7, delay: isInView? 0.3 : 0.5 }}
          transition={{ duration: 0.8, staggerChildren: 0.6, delay: isInView? 0.3 : 0.5 }}
          className='px-4  w-full     h-full gap-4 overflow-hidden grid grid-cols-1'
        >
        {data.map((e, index) => (
            
                  // eslint-disable-next-line react/jsx-key
            <Link to={`/works/${index}`}>

                   <motion.div
              key={e.name}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7*index }}
              className="after:absolute relative after:w-full after:h-[2px] after:bg-purple-500  after:bottom-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between  border-purple-500"
            >

             <SuperTitle text= {e.name} />
              <img className=' p-8 h-48' src={e.Img} alt={e.name +'image '} />
                </motion.div>
            
            </Link>
     
          ))}
        </motion.div>

      </div>
  );
}

export default Works;
