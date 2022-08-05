import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Inventory</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="manufacturers" role="button">Manufacturer List</NavLink></li>
                <li><NavLink className="dropdown-item" to="manufacturers/new" role="button">Add a Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models" role="button">Vehicle Models List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/new" role="button">Add a Vehicle Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="automobiles" role="button">Automobiles List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/new" role="button">Add an Auto</NavLink></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Sales</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/salespeople" role="button">Add a Sales Person</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customers" role="button">Add a potential customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesrecords" role="button">View all sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesrecords/new" role="button">Create a sale record</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salehistory" role="button">View Sale History</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Service</a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="technicians/new" role="button">Add a Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="appointments/new" role="button">Add an Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="appointments" role="button">Appointments</NavLink></li>
              </ul>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='search'>Search by VIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
