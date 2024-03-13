import React from 'react'; import { BsBuildingFillGear } from "react-icons/bs";

function OrderDisplay({ orders }) { return (

<div style={{ backgroundColor: '#007bff', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '-100px', marginRight: '10px', width: 'fit-content', maxWidth: '300px' }}> <h2 style={{ marginBottom: '10px', marginLeft: '10px', color: '#fff', fontSize: '1.5rem' }}><BsBuildingFillGear /> Order Management</h2> <ul style={{ listStyleType: 'none', padding: '0', margin: 0 }}> {orders.map(order => ( <li key={order.id} style={{ marginBottom: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '3px', backgroundColor: '#fff', width: '100%' }}>{order.orderId}</li> ))} </ul> </div> ); }
export default OrderDisplay;