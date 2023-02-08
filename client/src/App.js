import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backEndData, setBackEndData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api');
        const data = await response.data;
        setBackEndData(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      {backEndData && backEndData.users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}

      {loading && 'Loading...'}

      {error && 'Oops, could not fetch data, please try again later!'}
    </div>
  );
}

export default App;
