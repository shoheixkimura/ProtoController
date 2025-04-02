import React from 'react';

function UrlButton({ name, url, icon, onSend }) {
  return (
    <div className="url-button" onClick={onSend}>
      {icon && <div className="url-button-icon"><i className="material-icons">{icon}</i></div>}
      <div className="url-button-name">{name}</div>
      <div className="url-button-url">{url}</div>
    </div>
  );
}

export default UrlButton;
