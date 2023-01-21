import React from 'react';
import { Outlet } from 'react-router-dom';
import { SecondaryNav } from '../../components/SecondaryNav';

export function MyMap() {
  return (
    <>
      <SecondaryNav parentPage="My Map" />
      <Outlet />
    </>
  );
}
