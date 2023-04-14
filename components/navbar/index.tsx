import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import Usermenu from './Usermenu';

function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <Usermenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
