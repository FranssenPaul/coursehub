import React from 'react';
import { useDocumentStore } from '../store/useDocumentStore';
import { useClassStore } from '../store/useClassStore';

const SelectDocument: React.FC = () => {
  const { documents, selectedDocument, setSelectedDocument } =
    useDocumentStore();
  const { selectedClass } = useClassStore();

  // Handle document selection
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFile = e.target.value;

    if (selectedFile) {
      setSelectedDocument(selectedFile);
    } else {
      setSelectedDocument(null);
    }
  };

  const documentUrl =
    selectedClass && selectedDocument
      ? `/${selectedClass}/${selectedDocument}`
      : null;

  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor="document-select" className="label">
        <span className="label-text">Select Document:</span>
      </label>
      <select
        id="document-select"
        value={selectedDocument || ''}
        onChange={handleChange}
        className="select select-bordered text-xs md:text-base"
        disabled={documents.length === 0} // Disable if no documents are available
      >
        <option value="" disabled>
          Choose a document
        </option>
        {documents.map(doc => (
          <option key={doc.id} value={doc.title}>
            {doc.title}
          </option>
        ))}
      </select>
      {documentUrl ? (
        <a
          href={documentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
        >
          Open Document
        </a>
      ) : null}
    </div>
  );
};

export default SelectDocument;
