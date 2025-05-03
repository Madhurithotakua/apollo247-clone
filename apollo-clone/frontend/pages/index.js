// pages/index.js (or any component where you want to add a doctor)
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import DoctorCard from '../components/DoctorCard';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchDoctors = async () => {
    const params = new URLSearchParams(filters);
    const res = await fetch(
      `http://localhost:5000/api/list-doctor-with-filter?${params.toString()}`
    );
    const data = await res.json();
    setDoctors(data.data);
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  // Function to add a doctor
  const addDoctor = async (doctorData) => {
    try {
      const res = await fetch('http://localhost:5000/api/add-doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      console.log('Doctor added:', result); // Log the response
      // Optionally, you can update the list of doctors after adding a new one
      fetchDoctors();
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  // Example usage:  You'd call this function when a form is submitted, or a button is clicked.
  const handleAddDoctor = () => {
    const newDoctor = {
      name: 'Dr. Example',
      specialization: 'Example Specialty',
      clinic: 'Example Clinic',
      location: 'Example Location',
      experience: 10,
      consultationFee: 100,
      consultationType: 'Online',
      availability: 'Available Now',
      cashback: 20,
      rating: 4.9,
      image: 'https://via.placeholder.com/150', //optional
    };
    addDoctor(newDoctor);
  };

  return (
    <>
      <Head>
        <title>General Physicians | Apollo Clone</title>
        <meta name="description" content="Find the best general physicians at Apollo." />
      </Head>
      <Header onSearch={(searchParams) => setFilters(prev => ({ ...prev, ...searchParams }))} />

      <div className="flex gap-4 p-4">
        <Filters onChange={setFilters} />
        <div className="flex-1">
          {doctors.length > 0 ? (
            doctors.map((doc, i) => <DoctorCard key={i} doctor={doc} />)
          ) : (
            <p>No doctors found.</p>
          )}
          {/* Add a button to trigger the addDoctor function (for testing) */}
          
        </div>
      </div>
    </>
  );
}

