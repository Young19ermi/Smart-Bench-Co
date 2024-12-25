// import React from 'react';
// import './index.css';
// import Carousel from './Pages/product/product';
// import Pricing from './Pages/pricing/pricing';
// import Service from './Pages/features/features';
// import Transaction from './Pages/Transaction/Pay';
// import HeroSection from './Pages/header/header';
// const App = () => (
 
//     <div>
//   <HeroSection/>
//       <Carousel/>
//       <Service/>
//       <Pricing/>

      

//     </div>

// );

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Carousel from './Pages/product/product';
import Pricing from './Pages/pricing/pricing';
import Service from './Pages/features/features';
import Transaction from './Pages/Transaction/Pay';
import HeroSection from './Pages/header/header';
import Footer from './Pages/footer/footer';
const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <HeroSection />
            <Carousel />
            <Service />
            <Pricing />
            <Footer/>
           
          </div>
        }
      />
      <Route path="/Transaction" element={<Transaction />} />
      <Route path="/Features" element={<Service />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Footer" element={<Footer />} />

    </Routes>
  </Router>
);

export default App;
