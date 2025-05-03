import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const trimmedInput = searchInput.trim();
    if (trimmedInput === '') return;

    onSearch({ name: trimmedInput, location: trimmedInput });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const navItems = [
    'Buy Medicines',
    'Find Doctors',
    'Lab Tests',
    'Circle Membership',
    'Health Records',
    'Diabetes Reversal',
    'Buy Insurance New',
  ];

  return (
    <header style={{
      backgroundColor: '#fff',
      padding: '1.5rem 3rem',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        {/* Left Corner: Apollo Logo and Location (Grouped) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '3rem' }}>
            <img
              src="https://appedus.com/wp-content/uploads/2021/04/Apollo-247-Onl-1.png"
              alt="Apollo 24|7"
              style={{ height: '60px', marginRight: '1.5rem' }} // Increased logo size
            />
            <div>
              <span style={{ fontSize: '1.1rem', color: '#757575' }}>Select Location</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#212121', fontSize: '1.3rem' }}>Select Address</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', marginLeft: '0.5rem', color: '#757575' }}>
                  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 011.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Search Bar (takes up available space) */}
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '0.7rem 1.2rem', flexGrow: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '26px', height: '26px', color: '#757575', marginRight: '1rem' }}>
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1013.5 0l-1.5 1.5a5.25 5.25 0 11-10.5 0l1.5-1.5zM2.25 13.5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zM4.5 16.5a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5H4.5zM6.75 19.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5H6.75z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search Doctors, Specialties, Conditions etc."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              padding: '0.9rem',
              border: 'none',
              backgroundColor: 'transparent',
              width: '100%',
              fontSize: '1.2rem',
              outline: 'none',
            }}
          />
        </div>
        <button onClick={handleSearch} style={{ display: 'none' }}>Search</button>

        {/* Right Corner: Container for Login and Signup */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <button
            onClick={() => { /* Dummy Login functionality */ console.log('Login clicked'); }}
            style={{
              padding: '1rem 2rem',
              border: '1px solid #007bff',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: '#007bff',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginRight: '1rem',
            }}
          >
            Login
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '26px', height: '26px', marginLeft: '0.8rem', color: '#007bff' }}>
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.75 13.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={() => { /* Dummy Signup functionality */ console.log('Signup clicked'); }}
            style={{
              padding: '1rem 2rem',
              border: '1px solid #28a745',
              borderRadius: '8px',
              backgroundColor: '#28a745',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr style={{ width: '100%', border: '1px solid #f0f0f0', marginBottom: '1rem' }} />
      <nav style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1rem' }}>
        {navItems.map((item, index) => (
          <span key={index} style={{ fontSize: '1.2rem', color: '#212121', fontWeight: 'bold' }}>{item}</span>
        ))}
      </nav>
    </header>
  );
};

export default Header;