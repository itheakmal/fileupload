import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [fileDetails, setFileDetails] = useState([])
  const completeURL = ''
  const handleFile = (fileData) => {
    let fileNames = [];
    for (var i = 0; i < fileData.target.files.length; i++) {
      fileNames.push(fileData.target.files[i]);
      setFileDetails(fileNames);
    }
  }

  const handleForm = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    for (const file of fileDetails) {
      console.log('file----', fileDetails[0])
      formData.append("fileUpload", fileDetails[0]);
    }


    // unncomment below code


    // try {

    //   const res = await fetch(`${completeURL}`, {
    //     method: "post",
    //     body: JSON.stringify(formData),
    //   });
    //   if (res) {
    //     console.log('res', res)
    //   }
    // } catch(e){
    //   console.log(e)
    // }

  }
  useEffect(() => {
    console.log('file data', fileDetails)
  }, [fileDetails])

  return (
    <div className="App">
      <form onSubmit={(e) => handleForm(e)}>
        <h1>Modal Train File Upload</h1>

        <input
          name='fileUpload'
          id="fileUpload"
          onChange={(e) => handleFile(e)}
          accept=".pdf, .csv"
          multiple
          type="file"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;