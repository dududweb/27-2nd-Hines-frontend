import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async url => {
    try {
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useAxios;
