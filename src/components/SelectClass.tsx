import React, { useState } from 'react';
import { useClassStore } from '../store/useClassStore';

const SelectClass: React.FC = () => {
  const { classes, selectedClass, setSelectedClass } = useClassStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClassChange = async (value: string): Promise<void> => {
    setIsLoading(true);
    try {
      await setSelectedClass(value);
    } catch (error) {
      console.error('Failed to set selected class:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    if (value) {
      void handleClassChange(value); // Call the async function
    }
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
        disabled={isLoading} // Disable dropdown while loading
      >
        <option value="" disabled>
          {isLoading ? 'Loading...' : 'Choose a class'}
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
