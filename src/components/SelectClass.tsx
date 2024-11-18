import React from 'react';
import { useClassStore } from '../store/useClassStore';

const SelectClass: React.FC = () => {
  const { selectedClass, setSelectedClass } = useClassStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  return (
    <div>
      <label htmlFor="class-select">Select Class:</label>
      <select
        id="class-select"
        value={selectedClass || ''}
        onChange={handleChange}
      >
        <option value="" disabled>
          Choose a class
        </option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>
    </div>
  );
};

export default SelectClass;
