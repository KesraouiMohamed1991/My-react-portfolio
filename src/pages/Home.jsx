import Hero from '../pages/Hero';
import About from '../pages/About';
import Works from '../pages/Works';

const Home = () => {
  return (
    <div className='relative'>
      <Hero />
      <About />
      <Works />
    </div>
  );
};

export default Home;
