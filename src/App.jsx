import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ProjectPage from './pages/ProjectPage';
import AnimatedCursor from "react-animated-cursor"
import Works from './pages/Works';
import About from './pages/About';
export default function App() {
  return (
    <>
<Router>
        <Header />
<AnimatedCursor
  innerSize={18}
  outerSize={18}
  color='138, 43, 226'  
  outerAlpha={0.4}
  innerScale={0.7}
  outerScale={9}
  outerStyle={{mixBlendMode: 'exclusion'}}      
  clickables={['a','label[for]','select','textarea','button','.link']}
/>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/About" element={<About />} />
          <Route path="/works/:id" element={<ProjectPage />} />

    </Routes>
<Footer/>
</Router>

    </>
  );
}
