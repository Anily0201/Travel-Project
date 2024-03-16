import React from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/services/Service';
import './App.css';
import Footer from './component/footer/Footer';
import Blog from './pages/blog/Blog';
import './index.css';
import Whynepic from './pages/about1/Whynepic';
import Ourteam from './pages/about1/Ourteam';
import Awards from './pages/about1/Awards';
import Destinations from './pages/Destination/Destinations';
import NepalTour from './pages/Destination/NepalTour';
import IndiaTour from './pages/Destination/IndiaTour';
import BhutanTour from './pages/Destination/BhutanTour';
import MultipleCountry from './pages/Destination/MultipleCountry';
import Shop from './pages/shop/Shop';
import About from './pages/about1/About';
import TravelStories from './pages/blog/TravelStories';
import TravelTips from './pages/blog/TravelTips';
import YourBlog from './pages/blog/YourBlog';
import AdvDiaries from './pages/blog/AdvDiaries';
import FlightBooking from './pages/services/FlightBooking';
import TripPlanning from './pages/services/TripPlanning';
import TravelInsurance from './pages/services/TravelInsurance';
import TransServices from './pages/services/TransServices';
import TourPackages from './pages/services/TourPackages';
import HotelReservations from './pages/services/HotelReservations';
import ServiceDetail from './pages/services/ServiceDetail';
import LatestTripRv from './pages/about1/LatestTripRv';
import Career from './pages/about1/Career';
import UserDetail from './pages/shop/component2/user/UserDetail';
import SignUp from './component/auth/Signup';
import Login from './component/auth/Login';
import Profile from './pages/profile/Profile';
import PlayLayout from './pages/playwin/PlayLayout';
import BookingLayout from './pages/mybooking/BookingLayout';



const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,

      duration:   900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination/Destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about1/Whynepic" element={<Whynepic />} />
          <Route path="/about1/Ourteam" element={<Ourteam />} />
          <Route path="/about1/Awards" element={<Awards />} />
          <Route path="/about1/Career" element={<Career />} />
          <Route path="/about1/LatestTripRv" element={<LatestTripRv />} />
          <Route path="/Destination/NepalTour" element={<NepalTour />} />
          <Route path="/Destination/IndiaTour" element={<IndiaTour />} />
          <Route path="/Destination/BhutanTour" element={<BhutanTour />} />
          <Route path="/Destination/MultipleCountry" element={<MultipleCountry />} />
          <Route path="/about1/About" element={<About />} />
          <Route path="/blog/blog" element={<Blog />} />
          <Route path="/blog/TravelStories" element={<TravelStories />} />
          <Route path="/blog/TravelTips" element={<TravelTips />} />
          <Route path="/blog/YourBlog" element={<YourBlog />} />
          <Route path="/blog/AdvDiaries" element={<AdvDiaries />} />
          <Route path="/services/service" element={<Service />} />
          <Route path="/services/FlightBooking" element={<FlightBooking />} />
          <Route path="/services/TripPlanning" element={<TripPlanning />} />
          <Route path="/services/TourPackages" element={<TourPackages />} />
          <Route path="/services/TransServices" element={<TransServices />} />
          <Route path="/services/TravelInsurance" element={<TravelInsurance />} />
          <Route path="/services/HotelReservations" element={<HotelReservations />} />
          <Route path="/shop/Shop" element={<Shop />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/pages/profile/Profile" element={<Profile />} />
          <Route path="/pages/playwin/PlayLayout" element={<PlayLayout />} />
          <Route path="/pages/mybooking/BookingLayout" element={<BookingLayout />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="userdetail/:id" element={<UserDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

