/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react"
import { Link } from "react-scroll";
import { Link as RoutLink } from "react-router-dom";


function Header() {

const [Show, setShow] = useState(false)
  
function  handlemenu(){
  setShow(!Show)
}


  return (
    <div className="relative ">
    
      <div className="h-24 cursor-pointer   mx-auto sm:w-5/6 w-screen fixed  flex gap-10 items-center  z-10 backdrop-blur-lg   justify-between inset-0 ">



      <div>

      <p className="m-4 relative group">
      <RoutLink className="text-white " to={'/'} >    Kesraoui Mohamed</RoutLink>
      <span className="absolute left-0 -bottom-2 w-full h-1 bg-purple-600 -z-10 group-hover:h-full group-hover:transition-all"></span>

      </p>



      </div>

      <div className=" hidden sm:flex gap-10 ">


  <p className="relative group ">
  <Link className="text-white font-mono " activeClass="active" smooth spy  to='home'>Home</Link>
  <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
  <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
</p>

<p className="relative group group-link">
  <Link className="text-white font-mono " activeClass="active " smooth spy to='About' >About</Link>
  <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
  <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
</p>

<p className="relative group group-link">
  <Link className="text-white font-mono " activeClass="active" smooth spy to='works'>Works</Link>
  <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
  <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
</p>


          <p className="relative group group-link">
  <Link className="text-white font-mono " activeClass="active" smooth spy to='footer'>Contact</Link>
  <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
  <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-purple-600 group-hover:duration-750 group-hover:w-1/2 group-hover:transition-all"></span>
</p>




      </div>

      <div className="block sm:hidden m-4 z-30  " onClick={handlemenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
        className="w-6 h-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
      </div>




      </div>

       
      <div className={`${Show ? 'flex' : 'hidden'} h-screen    flex flex-col gap-20  w-screen fixed justify-center bg-black z-30  items-center p-4`}>
  
            <div className="absolute top-5 right-0 m-4 z-30  " onClick={handlemenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        


            <p className=" relative group" >
            <Link className="text-white font-mono text-3xl"  smooth spy  to='home' onClick={handlemenu}>Home</Link>

            </p>

            <p className=" relative group" >
            <Link  className="text-white font-mono text-3xl" smooth spy   to='works' onClick={handlemenu}>Works</Link>

            </p>

            <p className=" relative group">
            <Link  className="text-white font-mono text-3xl" activeClass="active"  smooth spy  to='About'  onClick={handlemenu}>About</Link>

            </p>

            <p className=" relative group" >
            <Link  className="text-white font-mono text-3xl"  smooth spy  to='footer' onClick={handlemenu}>Contact</Link>

        </p>
        

        <div className="w-full h-24 bg-lime-200">
          logo
        </div>

      </div>
    
    
    </div>
    
  )
}

export default Header

