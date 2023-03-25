import React, { useState } from 'react';
import '../styles/UploadForm.css';

function UploadForm({ onUpload }) {
  const [photos, setPhotos] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Function that handles selecting photos to upload
  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const fileArray = [];

    for (let i = 0; i < fileList.length; i++) {
      fileArray.push(fileList.item(i));
    }

    setPhotos(fileArray);
  };

  // Function that handles submitting the photos to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (photos.length === 0) {
      return;
    }

    setIsUploading(true);

    const formData = new FormData();

    for (let i = 0; i < photos.length; i++) {
      formData.append('photos[]', photos[i]);
    }

    await onUpload(formData);

    setIsUploading(false);
    setPhotos([]);
  };

  return (
    <div className="UploadForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="photos">Select Photos:</label>
        <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} />
        <button type="submit" disabled={isUploading || photos.length === 0}>Upload</button>
      </form>
    </div>
  );
}

export default UploadForm;

