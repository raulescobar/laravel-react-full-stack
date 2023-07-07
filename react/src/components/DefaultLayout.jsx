import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

Outlet

export default function DefaultLayout() {

  const {user,token} = useStateContext()

  if(!token){
    return <Navigate to="/login" />
  }

  return (
    <div>
      Default
      <Outlet />
    </div>
  )
}
