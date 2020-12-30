import React from 'react'
import './Navbar.css'
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <IconContext.Provider value={{ color: '#61DAFB' }}>
      <div className="Navbar">
        <ul className='nav-container'>
          {SidebarData.map((menuItem, index) => {
            return (
              <li key={index} className={menuItem.cName}>
                <Link to={menuItem.path} className='nav-menu-bars'>
                  {menuItem.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </IconContext.Provider>
  </>
  );

export default Navbar