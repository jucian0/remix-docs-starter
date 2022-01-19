import React, { useContext, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";
import { ThemeContext } from 'styled-components';

import { Aside, Item, Items, SubItems, SubItem } from './styles';

const links = [
  {
    label: 'Introduction',
    link: '',
    subItems: [
      {
        label: 'Readme',
        link: '/docs/',
      },
      {
        label: 'Quick Start',
        link: '/docs/quick-start'
      }
    ]
  },
  {
    label: 'How it works',
    link: '',
    subItems: [
      {
        label: 'The concept',
        link: '/docs/concept'
      },
    ]
  },
  {
    label: 'Creating a form',
    link: '',
    subItems: [
      {
        label: 'createForm()',
        link: '/docs/createForm'
      },
    ]
  },
  {
    label: 'Using your Form',
    link: '',
    subItems: [
      {
        label: 'Controlled form',
        link: '/docs/controlled-form'
      },
      {
        label: 'Debounced form',
        link: '/docs/debounced-form'
      },
      {
        label: 'Uncontrolled form',
        link: '/docs/uncontrolled-form'
      },
      {
        label: 'Validation',
        link: '/docs/validation'
      },
      {
        label: 'Custom fields',
        link: '/docs/custom-field'
      }
    ]
  },
]



function ActiveLink({ href, children }: any) {
  const { pathname } = useLocation();
  const theme = useContext(ThemeContext)

  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <SubItem className={isActive ? "active" : ''}>
      <GoChevronRight color={isActive ? theme.colors.primary : 'transparent'} />
      <Link to={href} className={isActive ? "active" : ''}>{children}</Link>
    </SubItem>
  )
}


function Sidebar({ open, ...rest }: any) {

  const [expanded, setExpanded] = useState('')


  return (
    <Aside open={open}>
      <Items>
        {
          links.map(link => (
            <Item key={link.label}>
              <span onClick={() => setExpanded('')}>
                {link.label}
              </span>
              {
                expanded === ''
              }
              <SubItems>
                {
                  link.subItems?.map(subItem => (
                    <ActiveLink key={subItem.label} href={subItem.link}>{subItem.label}</ActiveLink>
                  ))
                }
              </SubItems>
            </Item>
          ))
        }
      </Items>
    </Aside>
  );
}

export default Sidebar;