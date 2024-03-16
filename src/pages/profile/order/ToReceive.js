import React from 'react';
import { Carousel, Card, Badge } from 'antd';
import { HotProductsData } from '../../shop/utils/Items';

const ToReceive = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl mb-4">Already Received</h1>
        <Carousel autoplay className="mb-4">
          <div>
            <img src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Received Item" className="w-full h-64 object-cover" />
          </div>
          <div>
            <img src="https://graphicsfamily.com/wp-content/uploads/2020/07/chocolate-packaging-Template-Presentation-scaled.jpg" alt="Received Item" className="w-full h-64 object-cover" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Received Item" className="w-full h-64 object-cover" />
          </div>
          <div>
            <img src="https://www.plasticsurgeonsofakron.com/assets/img/products/professional-grade-sunscreen.jpg" alt="Received Item" className="w-full h-64 object-cover" />
          </div>
          <div>
            <img src="https://www.reliancedigital.in/medias/NIKON-D5600-DSLR-Camera-491297413-i-1?context=bWFzdGVyfGltYWdlc3w1OTU0MnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDVkLzkzMjQyNTgwNjY0NjIuanBnfDgyY2NiNmM3M2MyMTUwOWE0MDBkOWUxODExODhiOGQ4YjIwMGZiOTM3YTQxNTkxZmFhNzQ5N2M5MDIzMzA5ZDU" alt="Received Item" className="w-full h-64 object-cover" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3sOZFts0NVu5qiLXORptbhytkr8ZqglH0Q&s" alt="Received Item" className="w-full h-64 object-cover" />
          </div>
        </Carousel>
      </div>
      <div>
        <h2 className="text-2xl mb-4">Items to Receive Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HotProductsData.map((item) => (
            <Card
              key={item.id}
              hoverable
              cover={<img src={item.image} alt={item.name} className="w-full h-64 object-cover" />}
              className="mb-4"
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    <p className="mb-2">Price: ${item.price}</p>
                    <Badge count={item.qty} className="mb-2" />
                    <p className="text-gray-500">Estimated Delivery: {item.estimatedDelivery}</p>
                  </div>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToReceive;
