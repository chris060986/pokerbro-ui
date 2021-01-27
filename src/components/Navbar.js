import React from 'react'
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import { Drawer, ListItem, ListItemIcon, makeStyles } from '@material-ui/core';

  const navRailStyle = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "green"
    },
    listItem: {
        alignItems: 'center'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }));

  function Navbar() {
    const classes = navRailStyle();
    return (
      <>
        <IconContext.Provider value={{ color: '#f86100', size: "35px" }}>
        <div className={classes.toolbar}>
        </div>
          <Drawer variant="permanent">
           <div className={classes.toolbar} />
            <List>
              {SidebarData.map((menuItem, index) => {
                return (
                  <>
                  <ListItem key={index}>
                    <ListItemIcon className={classes.listItem}>
                      <Link to={menuItem.path} className='nav-menu-bars'>
                        {menuItem.icon}
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                  </>
                );
              })}
            </List>
          </Drawer>
        </IconContext.Provider>
      </>
      );
  }
  

export default Navbar