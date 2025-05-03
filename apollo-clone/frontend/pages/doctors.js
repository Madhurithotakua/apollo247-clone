import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import DoctorCard from '../components/DoctorCard';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDoctors = async () => {
    setLoading(true);
    setError(null);
    const params = new URLSearchParams();

    for (const key in filters) {
      const value = filters[key];
      if (Array.isArray(value)) {
        value.forEach(v => params.append(key, v));
      } else if (typeof value === 'object') {
        // Optional: handle nested object like modeOfConsult if needed
      } else if (value) {
        params.append(key, value);
      }
    }

    params.append('page', page);
    try {
      const res = await fetch(`http://localhost:5000/api/list-doctor-with-filter?${params.toString()}`);
      const data = await res.json();
      console.log('API Response:', data); // Crucial debugging log
      if (data && data.success) {
        setDoctors(data.data || []);
        setTotalPages(data.pagination?.totalPages || 1);
      } else {
        setError(data?.error || 'Failed to fetch doctors');
        setDoctors([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setError('Failed to connect to the server');
      setLoading(false);
      setDoctors([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    fetchDoctors();
  }, [filters, page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <Head>
        <title>General Physicians | Apollo Clone</title>
        <meta name="description" content="Find the best general physicians at Apollo." />
      </Head>
      <Header onSearch={(searchParams) => setFilters(prev => ({ ...prev, ...searchParams }))} />

      <div className="flex">
        <Filters onChange={setFilters} />
        <div className="doctor-list">
          {loading && <p>Loading doctors...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && doctors.map((doc, index) => (
            <DoctorCard key={index} doctor={doc} />
          ))}
          {!loading && !error && doctors.length === 0 && <p>No doctors found matching your criteria.</p>}

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                style={{ padding: '0.5rem 1rem', margin: '0 0.5rem', cursor: 'pointer' }}
              >
                Previous
              </button>
              <span>{page} / {totalPages}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                style={{ padding: '0.5rem 1rem', margin: '0 0.5rem', cursor: 'pointer' }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}   