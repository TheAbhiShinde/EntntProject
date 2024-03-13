import React from 'react'; import { RiListIndefinite } from "react-icons/ri";

function ProductDisplay({ products }) { return (

<div className="product-display" style={{ backgroundColor: '#007bff', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '50px', marginLeft: '70%', maxWidth: '500px' }}> <h2 style={{ marginBottom: '10px', color: '#fff' }}><RiListIndefinite /> Product Management</h2> <ul style={{ listStyleType: 'none', padding: '0' }}> {products.map(product => ( <li key={product.id} style={{ marginBottom: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '3px', backgroundColor: '#fff', width: '1%' }}>{product.name}</li> ))} </ul> <style jsx>{` @media (max-width: 600px) { div { max-width: 100%; margin-left: 0; } } `}</style> </div> ); }
export default ProductDisplay;