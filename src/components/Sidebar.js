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
          <Link to="#" className="navbar-brand text-primary mr-0">Company Logo</Link>
          <div className="form-inline ml-auto">
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
        <div className="sd-header">
          <h4 className="mb-0">Sidebar Header</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <Link to="#" className="sd-link">Menu Item 1</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 2</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 3</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 4</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 5</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 6</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 7</Link>
            </li>
            <li>
              <Link to="#" className="sd-link">Menu Item 8</Link>
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
