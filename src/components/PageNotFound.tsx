import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PageNotFound = () => {
  const { home } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (home === 'home') {
      navigate('..');
    }
  });

  return <h1 className="title">Page not found</h1>;
};
