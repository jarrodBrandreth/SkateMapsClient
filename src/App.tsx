import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { MyMapOutlet } from './pages/MyMapOutlet';
import { DashboardOutlet } from './pages/DashboardOutlet';
import { CreateLocation } from './pages/CreateLocation';
import { CreateMyMapLocation } from './pages/CreateMyMapLocation';
import { LocationsPage } from './pages/LocationsPage';
import { MyMap } from './pages/MyMap';
import { NotFound } from './pages/NotFound';
import { EditLocation } from './pages/EditLocation';
import { DeleteLocation } from './pages/DeleteLocation';
import { Dashboard } from './pages/Dashboard';
import { EditMyMapLocation } from './pages/EditMyMapLocation';
import { DeleteMyMapLocation } from './pages/DeleteMyMapLocation';
import './App.css';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LocationsPage />} />
          <Route path="login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="my-map" element={<MyMapOutlet />}>
            <Route path="" element={<MyMap />} />
            <Route path="create-location" element={<CreateMyMapLocation />} />
            <Route path="edit-location" element={<EditMyMapLocation />} />
            <Route path="delete-location" element={<DeleteMyMapLocation />} />
          </Route>
          <Route path="dashboard" element={<DashboardOutlet user={user} />}>
            <Route path="" element={<Dashboard />} />
            <Route path="create-location" element={<CreateLocation />} />
            <Route path="edit-location" element={<EditLocation />} />
            <Route path="delete-location" element={<DeleteLocation />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
