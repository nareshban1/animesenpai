import React, { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollToTop({children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const unlisten = navigate(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;