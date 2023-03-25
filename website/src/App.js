import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ResultTable from './components/ResultTable';
import ErrorMessage from './components/ErrorMessage';
import './styles/App.css';

function App() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Function that handles uploading the photos and getting the results
  const handleUpload = async (formData) => {
    try {
      const response = await fetch('http://backend-api-url.com/process-photos', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process photos');
      }

      const results = await response.json();
      setResults(results);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setResults([]);
      setErrorMessage('Failed to process photos');
    }
  };

  return (
    <div className="App">
      <h1>Book Restorer Assistant</h1>
      <UploadForm onUpload={handleUpload} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {results.length > 0 && <ResultTable results={results} />}
    </div>
  );
}

export default App;

