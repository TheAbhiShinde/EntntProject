import React, { useState } from 'react';
import OrderManagement from './OrderManagement';
import ProductManagement from './ProductManagement';
import OrderCalendarView from './OrderCalendarView';
import OrderDisplay from './OrderDisplay';
import ProductDisplay from './ProductDisplay';

function Home() {
  const [orders, setOrders] = useState([]); // Initialize with empty array
  const [products, setProducts] = useState([]); // Initialize with empty array

  // Function to update orders data
  const updateOrders = (newOrders) => {
    setOrders(newOrders);
  };

  // Function to update products data
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  return (
    <main className='main-container' style={{ padding: '20px', boxSizing: 'border-box' }}>
      <div className='main-title' style={{ marginBottom: '20px' }}>
        <h3 style={{ textAlign: 'center', color: '#fff', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>DASHBOARD</h3>
      </div>

      {/* Display Orders */}
      <OrderDisplay orders={orders} />

      {/* Display Products */}
      <ProductDisplay products={products} />

      <div className='main-cards' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Add responsive design for main cards */}
        {/* Implement responsive design here */}
        <div className='card' style={{ width: '46%', paddingBottom: '1px',paddingTop: '1px',paddingLeft: '1px',paddingRight: '1px', minWidth: '300px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '5px', overflow: 'hidden', transition: 'box-shadow 0.3s' }}>
          <OrderManagement updateOrders={updateOrders} />
        </div>
        <div className='card' style={{ width: '46%', paddingBottom: '1px' ,paddingTop: '1px',paddingLeft: '1px',paddingRight: '1px', minWidth: '300px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '5px', overflow: 'hidden', transition: 'box-shadow 0.3s' }}>
          <ProductManagement updateProducts={updateProducts} />
        </div>
        <div className='card' style={{ width: '100%',paddingBottom: '2px', paddingTop: '2px',paddingLeft: '2px',paddingRight: '2px',minWidth: '300px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '5px', overflow: 'hidden', transition: 'box-shadow 0.3s' }}>
          <OrderCalendarView />
        </div>
      </div>
    </main>
  );
}

export default Home;
