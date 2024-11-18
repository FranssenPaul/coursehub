import React from 'react';
import SelectClass from '../components/SelectClass';
import SelectDocument from '../components/SelectDocument';

const DashboardView: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <SelectClass />
      <SelectDocument />
    </div>
  );
};

export default DashboardView;
