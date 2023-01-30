import React, { useState, useEffect } from "react";

function UploadCV() {
  const [cv, setCV] = useState(null);

  const handleCVUpload = (e) => {
    setCV(e.target.files[0]);
    console.log(cv);
  };

  const handleCVSubmit = (e) => {};

  return (
    <div>
      <h2>Upload cv...</h2>
      <input onChange={handleCVUpload} type="file" name="cv" id="cv" />
    </div>
  );
}

export default UploadCV;
