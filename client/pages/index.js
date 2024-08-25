import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        async function fetchFiles() {
            const response = await axios.get('http://localhost:5000/files');
            setFiles(response.data);
        }
        fetchFiles();
    }, []);

    const handleFileUpload = async (event) => {
        const formData = new FormData();
        formData.append('lasFile', event.target.files[0]);

        await axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // Reload files
        const response = await axios.get('http://localhost:5000/files');
        setFiles(response.data);
    };

    return (
        <div>
            <h1>LAS File Viewer</h1>
            <input type="file" onChange={handleFileUpload} />
            <ul>
                {files.map((file) => (
                    <li key={file._id} onClick={() => setSelectedFile(file)}>
                        {file.filename}
                    </li>
                ))}
            </ul>
            {selectedFile && (
                <div>
                    <h2>Viewing: {selectedFile.filename}</h2>
                    <iframe
                        src={`http://localhost:5000/${selectedFile.filepath}`}
                        width="100%"
                        height="600px"
                    ></iframe>
                </div>
            )}
        </div>
    );
}
