import React from 'react';
import SelectClass from '../components/SelectClass';
import SelectDocument from '../components/SelectDocument';

const DashboardView: React.FC = () => {
  return (
    <main>
      <h2>Dashboard</h2>
      <SelectClass />
      <SelectDocument />
    </main>
  );
};

export default DashboardView;
