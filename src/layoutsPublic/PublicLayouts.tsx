import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarPublic from '../componentsPublic/NavbarPublic';
import FooterPublic from '../componentsPublic/FooterPublic';

export const PublicLayout: React.FC = () => {
  return (
    <div className="bg-[#050816] min-h-screen text-slate-100 flex flex-col justify-between font-sans">
      <NavbarPublic />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <FooterPublic />
    </div>
  );
};

export default PublicLayout;