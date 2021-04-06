import { useState } from 'react';
import { APP_NAME } from '../../config';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Link from 'next/link';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Link href='/'>
          <NavLink className='navbar-brand font-weight-bold'>
            {APP_NAME}
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <Link href='/signin'>
              <NavLink>Sign In</NavLink>
            </Link>
            <Link href='/signup'>
              <NavLink>Sign Up</NavLink>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
