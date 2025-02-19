// import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';
import Navbar from './components/Navbar';
// import EmblaCarousel from './components/Carousel/EmblaCarousel';
// const OPTIONS = {
//   loop:true,
//   slidesToScroll:1,
//   // align:'start'
// }
// const SLIDE_COUNT  = 15
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>

      {/* <EmblaCarousel slides ={SLIDES} options={OPTIONS}/> */}
    </div>
  );
};

export default App;