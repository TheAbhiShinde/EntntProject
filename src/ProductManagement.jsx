import React, { useState } from 'react';

function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Icerberg', category: 'perfume', price: 500, stockQuantity: 200 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30, stockQuantity: 75 },
    // Add more product entries as needed
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 'price', stockQuantity: 'stockQuantity' });
  const [editProductData, setEditProductData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stockQuantity) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });
    } else {
      alert('Please fill all fields to add a product.');
    }
  };

  const editProduct = (id) => {
    const editedProductIndex = products.findIndex((product) => product.id === id);
    if (editedProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[editedProductIndex] = editProductData;
      setProducts(updatedProducts);
      setEditProductData(null);
    }
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEditClick = (product) => {
    setEditProductData(product);
  };

  return (
    <div className='card' style={{ padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' ,backgroundColor:'#1d2634'}}>
      <h2 style={{ marginBottom: '20px' }}>Product Management</h2>
      <div>
        <input type='text' name='name' value={newProduct.name} onChange={handleInputChange} placeholder='Product Name' style={{ marginRight: '10px' }} />
        <input type='text' name='category' value={newProduct.category} onChange={handleInputChange} placeholder='Category' style={{ marginRight: '10px' }} />
        <input type='number' name='price' value={newProduct.price} onChange={handleInputChange} placeholder='Price' style={{ marginRight: '10px' }} />
        <input type='number' name='stockQuantity' value={newProduct.stockQuantity} onChange={handleInputChange} placeholder='Stock Quantity' style={{ marginLeft: 'auto' }} />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{product.id}</td>
              <td>{editProductData && editProductData.id === product.id ? <input type='text' name='name' value={editProductData.name} onChange={(e) => setEditProductData({ ...editProductData, name: e.target.value })} /> : product.name}</td>
              <td>{editProductData && editProductData.id === product.id ? <input type='text' name='category' value={editProductData.category} onChange={(e) => setEditProductData({ ...editProductData, category: e.target.value })} /> : product.category}</td>
              <td>{editProductData && editProductData.id === product.id ? <input type='number' name='price' value={editProductData.price} onChange={(e) => setEditProductData({ ...editProductData, price: e.target.value })} /> : product.price}</td>
              <td>{editProductData && editProductData.id === product.id ? <input type='number' name='stockQuantity' value={editProductData.stockQuantity} onChange={(e) => setEditProductData({ ...editProductData, stockQuantity: e.target.value })} /> : product.stockQuantity}</td>
              <td>
                {editProductData && editProductData.id === product.id ? (
                  <button style={{ marginRight: '5px' }} onClick={() => editProduct(product.id)}>Save</button>
                ) : (
                  <button style={{ marginRight: '5px' }} onClick={() => handleEditClick(product)}>Edit</button>
                )}
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
