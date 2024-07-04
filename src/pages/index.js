import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Vans from "./pages/Vans/Vans"
// import VanDetail from "./pages/Vans/VanDetail"
// import Dashboard from "./pages/Host/Dashboard"
// import Income from "./pages/Host/Income"
// import Reviews from "./pages/Host/Reviews"
// import HostVans from "./pages/Host/HostVans"
// import HostVanDetail from "./pages/Host/HostVanDetail"
// import HostVanInfo from "./pages/Host/HostVanInfo"
// import HostVanPricing from "./pages/Host/HostVanPricing"
// import HostVanPhotos from "./pages/Host/HostVanPhotos"
// import Layout from "./components/Layout"
// import HostLayout from "./components/HostLayout"


import About from './About';
import Home from './Home';
import Blogs from './Blogs';
import Calendar from './Calendar';
import JoinUs from './JoinUs';
import Navbar from '../components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="joinus" element={<JoinUs />}>


            {/* <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);