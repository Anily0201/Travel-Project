import { Avatar, Descriptions, Modal, Table } from 'antd'
import React from 'react'
import { Post } from "./Esewa";


const Order = ({ isModalOpen, setIsModalOpen, sumNetTotal, sumQty, myOrder }) => {
    console.log('av', myOrder)
    const [ispayment, setPayment] = React.useState(false)
    var path = "https://uat.esewa.com.np/epay/main";
    var params = {
        amt: sumNetTotal,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: sumNetTotal,
        pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
        scd: "EPAYTEST",
        su: "http://merchant.com.np/page/esewa_payment_success",
        fu: "http://merchant.com.np/page/esewa_payment_failed",
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handlePaymentMethod = (id) => {
        if (id === "1")
            setPayment(id);
    }
    console.log("alm", ispayment);




    const column = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
    ]
    const PaymentMethod = [
        {
            name: 'Cash on delivery',
            id: 1,
            icon: <Avatar className="w-16 h-16" icon={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyENsTn4eVemlBBSGo7P3dq8DZWtFp1HSSQ&usqp=CAU' />} />,
        },
        {
            name: ' Esewa ',
            id: 2,
            icon: <Avatar className="w-16 h-16" icon={<img src='https://esewa.com.np/common/images/esewa-icon-large.png' />} />,
        },
        {
            name: 'khalti',
            id: 3,
            icon: <Avatar className="w-16 h-16" icon={<img src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082018/untitled-1_110.png?NUSEVyMKG.6mmq9Jwutfm3zYrezAp4gA&itok=nwwsDR-M' />} />,
        },
        {
            name: 'IME Pay',
            id: 4,
            icon: <Avatar className="w-16 h-16" icon={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAY9HYRI0VSUkAav5OYWiLU7hEXrEIsOqef4aw48n4qA&s' />} />,
        },
        {
            name: 'Connect ips',
            id: 5,
            icon: <Avatar className="w-16 h-16" icon={<img src='https://connectips.com/images/logo_connectIPS.png' />} />,
        },


    ]



    return (
        <div>
            <div>
                <Modal title="Payment Methods"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div className='flex gap-3'>
                        {
                            PaymentMethod?.map((item) => (
                                <div key={item.id} className={`border-4  cursor-pointer 
                                ${item.id === ispayment ? 'border-red-800' : "border-current"} `}
                                    onClick={() => handlePaymentMethod(item.id)}
                                >
                                    <div>{item.icon} </div>
                                    <div> {item.name}</div>
                                </div>
                            ))}
                    </div>
                    <div>
                        <Table columns={column}
                            dataSource={myOrder}
                            pagination={false} />

                    </div>
                    <div>
                        <Descriptions title="User Info">
                            <Descriptions.Item label="Total price">{sumNetTotal}</Descriptions.Item>
                            <Descriptions.Item label="Qty">{sumQty}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </Modal>
            </div>
            {ispayment && Post(path, params)}

        </div>
    )
}

export default Order
