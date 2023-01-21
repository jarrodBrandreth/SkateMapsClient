import { Outlet, Navigate } from 'react-router-dom';
import { SecondaryNav } from '../../components/SecondaryNav';
import { UserProps } from '../../types/types';

interface AdminProps {
  user: UserProps;
}

export function Admin({ user }: AdminProps) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <SecondaryNav parentPage="Admin" />
      <Outlet />
    </>
  );
}
