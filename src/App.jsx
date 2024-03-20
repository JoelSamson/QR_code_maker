import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
  const [text, setText] = useState('https://joelsamson.com/');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>Generate Awesome QR Codes in Seconds. 🔥</h1>
      <center>
      <input id="text" type="text" value={text} onChange={handleChange} /></center>
      <div className="output">
        <div style={{ height: 'auto', margin: '0 auto', maxWidth:256, width: '100%' }}>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={text}
            viewBox="0 0 256 256"
          />
        </div>
        <h3>Here is the generated QR Code 👈</h3>
      </div>
    </>
  );
}

export default App;
