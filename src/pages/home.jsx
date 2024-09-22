import React from 'react'; // React should be capitalized
import { useNavigate } from 'react-router-dom';
import '../pages/home.css';

const HomeRouter = () => {
  const navigate = useNavigate();

  // Corrected handlenavigation function
  const handlenavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <ul className="nav navbar-light bg-light justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handlenavigation('/all')}>
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handlenavigation('/full-stack')}>
            Full Stack Developer
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handlenavigation('/data-science')}>
            Data Science
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handlenavigation('/cyber-security')}>
            Cyber Security
          </a>
        </li>
      </ul>
    </>
  );
};

export default HomeRouter;
