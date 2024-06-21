// QRScanner.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'react-qr-reader';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const history = useHistory();

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      // Assuming the scanned data is a URL you want to navigate to
      history.push(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>QR Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {scanResult && <p>Scanned Data: {scanResult}</p>}
    </div>
  );
};

export default QRScanner;
