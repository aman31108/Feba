
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: '      ..Vendor Login ',
    path: '/Login',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: '..Makeup Course',
    path: '/Makeup',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: '..Wedding',
    path: '/Wedding',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
