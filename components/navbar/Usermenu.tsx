'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/hooks/useRegisterModal';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(registerModal.isOpen);
  }, [registerModal.isOpen]);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
          onClick={() => {}}
        >
          Airbnb your home
        </div>

        <div
          className="flex items-center gap-3 p-4 transition border rounded-full cursor-pointer md:py-1 md:px-2 border-neutral-200 hover:shadow-md"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem
                onClick={registerModal.onOpen}
                label="Sign up"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
