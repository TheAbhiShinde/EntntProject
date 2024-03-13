import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';import { IoMdArrowDropright } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";import { GrMenu } from "react-icons/gr";



import './sidebar.css';


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const toggleOrderDropdown = () => {
    setShowOrderDropdown(!showOrderDropdown);
  };

  const toggleCategoryDropdown = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
  };

  const toggleCustomerDropdown = () => {
    setShowCustomerDropdown(!showCustomerDropdown);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
      <div className='sidebar-brand'> <GrMenu    className='icon_header'/> <div style={{ fontSize: '24px' }}>N T N T</div> </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <div className="sidebar-product">
            <div className="sidebar-product-header" onClick={toggleProductDropdown} style={{ color: 'white' }}>
              <BsFillArchiveFill className='icon' /> Products <RiArrowDropDownFill className='icon' />
            </div>
            {showProductDropdown && (
              <div className="sidebar-product-dropdown" style={{ paddingLeft:'10%', marginTop: '5px' }}>
                <a href="#" className="sidebar-product-item"><IoMdArrowDropright />
 IceBerg</a><br/>
                <a href="#" className="sidebar-product-item"><IoMdArrowDropright />
 Product 2</a>
              </div>
            )}
          </div>
        </li>
        <li className='sidebar-list-item'>
          <div className="sidebar-order">
            <div className="sidebar-order-header" onClick={toggleOrderDropdown} style={{ color: 'white' }}>
              <BsListCheck className='icon' /> Orders <RiArrowDropDownFill className='icon' />
            </div>
            {showOrderDropdown && (
              <div className="sidebar-order-dropdown" style={{ paddingLeft:'10%', marginTop: '5px' }}>
                {/* Add order items here */}
                <a href="#" className="sidebar-order-item"><IoMdArrowDropright />
 ORD001</a><br/>
                <a href="#" className="sidebar-order-item"><IoMdArrowDropright />
 ORD002</a>
              </div>
            )}
          </div>
        </li>
        <li className='sidebar-list-item'>
          <div className="sidebar-category">
            <div className="sidebar-category-header" onClick={toggleCategoryDropdown} style={{ color: 'white' }}>
              <BsFillGrid3X3GapFill className='icon' /> Categories <RiArrowDropDownFill className='icon' />
            </div>
            {showCategoryDropdown && (
              <div className="sidebar-category-dropdown" style={{ paddingLeft:'10%', marginTop: '5px' }}>
                {/* Add category items here */}
                <a href="#" className="sidebar-category-item"><IoMdArrowDropright />
Perfume</a><br/>
                <a href="#" className="sidebar-category-item"><IoMdArrowDropright />
Category B</a>
              </div>
            )}
          </div>
        </li>
        <li className='sidebar-list-item'>
          <div className="sidebar-customer">
            <div className="sidebar-customer-header" onClick={toggleCustomerDropdown} style={{ color: 'white' }}>
              <BsPeopleFill className='icon' /> Customers <RiArrowDropDownFill className='icon' />
            </div>
            {showCustomerDropdown && (
              <div className="sidebar-customer-dropdown" style={{ paddingLeft:'10%', marginTop: '5px' }}>
                {/* Add customer items here */}
                <a href="#" className="sidebar-customer-item"><IoMdArrowDropright />
 Abhishek</a><br/>
                <a href="#" className="sidebar-customer-item"><IoMdArrowDropright />
 Rutaanshu</a>
              </div>
            )}
          </div>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
