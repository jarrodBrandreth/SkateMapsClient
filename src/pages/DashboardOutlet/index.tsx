import { Outlet, Navigate } from 'react-router-dom';
import { SecondaryNav } from '../../components/SecondaryNav';
import { UserProps } from '../../types/types';

interface DashboardOutletProps {
  user: UserProps;
}

export function DashboardOutlet({ user }: DashboardOutletProps) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <SecondaryNav parentPage="Dashboard" />
      <Outlet />
    </>
  );
}
