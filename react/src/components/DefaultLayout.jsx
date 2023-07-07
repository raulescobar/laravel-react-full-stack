import React from 'react';
import { Outlet } from 'react-router-dom';

Outlet

export default function DefaultLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
