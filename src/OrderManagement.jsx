import React, { useState } from 'react';

function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD001', customerName: 'Abhishek', orderDate: '2024-03-10', status: 'Delivered' },
    { id: 2, orderId: 'ORD002', customerName: 'Rutaanshu', orderDate: '2024-03-11', status: 'Shipped' },
    // Add more order entries as needed
  ]);

  const [newOrder, setNewOrder] = useState({ orderId: '', customerName: '', orderDate: '', status: '' });
  const [editOrderData, setEditOrderData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const addOrder = () => {
    if (newOrder.orderId && newOrder.customerName && newOrder.orderDate && newOrder.status) {
      setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
      setNewOrder({ orderId: '', customerName: '', orderDate: '', status: '' });
    } else {
      alert('Please fill all fields to add an order.');
    }
  };

  const editOrder = (id) => {
    const editedOrderIndex = orders.findIndex((order) => order.id === id);
    if (editedOrderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[editedOrderIndex] = editOrderData;
      setOrders(updatedOrders);
      setEditOrderData(null);
    }
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const handleEditClick = (order) => {
    setEditOrderData(order);
  };

  return (
    <div className='card' style={{ padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' , backgroundColor:'#1d2634'}}>
      <h2 style={{ marginBottom: '20px' }}>Order Management</h2>
      <div>
        <input type='text' name='orderId' value={newOrder.orderId} onChange={handleInputChange} placeholder='Order ID' style={{ marginRight: '10px' }} />
        <input type='text' name='customerName' value={newOrder.customerName} onChange={handleInputChange} placeholder='Customer Name' style={{ marginRight: '10px' }} />
        <input type='date' name='orderDate' value={newOrder.orderDate} onChange={handleInputChange} placeholder='Order Date' style={{ marginRight: '10px' }} />
        <input type='text' name='status' value={newOrder.status} onChange={handleInputChange} placeholder='Status' style={{ marginRight: '10px' }} />
        <button onClick={addOrder}>Add Order</button>
      </div>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th>ID</th>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{order.id}</td>
              <td>{editOrderData && editOrderData.id === order.id ? <input type='text' name='orderId' value={editOrderData.orderId} onChange={(e) => setEditOrderData({ ...editOrderData, orderId: e.target.value })} /> : order.orderId}</td>
              <td>{editOrderData && editOrderData.id === order.id ? <input type='text' name='customerName' value={editOrderData.customerName} onChange={(e) => setEditOrderData({ ...editOrderData, customerName: e.target.value })} /> : order.customerName}</td>
              <td>{editOrderData && editOrderData.id === order.id ? <input type='date' name='orderDate' value={editOrderData.orderDate} onChange={(e) => setEditOrderData({ ...editOrderData, orderDate: e.target.value })} /> : order.orderDate}</td>
              <td>{editOrderData && editOrderData.id === order.id ? <input type='text' name='status' value={editOrderData.status} onChange={(e) => setEditOrderData({ ...editOrderData, status: e.target.value })} /> : order.status}</td>
              <td>
                {editOrderData && editOrderData.id === order.id ? (
                  <button style={{ marginRight: '5px' }} onClick={() => editOrder(order.id)}>Save</button>
                ) : (
                  <button style={{ marginRight: '5px' }} onClick={() => handleEditClick(order)}>Edit</button>
                )}
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;
