import React, { FC, ReactNode } from "react";
import "./../../../assets/css/App.css";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const Header: FC<Props> = ({ children, ...props }) => {
  // const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" aria-current="page">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link" aria-current="page">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
