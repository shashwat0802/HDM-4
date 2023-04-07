import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div className="container-fluid mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
        <div className="container-fluid p-2">
          <Link to="/dashboard" className="navbar-brand text-primary mr-0">HDM-4 Thapar</Link>
          <div className="form-inline ml-auto">
            <div className="btn btn-primary" onClick={ToggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-white" />
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
        <div className="sd-header">
          <h4 className="mb-0">Configurations</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}>
          <FontAwesomeIcon icon={faTimes} className="text-white" />
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <Link to="/climate-data" className="sd-link" >Climate Data</Link>
            </li>
            <li>
              <Link to="/speed-flow" className="sd-link" >Speed Flow Type</Link>
            </li>
            <li>
              <Link to="/traffic-flow" className="sd-link" >Traffic Flow Pattern</Link>
            </li>
            <li>
              <Link to="/road-network" className="sd-link" >Road Network</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`}
        onClick={ToggleSidebar}
      ></div>
    </div>
  );
}
