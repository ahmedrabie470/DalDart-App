import { Link } from "react-router-dom";
import logo from "../../Assets/images/MainLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-main text-light">
      <div className="container-fluid">
        <div className=" navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/home"
              >
                <img src={logo} width={100} className="rounded-2" alt="" />
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/popular"
              >
                popular
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/new"
              >
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/hot"
              >
                Hot
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light active"
                aria-current="page"
                to="/rising"
              >
                Rising
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
