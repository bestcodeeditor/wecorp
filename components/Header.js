import { MDBBtn } from "mdbreact";
import Link from "next/link";
import NavIcons from "./Navicons";

const HeaderApp = () => (
  <>
    <div>
      <header>
        {/*Navbar*/}

        <nav className="navbar navbar-expand-sm navbar-dark brown">
          {/* Additional container */}
          <div className="container brandname">
            {/* Navbar brand */}
            <a className="navbar-brand " href="./">
              WECORPORATE
            </a>
            {/* Collapse button */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Collapsible content */}
            <div className="collapse navbar-collapse" id="basicExampleNav">
              {/* Links */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link prefetch href="./">
                    <a className="nav-link" href="#">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link prefetch href="./digital">
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link prefetch href="./contact">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </Link>
                </li>
                {/* Dropdown */}
                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div
                  className="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}
              </ul>
              {/* Links */}
              {/* <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form> */}
            </div>
            {/* Collapsible content */}
          </div>
          {/* Additional container */}
          <NavIcons />
        </nav>
        {/*/.Navbar*/}
      </header>
      <style jsx>
        {`
          .brandname {
            justify-content: space-between;
            padding-bottom: 0.5rem;
          }
        `}
      </style>
    </div>
  </>
);

export default HeaderApp;
