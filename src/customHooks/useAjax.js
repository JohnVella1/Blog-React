import axios from 'axios';
import { useState, useEffect } from 'react';

const useAjax = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResource = () => {
    axios.get(url)
      .then((res) => {
        console.log('hook for url', url);
        console.log('received: ', res.data);
        setState(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(fetchResource, []);

  return [state, loading];
};

export default useAjax;