import React from 'react';
import logo from '../assets/logo.jpg.png';
import { Link } from 'react-router-dom';
import { TiLocationOutline } from "react-icons/ti";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import paymentImage from '../assets/payment-method.png';
import appStore from '../assets/app-store.jpg';
import googlePlay from '../assets/google-play.jpg';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footerWrapper py-10 bg-gray-200'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
        <div className='col-span-1'>
      <div className=' rounded-lg  p-6'>
        <Link to='/'><img src={logo} alt="Logo" className="h-20" /></Link>
        <p className='mt-4 text-sm text-gray-800 leading-relaxed' data-aos="fade-up" data-aos-duration="300">Welcome to ExploreNepic, your gateway to unforgettable adventures and unparalleled experiences! </p>
        <div className='mt-4' data-aos="fade-up" data-aos-duration="300">
          <p className='flex items-center text-gray-600'><TiLocationOutline className='mr-2' /> Address:KTM, Nepal</p>
          <p className='flex items-center text-gray-600'><ImHeadphones className='mr-2' /> Call Us: (+977) -9825360201  </p>
          <p className='flex items-center text-gray-600'><MdOutlineMailOutline className='mr-2' /> Email: <a href="mailto:info@explorenepic.com" className="text-blue-600">info@exploreNepic.com</a></p>
          <p className='flex items-center text-gray-600'><MdOutlineWatchLater className='mr-2' /> Hours: 10:00-18:00, Mon - Sat</p>
        </div>
      </div>
    </div>

          <div className='col-span-3' data-aos="zoom-in"
            data-aos-duration="300">
            <div className='col-md-6 '>
              <div className='flex justify-evenly grid-cols-2 pt-2 col-span-8 mt-12 '>
                <div >
                  <h3 className='text-lg font-semibold mb-2'>Company</h3>
                  <ul >
                    <li className="mb-1 relative"><Link to="#" className="text-gray-800 mb-2 hover:text-green-500 transition duration-200 ">Travel Insurance</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Cancellation Policy</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Privacy Policy</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Terms &amp; Conditions</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Refund Process</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Support Center</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Careers</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Destinations</h3>
                  <ul >
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                      Nepal
                      </Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                      India
                      </Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                      Bhutan
                      </Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                      France
                      </Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                      Spain</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                      United States
                    </Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">
                    China
                    </Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Activities</h3>
                  <ul className="footer-list">
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Trekking and Hiking</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Climbing and Expedition</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Cultural and Historical</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Nature and Wildlife</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Day Tours</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Heli Tours</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Adventure Sports</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Travel Style</h3>
                  <ul className="footer-list">
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Family Holiday</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Active Adventures</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Extreme Adventures</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">School Travel</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Multiple Country</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Luxury Tour</Link></li>
                    <li className="mb-1"><Link to="#" className="text-gray-800 hover:text-green-500 transition duration-200">Eco Friendly</Link></li>
                  </ul>
                </div>

                

              </div>
            </div>
          </div>

          <div className='col-span-1' data-aos="fade-up" data-aos-duration="300">
            <div className='box'>
              <h3 className='text-xl font-semibold mt-12 '>Install App</h3>
              <br class='hidden sm:block'/>
              <p className='mt-4 opacity-75'>From App Store or Google Play</p>
              <div className='flex items-center mt-4'>
                <Link to={''}><img src={appStore} alt="App Store"  width={150} /></Link>
                <Link to={''}><img src={googlePlay} alt="Google Play" className='mx-2' width={150} /></Link>
              </div>
              <p className='mt-4 opacity-75 '>Secured Payment Gateways</p>
              <img className=" w-32 h-8 " src={paymentImage} alt="Payment Methods"  />
            </div>
          </div>
        </div>

        <hr className='my-8 border-b-2 opacity-60 border-blue-500' />

        <div className="footerWrapper py-1 ">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="footerBoxes">
      <div className="box bg-gray-200 p-1 rounded-lg">
        <p className="text-gray-700 opacity-75">&copy; 2024, ExploreNepic- React Travel and Tour website. All rights reserved</p>
      </div>
    </div>
    
    <div className="footerBoxes">
      <div className="box bg-gray-200 p-2 rounded-lg">
        <div className="flex justify-center md:justify-between items-center">
          <div className="phNo flex items-center" data-aos="fade-up" data-aos-duration="300">
            <span className="text-green-500"><ImHeadphones /></span>
            <div className="info ml-3">
              <h3 className="text-green-700 font-semibold mb-1">0201 - 0201</h3>
              <p className="text-gray-700 mb-0">24/7 Support Center</p>
            </div>
          </div>
          <div className="phNo flex items-center" data-aos="fade-up" data-aos-duration="300">
            <span className="text-green-500"><ImHeadphones /></span>
            <div className="info ml-3">
              <h3 className="text-green-700 font-semibold mb-1">0201 - 0201</h3>
              <p className="text-gray-700 mb-0">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="col-md-3 flex justify-center" data-aos="fade-up" data-aos-duration="300">
    <div className="d-flex  ">
      <h5 className="text-lg opacity-75  mr-3">Follow Us</h5>
      <ul className=" flex space-x-3">
  <li><Link to={'https://www.facebook.com/Anil2536/'}><FaFacebook className="text-2xl text-white bg-blue-500 hover:bg-gray-800 rounded-full p-1" /></Link></li>
  <li><Link to={'https://twitter.com/'} ><FaTwitter className="text-2xl text-white bg-blue-400 hover:bg-gray-800 rounded-full p-1" /></Link></li>
  <li><Link to={'https://www.instagram.com/'} ><AiOutlineInstagram className="text-2xl text-white bg-pink-500 hover:bg-gray-800 rounded-full p-1" /></Link></li>
  <li><Link to={'https://www.youtube.com/'} ><AiOutlineYoutube className="text-2xl text-white bg-red-600 hover:bg-gray-800 rounded-full p-1" /></Link></li>
</ul>

    </div>
  </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Footer;






