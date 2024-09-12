import React, { useState } from 'react';
import { Card, Avatar, Tabs } from 'antd';

const { TabPane } = Tabs;

const PaymentMethods = () => {
  const [currentTab, setCurrentTab] = useState('1');

  const paymentMethods = {
    '1': [ 
      { id: 1, name: 'Credit Card', icon: 'https://freepngimg.com/thumb/credit_card/26058-2-credit-card-transparent-thumb.png' },
      { id: 2, name: 'Debit Card', icon: 'https://png.pngitem.com/pimgs/s/13-130438_credit-cards-icon-photo-credit-card-icon-circle.png' },
      { id: 3, name: 'Western Union', icon: 'https://cdn3.iconfinder.com/data/icons/circle-payment-methods-4/512/Western_union2-64.png' },
      { id: 4, name: 'Cryptocurrency', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORiDXyd7tPWYQUsmuCPcTSEMEeTVoZPN3wQ&s' },
      { id: 5, name: 'Google Pay', icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png' },
      { id: 6, name: 'Apple Pay', icon: 'https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Apple_Pay-64.png' },
      { id: 7, name: 'PayPal', icon: 'https://cdn4.iconfinder.com/data/icons/socialcones/508/Paypal-64.png' },
      { id: 8, name: 'Paytm', icon: 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/paytm-64.png' },
      { id: 9, name: 'eSewa', icon: 'https://esewa.com.np/common/images/esewa_logo.png' },
      { id: 10, name: 'Khalti', icon: 'https://cdn.nayathegana.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg' },
      { id: 11, name: 'Connect IPS', icon: 'https://connectips.com/images/logo_connectIPS.png' },
      { id: 12, name: 'IME pay', icon: 'https://www.imepay.com.np/assets/logo/ime-main.svg' },
      { id: 13, name: 'UPI', icon: 'https://cdn4.iconfinder.com/data/icons/cards-colored/80/card-credit-debit-bonus-apple-pay-mobile_payment-64.png' },
    ],
    '2': [ 
      { id: 13, name: 'Credit Card', icon: 'https://freepngimg.com/thumb/credit_card/26058-2-credit-card-transparent-thumb.png' },
      { id: 14, name: 'Debit Card', icon: 'https://png.pngitem.com/pimgs/s/13-130438_credit-cards-icon-photo-credit-card-icon-circle.png' },
      { id: 15, name: 'Western Union', icon: 'https://cdn3.iconfinder.com/data/icons/circle-payment-methods-4/512/Western_union2-64.png' },
      { id: 16, name: 'Cryptocurrency', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORiDXyd7tPWYQUsmuCPcTSEMEeTVoZPN3wQ&s' },
      { id: 17, name: 'Google Pay', icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png' },
      { id: 18, name: 'Apple Pay', icon: 'https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Apple_Pay-64.png' },
      { id: 19, name: 'PayPal', icon: 'https://cdn4.iconfinder.com/data/icons/socialcones/508/Paypal-64.png' },
      { id: 20, name: 'Paytm', icon: 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/paytm-64.png' },
      { id: 21, name: 'UPI', icon: 'https://cdn4.iconfinder.com/data/icons/cards-colored/80/card-credit-debit-bonus-apple-pay-mobile_payment-64.png' },

    ],
    '3': [ // National Payment
      { id: 22, name: 'eSewa', icon: 'https://esewa.com.np/common/images/esewa-icon-large.png' },
      { id: 23, name: 'Khalti', icon: 'https://cdn.nayathegana.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg' },
      { id: 24, name: 'Connect IPS', icon: 'https://connectips.com/images/logo_connectIPS.png' },
      { id: 25, name: 'IME pay', icon: 'https://www.imepay.com.np/assets/logo/ime-main.svg' },
    ],
  };

  const handleTabChange = (key) => {
    setCurrentTab(key);
  };

  return (
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
    <Tabs defaultActiveKey="1" onChange={handleTabChange}>
      <TabPane tab="All Payment Methods" key="1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentMethods['1'].map((method) => (
            <div key={method.id}>
              <Card className="border border-gray-300 rounded-md shadow-md p-4">
                <div className="flex items-center">
                  <Avatar src={method.icon} size={40} className="mr-4" />
                  <span className="text-lg font-medium">{method.name}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </TabPane>
      <TabPane tab="International Payment" key="2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentMethods['2'].map((method) => (
            <div key={method.id}>
              <Card className="border border-gray-300 rounded-md shadow-md p-4">
                <div className="flex items-center">
                  <Avatar src={method.icon} size={40} className="mr-4" />
                  <span className="text-lg font-medium">{method.name}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </TabPane>
      <TabPane tab="National Payment" key="3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentMethods['3'].map((method) => (
            <div key={method.id}>
              <Card className="border border-gray-300 rounded-md shadow-md p-4">
                <div className="flex items-center">
                  <Avatar src={method.icon} size={40} className="mr-4" />
                  <span className="text-lg font-medium">{method.name}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </TabPane>
    </Tabs>
  </div>
  
  );
};

export default PaymentMethods;
