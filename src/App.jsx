// import { useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Footer from './components/Footer.jsx';
// import Home from './pages/Home.jsx';

// function ScrollManager() {
//   const { pathname, hash } = useLocation();
//   useEffect(() => {
//     const el = hash && document.getElementById(hash.slice(1));
//     el ? el.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo(0, 0);
//   }, [pathname, hash]);
//   return null;
// }

// export default function App() {
//   return (
//     <>
//       <ScrollManager />
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* Part 2 adds: /about-us, /contact-us, /privacy-policy, /terms-and-conditions, /refund, /vendor/apply, /deliveryman/apply */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// }












import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Newsletter from './components/Newsletter.jsx';
import LegalPage from './components/LegalPage.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Join from './pages/Join.jsx';
import MobileBar from './components/MobileBar.jsx';
import NotFound from './pages/NotFound.jsx';
import { PRIVACY, TERMS, REFUND } from './data/legal.js';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1));
    el ? el.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPage doc={PRIVACY} />} />
          <Route path="/terms-and-conditions" element={<LegalPage doc={TERMS} />} />
          <Route path="/refund" element={<LegalPage doc={REFUND} />} />
          <Route path="/vendor/apply" element={<Join kind="vendor" />} />
          <Route path="/deliveryman/apply" element={<Join kind="deliveryman" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Newsletter />
      <Footer />
      <MobileBar />
    </>
  );
}