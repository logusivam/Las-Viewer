import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        async function fetchFiles() {
            try {
                const response = await axios.get('http://localhost:5000/files');
                setFiles(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        }
        fetchFiles();
    }, []);

    const handleFileUpload = async (event) => {
        const formData = new FormData();
        for (const file of event.target.files) {
            formData.append('lasFiles', file);
        }

        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Reload files
            const response = await axios.get('http://localhost:5000/files');
            setFiles(response.data);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const handleFileClick = async (file) => {
        try {
            const response = await axios.get(`http://localhost:5000/${file.filepath}`, { responseType: 'text' });
            setFileContent(response.data);
            setSelectedFile(file);
        } catch (error) {
            console.error('Error fetching file content:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">LAS File Viewer</h1>
            <input type="file" multiple onChange={handleFileUpload} className="upload-button" />
            <ul className="file-list">
                {files.map((file) => (
                    <li key={file._id} onClick={() => handleFileClick(file)} className="file-item">
                        {file.filename}
                    </li>
                ))}
            </ul>
            {selectedFile && (
                <div className="file-viewer">
                    <h2>Viewing: {selectedFile.filename}</h2>
                    <pre className="file-content">
                        {fileContent}
                    </pre>
                </div>
            )}
        </div>
    );
}
