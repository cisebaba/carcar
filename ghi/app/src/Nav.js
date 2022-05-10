import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers">Manufacturer List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/new">Manufacturer Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Vehicle Models List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Vehicle Model Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles">Automobiles List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Automobile Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">Add a sales person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="technicians/new">Add a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="appointments/new">Add an Appointment</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
