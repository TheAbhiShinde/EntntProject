import React, { useState, useEffect } from 'react';

function OrderCalendarView() {
  const [calendarOrders, setCalendarOrders] = useState([
    { id: 2, orderId: 'ORD002', deliveryDate: '2024-03-11' },
    // { id: 2, orderId: 'ORD002', deliveryDate: '2024-03-18' },
    // Add more calendar order entries as needed
  ]);

  const [newCalendarOrder, setNewCalendarOrder] = useState({ orderId: '', deliveryDate: '' });
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrderId, setEditedOrderId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCalendarOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const addCalendarOrder = () => {
    if (newCalendarOrder.orderId && newCalendarOrder.deliveryDate) {
      const formattedDate = new Date(newCalendarOrder.deliveryDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      setCalendarOrders([...calendarOrders, { ...newCalendarOrder, id: calendarOrders.length + 1, deliveryDate: formattedDate }]);
      setNewCalendarOrder({ orderId: '', deliveryDate: '' });
    } else {
      alert('Please fill all fields to add a calendar order.');
    }
  };

  const deleteCalendarOrder = (id) => {
    const updatedCalendarOrders = calendarOrders.filter((order) => order.id !== id);
    setCalendarOrders(updatedCalendarOrders);
  };

  const editOrder = (id) => {
    const orderToEdit = calendarOrders.find(order => order.id === id);
    setEditingOrderId(id);
    setEditedOrderId(orderToEdit.orderId);
  };

  const saveEdit = (id) => {
    const updatedOrders = calendarOrders.map(order => {
      if (order.id === id) {
        return { ...order, orderId: editedOrderId };
      }
      return order;
    });
    setCalendarOrders(updatedOrders);
    setEditingOrderId(null);
  };

  useEffect(() => {
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = '';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const calendar = document.createElement('div');
    calendar.className = 'calendar';
    calendar.style.width = '100%';
    calendar.style.border = '1px solid #ddd';
    calendar.style.borderRadius = '2px';
    calendar.style.padding = '2px';
    calendar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    calendar.style.fontSize = '15px'; // Increased font size for better visibility
    calendar.style.backgroundColor = '#1d2634';
    
    // Create table header
    const headerRow = document.createElement('div');
    headerRow.className = 'calendar-header';
    headerRow.style.display = 'flex';
    headerRow.style.borderBottom = '1px solid #ddd';
    headerRow.style.paddingBottom = '10px';
    headerRow.style.marginBottom = '10px';
    headerRow.style.fontSize = '20px'; // Increased font size for better visibility
    const monthName = document.createElement('div');
    monthName.textContent = currentDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    monthName.style.fontWeight = 'bold';
    headerRow.appendChild(monthName);

    // Create table body
    const calendarBody = document.createElement('div');
    calendarBody.className = 'calendar-body';
    calendarBody.style.display = 'grid';
    calendarBody.style.gridTemplateColumns = 'repeat(7, minmax(80px, 1fr))'; // Increase column size
    calendarBody.style.gap = '5px';
    calendarBody.style.overflowX = 'auto'; // Add horizontal scroll for overflow

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
      const dayHeader = document.createElement('div');
      dayHeader.textContent = daysOfWeek[i];
      dayHeader.style.textAlign = 'center';
      calendarBody.appendChild(dayHeader);
    }

    let currentDateNumber = 1;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        dayCell.style.border = '1px solid #ddd';
        dayCell.style.padding = '10px';
        if ((i === 0 && j < firstDayOfMonth) || currentDateNumber > daysInMonth) {
          dayCell.textContent = '';
        } else {
          dayCell.textContent = currentDateNumber;
          const ordersForDay = calendarOrders.filter((order) => {
            const orderDate = new Date(order.deliveryDate);
            return orderDate.getDate() === currentDateNumber && orderDate.getMonth() === month && orderDate.getFullYear() === year;
          });
          if (ordersForDay.length > 0) {
            const ordersList = document.createElement('ul');
            ordersForDay.forEach((order) => {
              const orderItem = document.createElement('li');
              orderItem.textContent = order.orderId;
              const editBtn = document.createElement('button');
              editBtn.textContent = 'Edit';
              editBtn.onclick = () => editOrder(order.id);
              const deleteBtn = document.createElement('button');
              deleteBtn.textContent = 'Delete';
              deleteBtn.onclick = () => deleteCalendarOrder(order.id);
              const btnsContainer = document.createElement('div');
              btnsContainer.className = 'btns-container'; // Added class for styling
              btnsContainer.appendChild(editBtn);
              btnsContainer.appendChild(deleteBtn);
              const listItem = document.createElement('li');
              listItem.appendChild(orderItem);
              listItem.appendChild(btnsContainer);
              ordersList.appendChild(listItem);
            });
            dayCell.appendChild(ordersList);
          }
          currentDateNumber++;
        }
        calendarBody.appendChild(dayCell);
      }
    }

    calendar.appendChild(headerRow);
    calendar.appendChild(calendarBody);
    calendarContainer.appendChild(calendar);
  }, [calendarOrders, editingOrderId]);

  return (
    <div className='card' style={{ padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' ,color:'#fff', backgroundColor: '#1d2634'}}>
      <h2 style={{ marginBottom: '2px' }}>Orders Calendar View</h2>
      <div style={{ marginBottom: '2px' }}>
        <input type='text' name='orderId' value={newCalendarOrder.orderId} onChange={handleInputChange} placeholder='Order ID' style={{ marginRight: '10px' }} />
        <input type='date' name='deliveryDate' value={newCalendarOrder.deliveryDate} onChange={handleInputChange} style={{ marginRight: '10px' }} />
        <button onClick={addCalendarOrder}>Add Calendar Order</button>
      </div>
      <div id="calendar-container"></div>
    </div>
  );
}

export default OrderCalendarView;
