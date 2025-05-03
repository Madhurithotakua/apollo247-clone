import React, { useState } from 'react';

const Filters = ({ onChange }) => {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [hospitalVisit, setHospitalVisit] = useState(false);
  const [onlineConsult, setOnlineConsult] = useState(false);
  const [experience, setExperience] = useState([]);
  const [fees, setFees] = useState([]);
  const [language, setLanguage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    onChange({
      specialty,
      location,
      modeOfConsult: { hospitalVisit, onlineConsult },
      experience,
      fees,
      language,
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (type, value) => {
    switch (type) {
      case 'experience':
        setExperience(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'fees':
        setFees(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Toggle Button */}
      <div
        onClick={toggleSidebar}
        style={{
          padding: '10px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '30px',
          height: '30px',
          marginRight: '10px',
        }}
      >
        <div style={{ width: '100%', height: '2px', backgroundColor: '#333' }}></div>
        <div style={{ width: '100%', height: '2px', backgroundColor: '#333' }}></div>
        <div style={{ width: '100%', height: '2px', backgroundColor: '#333' }}></div>
      </div>

      {/* Sidebar */}
      <div
        style={{
          padding: '1rem',
          width: isOpen ? '250px' : '0',
          overflowX: 'hidden',
          transition: '0.3s',
          borderRight: '1px solid #ddd',
        }}
      >
        {isOpen && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>Filters</h3>
              <button style={{ border: 'none', background: 'none', color: '#007bff', cursor: 'pointer' }}>Clear All</button>
            </div>

            <button style={{ width: '100%', padding: '0.8rem', backgroundColor: '#f0f0f0', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '1rem' }}>
              Show Doctors Near Me
            </button>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Mode of Consult</h4>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={hospitalVisit}
                    onChange={e => setHospitalVisit(e.target.checked)}
                  />
                  Hospital Visit
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={onlineConsult}
                    onChange={e => setOnlineConsult(e.target.checked)}
                  />
                  Online Consult
                </label>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Experience (In Years)</h4>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="0-5"
                    checked={experience.includes('0-5')}
                    onChange={e => handleCheckboxChange('experience', '0-5')}
                  />
                  0-5
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="6-10"
                    checked={experience.includes('6-10')}
                    onChange={e => handleCheckboxChange('experience', '6-10')}
                  />
                  6-10
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="11-16"
                    checked={experience.includes('11-16')}
                    onChange={e => handleCheckboxChange('experience', '11-16')}
                  />
                  11-16
                </label>
              </div>
              <div>
                <button style={{ border: 'none', background: 'none', color: '#007bff', cursor: 'pointer' }}>+1 More</button>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Fees (In Rupees)</h4>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="100-500"
                    checked={fees.includes('100-500')}
                    onChange={e => handleCheckboxChange('fees', '100-500')}
                  />
                  100-500
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="500-1000"
                    checked={fees.includes('500-1000')}
                    onChange={e => handleCheckboxChange('fees', '500-1000')}
                  />
                  500-1000
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="1000+"
                    checked={fees.includes('1000+')}
                    onChange={e => handleCheckboxChange('fees', '1000+')}
                  />
                  1000+
                </label>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Language</h4>
              <select value={language} onChange={e => setLanguage(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}>
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                {/* Add more languages as needed */}
              </select>
            </div>

            <div>
              <label>Specialty:</label>
              <input value={specialty} onChange={e => setSpecialty(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '0.5rem' }} />
            </div>
            <div>
              <label>Location:</label>
              <input value={location} onChange={e => setLocation(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '1rem' }} />
            </div>
            <button onClick={handleApply} style={{ width: '100%', padding: '0.8rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Apply Filters
            </button>
          </>
        )}
      </div>

      {/* Main content area (you can render your doctor cards here) */}
      <div style={{ flex: 1, padding: '1rem' }}>
        {/* Your main content goes here */}
        <h2>Doctors List</h2>
        <p>This is where the list of doctors will be displayed based on the applied filters.</p>
      </div>
    </div>
  );
};

export default Filters;