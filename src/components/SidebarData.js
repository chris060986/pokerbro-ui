import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile size="1.3em" className='nav-icon' />,
        cName: 'nav-item'
    },
    {
      title: 'Handhistory',
      path: '/handhistory',
      icon: <GiIcons.GiPokerHand size="1.3em" className='nav-icon' />,
      cName: 'nav-item'
    },
    {
      title: 'Villains',
      path: '/villains',
      icon: <GiIcons.GiBandit size="1.3em" className='nav-icon'/>,
      cName: 'nav-item'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle size="1.3em" className='nav-icon' />,
      cName: 'nav-item bottom'
    }
  ];