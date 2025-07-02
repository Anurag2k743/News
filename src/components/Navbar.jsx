import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Or use react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Business', path: '/business' },
    { name: 'Education', path: '/education' },
    { name: 'Sports', path: '/sports' },
    { name: 'Achievement', path: '/achievement' },
    { name: 'Crime', path: '/crime' },
    { name: 'Entertainment', path: '/entertainment' }
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-500 uppercase text-base font-semibold md:text-sm'
      : 'text-white uppercase text-base font-semibold md:text-sm';

  return (
    <>
      <nav className='w-full fixed top-0 left-0 right-0  shadow z-50'>
        <div className='container mx-auto  flex justify-between items-center'>
          <div className="text-white font-bold text-xl py-3">International News</div>
          <div className='hidden md:flex space-x-8'>
            {menuItems.map((item, index) => (
              <NavLink key={index} to={item.path} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* -----Mobile Toggle Button------ */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>
        </div>

        {/* -----Mobile Menu------ */}
        {isOpen && (
          <div className="md:hidden bg-black px-4 py-2 space-y-1 flex flex-col ">
            {menuItems.map((item, index) => (
              <NavLink key={index}  to={item.path} onClick={() => setIsOpen(false)}   className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
