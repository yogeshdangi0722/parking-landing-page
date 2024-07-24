import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
            <NavLink to="/" className="header-logo">

          <img
            src={logo}
            className="card-img-top"
            alt="logo"
            width={150}
            height={100}
            />
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
