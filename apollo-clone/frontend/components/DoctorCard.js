const DoctorCard = ({ doctor }) => (
  <div style={{
   border: '1px solid #ddd',
   borderRadius: '8px',
   margin: '1.5rem auto',
   padding: '1.5rem',
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
   fontFamily: 'sans-serif',
   backgroundColor: '#fff',
   width: '60%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   position: 'relative',
  }}>
   <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginRight: '1rem' }}>
    <h3 style={{
     color: '#333',
     marginBottom: '0.5rem',
     fontSize: '1.3rem',
     fontWeight: 'bold' // Made doctor's name bold
    }}>{doctor.name}</h3>
    <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '1rem', fontWeight: 'bold' }}>
     <strong style={{ color: '#555' }}>Specialty:</strong> <span style={{ fontWeight: 'normal' }}>{doctor.specialty}</span> {/* Bold "Specialty" label */}
    </p>
    <p style={{ margin: '0.2rem 0', color: 'blue', fontSize: '0.95rem', fontWeight: 'bold' }}>
     <strong style={{ color: '#777' }}>Location:</strong> <span style={{ fontWeight: 'normal' }}>{doctor.location}</span> {/* Bold "Location" label */}
    </p>
    <p style={{ margin: '0.2rem 0', color: 'blue', fontWeight: 'bold', fontSize: '1rem' }}>
     {doctor.experience} years experience {/* Added "Experience" word */}
    </p>
    {doctor.rating && (
     <div style={{ marginTop: '0.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}> {/* Made Rating bold */}
      <span style={{
       color: '#ffc107',
       fontSize: '1.1rem',
       marginRight: '0.5rem',
       fontWeight: 'bold'
      }}>
       {doctor.rating}%
      </span>
      <span style={{ color: '#777', fontSize: '0.9rem', fontWeight: 'bold' }}>Rating</span>
     </div>
    )}
   </div>
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <span style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#28a745', marginBottom: '1rem' }}>₹{doctor.consultationFee}</span>
    <button style={{
     backgroundColor: '#007bff',
     color: 'white',
     border: 'none',
     borderRadius: '8px',
     padding: '1rem 1.8rem',
     cursor: 'pointer',
     fontSize: '1.1rem',
     fontWeight: 'bold',
     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
    }}>Consult Online</button>
    {doctor.cashback && <p style={{ marginTop: '0.8rem', color: '#008000', fontSize: '0.95rem', fontWeight: 'bold' }}>Cashback: ₹{doctor.cashback}</p>} {/* Made cashback bold */}
    {doctor.consultationType && <p style={{ marginTop: '0.2rem', color: '#555', fontSize: '0.9rem', fontWeight: 'bold' }}>{doctor.consultationType}</p>} {/* Made consultation type bold */}
   </div>
   <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}> {/* Made availability and online bold */}
    {doctor.availability && <span style={{ color: '#555', fontSize: '0.9rem', marginRight: '1rem', fontWeight: 'bold' }}>{doctor.availability}</span>}
    {doctor.online && <span style={{ color: '#5cb85c', fontSize: '0.9rem', fontWeight: 'bold' }}>Online</span>}
   </div>
  </div>
 );
 
 export default DoctorCard;