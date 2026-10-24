// import Hero, { CityMarquee } from '../components/Hero.jsx';
// import Apps from '../components/Apps.jsx';

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <CityMarquee />
//       <Apps />
//     </>
//   );
// }











import Hero, { CityMarquee } from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import MegaSavings from '../components/MegaSavings.jsx';
import Features from '../components/Features.jsx';
import Refer from '../components/Refer.jsx';
import Apps from '../components/Apps.jsx';
import WhyJuOne from '../components/WhyJuOne.jsx';
import Stats from '../components/Stats.jsx';
import Download from '../components/Download.jsx';
import Testimonials from '../components/Testimonials.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <CityMarquee />
      <Services />
      <MegaSavings />
      <Features />
      <Refer />
      <Apps />
      <WhyJuOne />
      <Stats />
      <Download />
      <Testimonials />
    </>
  );
}