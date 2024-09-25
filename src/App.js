import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Contact from './pages/contact/Contact';
import Service from './pages/services/Service';
import './App.css';
import Footer from './component/footer/Footer';
import Blog from './pages/blog/Blog';
import './index.css';
import Whynepic from './pages/about/Whynepic';
import Ourteam from './pages/about/Ourteam';
import Awards from './pages/about/Awards';
import Destinations from './pages/Destination/Destinations';
import NepalTour from './pages/Destination/NepalTour';
import IndiaTour from './pages/Destination/IndiaTour';
import BhutanTour from './pages/Destination/BhutanTour';
import Shop from './pages/shop/Shop';
// import About from './pages/about/About';
import About from './pages/about/About'
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
import LatestTripRv from './pages/about/LatestTripRv';
import Career from './pages/about/Career';
import UserDetail from './pages/shop/component2/user/UserDetail';
import SignUp from './component/auth/Signup';
import Login from './component/auth/Login';
import Profile from './pages/profile/oderTab/Profile';
import PlayLayout from './pages/playwin/PlayLayout';
import BookingLayout from './pages/mybooking/BookingLayout';


// import BlogDashboard from './pages/BlogDashboard/BlogDashboard';
import UserProfile from './component/blogs/UserProfile/UserProfile';
import Groups from './component/blogs/Groups/Groups';
import Home from './pages/homePage/Home';
import Edashboard from './pages/admin/eCommerce/Edashboard';
import AdminDashboard from './pages/admin/adminHome/AdminDashboard';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,

      duration: 900,
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
          <Route path="/about/Whynepic" element={<Whynepic />} />
          <Route path="/about/Ourteam" element={<Ourteam />} />
          <Route path="/about/Awards" element={<Awards />} />
          <Route path="/about/Career" element={<Career />} />
          <Route path="/about/LatestTripRv" element={<LatestTripRv />} />
          <Route path="/Destination/Nepal" element={<NepalTour />} />
          <Route path="/Destination/India" element={<IndiaTour />} />
          <Route path="/Destination/Bhutan" element={<BhutanTour />} />
          <Route path="/About" element={<About />} />
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



          {/* <Route path="/" element={<BlogDashboard />} /> */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/groups" element={<Groups />} />





          {/* -------------- for Admin panel ----------------- */}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/eCommerce/Edashboard" element={<Edashboard />} />


        </Routes>

        <Footer />

      </div>
    </Router>
  );
};

export default App;

