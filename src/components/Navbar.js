import React from 'react'
import './Navbar.css'
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';

const Navbar = () => (
  <>
    <IconContext.Provider value={{ color: '#61DAFB' }}>
      <div className="Navbar">
        <ul className='nav-container'>
          {SidebarData.map((menuItem, index) => {
            return (
              <li key={index} className={menuItem.cName}>
                {menuItem.icon}
              </li>
            );
          })}
        </ul>
      </div>
    </IconContext.Provider>
  </>
  );

export default Navbar