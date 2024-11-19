import React from 'react';
import { useDocumentStore } from '../store/useDocumentStore';
import { useClassStore } from '../store/useClassStore';

const SelectDocument: React.FC = () => {
  const { documents, selectedDocument, setSelectedDocument, openDocument } =
    useDocumentStore();
  const { selectedClass } = useClassStore();

  // Handle document selection
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFile = e.target.value;
    setSelectedDocument(selectedFile);

    if (selectedClass && selectedFile) {
      openDocument(selectedClass, selectedFile); // Delegate opening to the store
    }
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
        disabled={documents.length === 0} // Disable if no documents are available
      >
        <option value="" disabled>
          Choose a document
        </option>
        {documents.map(doc => (
          <option key={doc.id} value={doc.name}>
            {doc.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDocument;
