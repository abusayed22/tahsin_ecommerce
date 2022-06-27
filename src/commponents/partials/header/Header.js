import React from "react";
import { Link } from "react-router-dom"
import logo from "../Screenshot_1.png"
import './Header.css'

function Header() {
  return <div>
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand for__catagory" to="#">
      <img width={120} src={logo} alt="logo" />
        <div className="catagory__list">
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="#">
            Home
          </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="#">
            Link
          </Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
                <form className="d-flex" role="search">
              <input
                style={{width:'100%'}}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </Link>
        </li>


        <li className="nav-item dropdown">
          {/* <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </Link> */}

          {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
          </ul> */}

        </li>
        <li className="nav-item">
          <Link to="" className="nav-link to disabled">
            <span>shop</span>
            <span>account</span>
          </Link>
        </li>
      </ul>

      {/* cilo */}
    </div>
  </div>
</nav>


  </div>;
}

export default Header;
