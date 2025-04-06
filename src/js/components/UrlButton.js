import React, { useState } from 'react';

function UrlButton({ name, url, icon, imageUrl, onSend }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error(`Failed to load image: ${imageUrl}`);
    setImageError(true);
  };

  return (
    <div className="url-button" onClick={onSend}>
      {imageUrl && !imageError ? (
        <div className="url-button-image">
          <img 
            src={imageUrl} 
            alt={name} 
            onError={handleImageError} 
          />
        </div>
      ) : icon ? (
        <div className="url-button-icon">
          <i className="material-icons">{icon}</i>
        </div>
      ) : (
        <div className="url-button-icon">
          <i className="material-icons">link</i>
        </div>
      )}
      <div className="url-button-name">{name}</div>
      <div className="url-button-url">{url}</div>
    </div>
  );
}

export default UrlButton;
