import React from 'react';
import { useDocumentStore } from '../store/useDocumentStore';

const SelectDocument: React.FC = () => {
  const { selectedDocument, setSelectedDocument } = useDocumentStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocument(e.target.value);
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor="document-select" className="label">
        <span className="label-text">Select Document:</span>
      </label>
      <select
        id="document-select"
        value={selectedDocument || ''}
        onChange={handleChange}
        className="select select-bordered"
      >
        <option value="" disabled>
          Choose a document
        </option>
        <option value="Chapter1.pdf">Chapter 1</option>
        <option value="Chapter2.pdf">Chapter 2</option>
        <option value="Summary.pdf">Summary</option>
      </select>
    </div>
  );
};

export default SelectDocument;
