import React from 'react';
import SelectClass from '../components/SelectClass';
import SelectDocument from '../components/SelectDocument';

const DashboardView: React.FC = () => {
  return (
    <main className="p-6 bg-base-100 text-base-content">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SelectClass />
        <SelectDocument />
      </div>
    </main>
  );
};

export default DashboardView;
