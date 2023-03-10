import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <p>Page not Found!</p>
    </div>
  );
}

export default PageNotFound404;
