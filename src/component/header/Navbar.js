import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.jpg.png';
import OrderPopup from '../OrderPopup/OrderPopup';
import Order from '../../pages/shop/component2/user/Order';
import { jwtDecode } from 'jwt-decode';
import { Badge, Drawer, Image, Button, message, Menu, Dropdown } from 'antd';
import { DeleteOutlined, MinusCircleFilled, PlusCircleFilled, } from '@ant-design/icons';
import { useAppContext } from '../context/ContextApi';
import UserProfile from '../../jwt/userprofile/Userprofile';


const Navbar = () => {

  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(true);
  };

  const { appState, updateState } = useAppContext();
  const [myOrder, setMyOrder] = React.useState([]);
  // const { token, username } = Token()
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken);
      setUsername(decodedToken.UserName);
      // console.log(decodedToken )
      // console.log(username)
    }
  }, []);

  const showModal = () => {
    if (token) {
      setIsModalOpen(true);
    } else {
      message.info('You are not login , Please login to Place your Order')
    }
  };


  const handleDeleteAll = () => {
    setMyOrder([]);
    // setCartCount (0); 
    onClose();
  };


  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e);
  };
  const handelAdd = (id) => {
    console.log('hh', myOrder)
    const updateAdddata = myOrder?.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,

        }
      } else {
        return {
          ...item
        }
      }
    })
    setMyOrder(updateAdddata)
    console.log(id, 'plus')

  }
  const handleMinus = (id) => {
    const updatedData = myOrder.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: Math.max(item.qty - 1, 1),
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setMyOrder(updatedData);
  };
  const removeItem = (itemId) => {
    const updatedOrder = myOrder.filter((item) => item.id !== itemId);
    setMyOrder(updatedOrder);
    // updateState({ addtocart: updatedOrder });
  };
  const sumNetTotal = myOrder?.reduce((sum, service) => {
    console.log('sum', sum, service)
    return sum + parseFloat(service.price * service.qty);

  }, 0)
  const sumQty = myOrder?.reduce((sum, service) => {
    return sum + parseFloat(service.qty);

  }, 0)
  React.useEffect(() => {
    const updatedMyOrder = [...new Set(appState.addtocart)].map((item) => ({
      ...item,
      qty: 1,
    }));
    setMyOrder(updatedMyOrder);
  }, [appState.addtocart]);




  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => {
    setShowDrawer(true);
  };
  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const onClose = () => {
    setOpen(false);
  };



  const [isShopPage, setIsShopPage] = useState(false);


  const handleShopClick = () => {
    setIsShopPage(!isShopPage);
  };

  const handleLoginClick = () => {
    // Handle login click behavior
    navigate('/auth/Login');
  };

  const handleLogoClick = () => {
    // setIsShopPage(false);
  };


  const menuDestinations = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/Destination/Nepal">Nepal</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/Destination/Bhutan">Bhutan</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/Destination/India">India</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/Destination/Destinations">Multiple Country</Link>
      </Menu.Item>
    </Menu>
  );

  const menuAbout = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/about/Whynepic">Why ExploreNepic ?</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about/Ourteam">Our Team</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/about/Awards">Awards and Recognitions</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/about/LatestTripRv">Latest Trip Review</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/about/Career">Career</Link>
      </Menu.Item>
    </Menu>
  );

  const menuBlogs = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/blog/TravelStories">Travel Stories</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/blog/TravelTips">Travel Tips</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/blog/AdvDiaries">Adventure Diaries</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/blog/YourBlog">Your Blogs</Link>
      </Menu.Item>
    </Menu>
  );

  const menuServices = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/services/FlightBooking">Flight Booking</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/services/TripPlanning">Trip Planning</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/services/TourPackages">Tour Packages</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/services/HotelReservations">Hotel Reservations</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/services/TransServices">Transportation Services</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/services/TravelInsurance">Travel Insurance</Link>
      </Menu.Item>
    </Menu>
  );

  const DropdownMenu = ({ menu }) => (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <span className="text-white font-bold cursor-pointer">
        {menu === menuDestinations && 'Destinations'}
        {menu === menuAbout && 'About'}
        {menu === menuBlogs && 'Blogs'}
        {menu === menuServices && 'Services'}
      </span>
    </Dropdown>
  );

  return (
    <nav className="bg-gray-600 rounded-md mt-1">
      <div className="flex items-center justify-between p-2">
        <div >
          <Link to="/" onClick={handleLogoClick}>
            <img src={logo} alt="ExploreNepic Logo" className="w-20 h-10" />
          </Link>
        </div>
        <ul className="flex items-center h-full space-x-6">
          <li >
            <Link to="/Destination/Destinations" className="text-white font-bold">
              <DropdownMenu menu={menuDestinations} />
            </Link>
          </li>
          <li className="mr-2">
            <Link to="/About" className="text-white font-bold">
              <DropdownMenu menu={menuAbout} />
            </Link>
          </li>
          <li >
            <Link to="/contact" className="text-white font-bold">Contact</Link>
          </li>
          <li className="mr-2">
            <Link to="/blog/blog" className="text-white font-bold">
              <DropdownMenu menu={menuBlogs} />
            </Link>
          </li>
          <li className="mr-2">
            <Link to="/services/service" className="text-white font-bold">
              <DropdownMenu menu={menuServices} />
            </Link>
          </li>
          <li >
            <Link to="/shop/Shop" className="text-white font-bold" onClick={handleShopClick}>Shop</Link>
          </li>
        </ul>
        {isShopPage ? (
          <div className="flex items-center  gap-4  mr-2">
            <Badge showZero count={myOrder?.length}>
              <FaShoppingCart
                className="text-white text-2xl "
                onClick={openDrawer}
              />
            </Badge>
            <Drawer
              title="Shopping Cart"
              placement="right"
              onClose={closeDrawer}
              visible={showDrawer}
            >
              <Button
                type="primary"
                danger
                onClick={handleDeleteAll}
                className="absolute top-0 right-0 mt-2 mr-2"
              >
                Delete All
              </Button>
              <div className="gap-4 grid">
                {myOrder?.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-20 h-20">
                      <Image src={item.image} alt="noimage" />
                    </div>
                    <div>
                      <div>Name: {item.name}</div>
                      <div>Qty: {item.qty}</div>
                      <div>Total Price: {item.price * item.qty}</div>

                      {/* <div>Price: {item.price}</div> */}
                      <div> Brand: {item.brand}</div>
                      <div> View: {item.view}</div>
                      {/* <div> StockItem: {item.stokeItems}</div> */}
                      <div>
                        <div className="flex gap-3">
                          <button >
                            <PlusCircleFilled
                              onClick={() => handelAdd(item.id)} />
                          </button>
                          <button>
                            <MinusCircleFilled onClick={() => handleMinus(item.id)} />
                          </button>
                          <Button
                            type="primary"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => removeItem(item.id)}>

                          </Button>
                        </div>

                      </div>
                    </div>

                  </div>
                ))}
              </div>
              <div className="w-full">
                <Button type="pramiry" className="bg-[green] w-full"
                  onClick={showModal}>
                  Order Now
                </Button>
                {
                  isModalOpen && (
                    <Order isModalOpen={isModalOpen}
                      setIsModalOpen={(e) => setIsModalOpen(e)}
                      sumNetTotal={sumNetTotal}
                      sumQty={sumQty}
                      myOrder={myOrder} />
                  )
                }
              </div>
            </Drawer>
          </div>
        ) : (
          <div >
            <button
              className="bg-blue-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              onClick={handleOrderPopup}
            >
              Book Now
            </button>
            <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
          </div>

        )}
        <div className="flex items-center space-x-2">
          {token ? (
            <div className="flex items-center space-x-2 text-white font-semibold">
              <UserProfile />
              <span className='pr-2'>{username}</span>
            </div>
          ) : (
            <Link to="/auth/Login" className="text-white text-lg font-semibold pr-2">Login</Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
