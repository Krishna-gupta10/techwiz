import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const searchValue = () => {
    let a = document.getElementById('search-box').value;
    props.getSearchItem(a);
  };

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TechWiz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="d-flex mx-2" role="search">
                <input
                  className="form-control me-2"
                  id="search-box"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button onClick={searchValue} className="btn btn-outline-success">
                  Search
                </button>
              </div>
            </ul>

            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle btn-sm"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Change Country
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/india-news">
                    India
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/us-news">
                    USA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/canada-news">
                    Canada
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;