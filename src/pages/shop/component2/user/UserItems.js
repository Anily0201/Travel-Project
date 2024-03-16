import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/ContextApi';


const UserItems = ({ data, title }) => {
  const { appState, updateState } = useAppContext();
  const navigate = useNavigate();

  const handleClick = (item) => {
      updateState({
          ...appState, detail: item
      });
      navigate(`/UserDetail/${item.id}`)



  }

  const addToCart = (item) => {
      console.log(item , "itm" )
      updateState({...appState , addtocart :[...appState.addtocart,...[item ]]})
  }
  return (
    <div style={{ paddingLeft: "25px" }}>
      <div className="text-xl font-bold p-2">{title}</div>
      <div className="flex justify-start gap-7">
        {data?.map((item) => (
          <div key={item.id}>
            <Card hoverable style={{ width: 260 }}>
              <Card
                style={{}}
                cover={<img className="h-[200px]" alt="example" src={item.image} />}
                onClick={() => handleClick(item)}
              >
                <div className='text-lg'>{item.name}</div>
                <div>Price: {item.price}</div>
                <div>Brand: {item.brand}</div>
              </Card>
              <div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-1 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItems;



