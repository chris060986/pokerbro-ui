import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile className='nav-icon' />,
        cName: 'nav-item'
    },
    {
      title: 'Handhistory',
      path: '/handhistory',
      icon: <GiIcons.GiPokerHand className='nav-icon' />,
      cName: 'nav-item'
    },
    {
      title: 'Villains',
      path: '/villains',
      icon: <GiIcons.GiBandit className='nav-icon'/>,
      cName: 'nav-item'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle className='nav-icon'/>,
      cName: 'nav-item bottom'
    }
  ];