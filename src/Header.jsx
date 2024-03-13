import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import './header.css';
function Header({ OpenSidebar }) {
  const [isNoticeDropdownOpen, setIsNoticeDropdownOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNoticeClick = () => {
    setIsNoticeDropdownOpen(!isNoticeDropdownOpen);
  };

  const handleAvatarClick = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
  };

  const handleMessageClick = () => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here using the searchQuery state
    console.log('Search query:', searchQuery);
  };

  return (
    <header className='header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <form onSubmit={handleSearchSubmit}>
          <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." />
          <button type="submit"><BsSearch className='icon' style={{ cursor: 'pointer' }} /></button>
        </form>
      </div>
      <div className='header-right' style={{ display: 'flex', alignItems: 'center' }}>
        <BsFillBellFill className='icon' style={{ marginRight: '10px', color: '#fff' }} onClick={handleNoticeClick} />
        <BsFillEnvelopeFill className='icon' style={{ marginRight: '-19px', color: '#fff' }} />
        {/* Message dropdown functionality */}
        <div className="nav-item dropdown pe-3" style={{ position: 'relative', }}>
        <a className="nav-link nav-icon" href="#" onClick={handleMessageClick} style={{ color: '#fff', textDecoration: 'none' }}>
  <i className="bi bi-chat-right-dots-fill" style={{ marginRight: '5px' }}></i>
  <span>..</span>
</a>



          {isMessageDropdownOpen && (
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow message" style={{ listStyle: 'none', padding: '10px', position: 'absolute', right: '0', top: '100%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minWidth: '250px', borderRadius: '5px' }}>
              <li className="dropdown-header" style={{ marginBottom: '10px' }}>
                You have 3 new messages
                <a href="#" style={{ textDecoration: 'none' }}>
                  <span className="badge rounded-pill bg-primary p-2 ms-2" style={{ fontSize: '14px' }}>
                    View all
                  </span>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li className="message-item" style={{ marginBottom: '10px' }}>
                <a href="#" style={{ display: 'flex', textDecoration: 'none', color: '#444' }}>
                  <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" style={{ marginRight: '10px' }} />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officiacest ut..</p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li className="message-item" style={{ marginBottom: '10px' }}>
                <a href="#" style={{ display: 'flex', textDecoration: 'none', color: '#444' }}>
                  <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" style={{ marginRight: '10px' }} />
                  <div>
                    <h4>Anna Nelson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut..</p>
                    <p>6 hr. ago</p>
                  </div>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li className="message-item" style={{ marginBottom: '10px' }}>
                <a href="#" style={{ display: 'flex', textDecoration: 'none', color: '#444' }}>
                  <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" style={{ marginRight: '10px' }} />
                  <div>
                    <h4>David Muldon</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut..</p>
                    <p>8 hr. ago</p>
                  </div>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li className="dropdown-footer">
                <a href="#">Show all messages</a>
              </li>
            </ul>
          )}
        </div>
        {/* Notice dropdown functionality */}
        <div className="nav-item dropdown pe-3" style={{ position: 'relative' }}>
            
          {isNoticeDropdownOpen && (
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications" style={{ padding: '10px', position: 'absolute', right: '0', top: '100%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minWidth: '250px', borderRadius: '5px' }}>
              <li className="dropdown-header" style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '600', color: '#444' }}>
                You have 3 new notifications
                <a href="#" style={{ textDecoration: 'none' }}>
                  <span className="badge rounded-pill bg-primary ms-2" style={{ fontSize: '14px' }}>
                    View all
                  </span>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li className="notification-item" style={{ marginBottom: '10px' }}>
                <i className="bi bi-exclamation-circle text-warning me-2"></i>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>LoremIpsun</h4>
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Quae dolorem earum veritatis oditseno</p>
                  <p style={{ fontSize: '10px', color: '#777' }}>30 min. ago</p>
                </div>
              </li>
              <hr className="dropdown-divider" />
              <li className="notification-item" style={{ marginBottom: '10px' }}>
                <i className="bi bi-x-circle text-danger me-2"></i>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Atque rerum nesciunt</h4>
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Quae dolorem earum veritatis oditseno</p>
                  <p style={{ fontSize: '10px', color: '#777' }}>1 hr. ago</p>
                </div>
              </li>
              <hr className="dropdown-divider" />
              <li className="notification-item" style={{ marginBottom: '10px' }}>
                <i className="bi bi-check-circle text-success me-2"></i>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Sit rerum fuga</h4>
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Quae dolorem earum veritatis oditseno</p>
                  <p style={{ fontSize: '10px', color: '#777' }}>2 hrs. ago</p>
                </div>
              </li>
            </ul>
          )}
        </div>
        {/* Avatar dropdown functionality */}
        <div className="nav-item dropdown pe-3" style={{ position: 'relative' }}>
          <div className="nav-link nav-profile d-flex align-items-center pe-0" onClick={handleAvatarClick} style={{ cursor: 'pointer', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
            <BsPersonCircle className="rounded-circle" style={{ fontSize: '24px', marginRight: '5px',marginLeft: '16px' }} />
            <span className="d-none d-md-block dropdown-toggle ps-2" style={{ fontSize: '14px', fontWeight: '600' }}>A.Shinde</span>
          </div>

          {isAvatarDropdownOpen && (
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile" style={{ listStyle: 'none', padding: '10px', position: 'absolute', right: '0', top: '100%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minWidth: '200px', borderRadius: '5px' }}>
              <li style={{ marginBottom: '10px' }}>
                <h6 style={{ fontSize: '16px', margin: '0', fontWeight: '600', color: '#444' }}>Abhishek Shinde</h6>
                <span style={{ fontSize: '14px', color: '#777' }}>Web Developer</span>
              </li>
              {/* Avatar menu items */}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
