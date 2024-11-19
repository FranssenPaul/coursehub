import React, { useEffect } from 'react';
import { useClassStore } from '../store/useClassStore';

const SelectClass: React.FC = () => {
  const { classes, selectedClass, setSelectedClass, fetchClasses } =
    useClassStore();

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor="class-select" className="label">
        <span className="label-text">Select Class:</span>
      </label>
      <select
        id="class-select"
        value={selectedClass || ''}
        onChange={handleChange}
        className="select select-bordered"
      >
        <option value="" disabled>
          Choose a class
        </option>
        {classes.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectClass;
