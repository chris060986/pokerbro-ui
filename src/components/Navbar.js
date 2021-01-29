import React from 'react'
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';
import List from '@material-ui/core/List';
import { Drawer, ListItem, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

  const navRailStyle = makeStyles((theme) => ({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    menuListItem: {
      paddingRight: "8px",
      paddingLeft: "8px"
    }
  }));

  function Navbar() {
    const classes = navRailStyle();
    return (
      <>
        <IconContext.Provider value={{ color: '#f86100' }}>
        <div className={classes.toolbar}>
        </div>
          <Drawer variant="permanent">
            <div className={classes.toolbar} />
            <List>
              {SidebarData.map((menuItem, index) => {
                return (
                  <>
                  <ListItem key={index} className={classes.menuListItem} component={Link} to={menuItem.path}>
                    <IconButton color="primary" aria-label={menuItem.titel} component="span">
                      {menuItem.icon}
                    </IconButton>
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