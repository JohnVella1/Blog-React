import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useTitle() {
  const location = useLocation();
  const pageTitle = location.pathname.split('/')[1];
  useEffect(() => {
    console.log(location);
    document.title = pageTitle ? `${pageTitle} | Dev Of Thrones` : 'Dev of Thrones';
  }, [location.pathname]);
}

export default useTitle;