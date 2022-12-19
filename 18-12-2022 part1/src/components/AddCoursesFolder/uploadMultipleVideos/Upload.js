import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "./UploadMultipleVideos.css"

import axios from 'axios';
import Loading from '../../../utils/loading/loading';
import { useDispatch } from 'react-redux';
import { storevideoLink } from '../../../redux/reducers/videoUploadLink';




export default function UploadFiles({ childToParent }) {
  const [files, setFiles] = useState([]);
  const [previewVideo, setPreviewVideo] = useState('');
  const [progressValue, setProgressValue] = useState(0);
  const [cloudinary, setCloudinary] = useState({});
  const [message, setMessage] = useState('');
  const [chapter, setChapter] = useState({});
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [uploadedVideoLink, setuploadedVideoLink] = useState('')

  const dispatch=useDispatch()
 

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      console.log('acceptedFiles', acceptedFiles);
      console.log('rejectedFiles', rejectedFiles);


      (JSON.stringify(acceptedFiles)!=='[]')&&uploadVideoToCloud(acceptedFiles)

      const mappedAcceptedFiles = acceptedFiles.map((file) => ({
        file,
        errors: [],
      }));
      console.log('Files', mappedAcceptedFiles);
      setFiles((curr) => [...curr, ...mappedAcceptedFiles, ...rejectedFiles]);
    },
    [files]
  );

 const uploadVideoToCloud=(file)=>{
console.log("files to be uploaded",file[0])

setLoading(true)
setLoadingMessage('Preview photo is being uploaded to cloud...')
const cloudName = 'dtp1d46p6'
const uploadPreset = 'j4ygtykr'
const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload/`
const timestamp = Date.now() / 1000
const previewVideo = file[0]

let formData = new FormData()
formData.append('api_key', '694173934399617')
formData.append('file', previewVideo)
formData.append('public_id', file[0].name) //this should be changed
formData.append('timestamp', timestamp)
formData.append('upload_preset', uploadPreset)



const config = {
  onUploadProgress: (progressEvent) => {
    const progress = Math.floor(
      (progressEvent.loaded / progressEvent.total) * 100
    );
    console.log(progress);
    setProgressValue(progress);
  },
};



axios
  .post(url, formData, config)
  .then((result) => {
    console.log('Result', result)
    // setcloudinaryVideo(result)
    setLoading(false)
    setLoadingMessage('')
   dispatch(storevideoLink(result.data.url))
    setMessage("Video upload successful")
 setuploadedVideoLink(result.data.url)

    
  })
  .catch((err) => {
    console.log(err)
    alert('upload failed')
    setLoading(false)
    setLoadingMessage('')
    setMessage("Video upload failed")
    setPreviewVideo(false)
  })
 }

  useEffect(() => {
    const preview =
      files && files.length > 0 && URL.createObjectURL(files[0].file);
    setPreviewVideo(preview);
    console.log('preview', preview);
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mpg', '.mpeg', '.avi', '.wmv', '.mp4', '.webm', '.mov'],
    },
  });



  const Parentdiv = {
    height: '3px',
    width: '100%',
    backgroundColor: '#DFDFDF',
    borderRadius: 40,
  };

  const Childdiv = {
    height: '100%',
    width: `${progressValue}%`,
    backgroundColor: '#EE5C4D',
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 0,
    color: 'black',
  };


  

 


  return (
    <React.Fragment>
      

      <div className="dzu-dropzone">
        <div className="uploadStatusMessage">
          {' '}
          {message !== '' ? (
            message === 'Video upload successful' ? (
              <div className="uploadStatusMessage-success uploadStatusMessage">
                <svg
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3C9.72 3 3 9.72 3 18c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.72-15-15-15zm-4.065 21.435L8.55 19.05a1.494 1.494 0 010-2.115 1.494 1.494 0 012.115 0L15 21.255l10.32-10.32a1.494 1.494 0 012.115 0c.585.585.585 1.53 0 2.115L16.05 24.435c-.57.585-1.53.585-2.115 0z"
                    fill="#1EAB0D"
                  />
                </svg>{' '}
                <div>Video upload successful</div>
              </div>
            ) : (
              <div className="uploadStatusMessage-failed uploadStatusMessage">
                <svg
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3C9.72 3 3 9.72 3 18c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.72-15-15-15zm0 16.5c-.825 0-1.5-.675-1.5-1.5v-6c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v6c0 .825-.675 1.5-1.5 1.5zm1.5 6h-3v-3h3v3z"
                    fill="#FF0031"
                  />
                </svg>
                <div> upload failed</div>
              </div>
            )
          ) : (
            ''
          )}
        </div>

        {previewVideo === false ? (
          <div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
             
              <div className="Dropzone-inputContents">
              <div className='upload-centerVideo'>
                {' '}
                <div className='upload-imgUpload'><svg
                  width={110}
                  height={110}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.688 46.016C85.57 30.204 71.683 18.333 55 18.333c-13.246 0-24.75 7.517-30.48 18.517C10.726 38.316 0 50.004 0 64.166c0 15.171 12.33 27.5 27.5 27.5h59.583C99.733 91.666 110 81.4 110 68.75c0-12.1-9.396-21.909-21.313-22.734zM87.082 82.5H27.5c-10.13 0-18.333-8.204-18.333-18.334 0-9.395 7.012-17.233 16.316-18.195l4.904-.505 2.292-4.354C37.033 32.725 45.56 27.5 55 27.5c12.008 0 22.367 8.525 24.704 20.304l1.375 6.875 7.013.504c7.15.458 12.741 6.462 12.741 13.567 0 7.562-6.187 13.75-13.75 13.75zM36.667 59.583h11.687v13.75h13.292v-13.75h11.687L55 41.25 36.667 59.583z"
                    fill="#838383"
                  />
                </svg></div>
                <div className='upload-dragDrop'>Drag and drop multiple files</div>
                <div className='upload-browse'>
                  <p>
                    or <span className='upload-browseColor'>browse</span> to choose files
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="video-container">
            <video key={previewVideo} width="100%" height="100%" autoPlay id="myVideo" controls>
              {console.log('preview video', previewVideo)}
              <source src={previewVideo} />
            </video>
            <div className="Progress-bar">
              {' '}
              <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext} className="progress-balloon">
          <div className="progress-balloon-background">
            <svg
              width={39}
              height={44}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={1}
                y={38}
                width={37}
                height={37}
                rx={3}
                transform="rotate(-90 1 38)"
                fill="#EE5C4D"
              />
              <rect
                x={1}
                y={38}
                width={37}
                height={37}
                rx={3}
                transform="rotate(-90 1 38)"
                stroke="#EE5C4D"
                strokeWidth={2}
              />
              <path
                d="M19.657 42.071l-3.002-3h6.003l-3.001 3z"
                stroke="#EE5C4D"
                strokeWidth={2.2}
              />
              <path
                d="M19.657 41.313L14 35.657h11.314l-5.657 5.657z"
                fill="#EE5C4D"
              />
            </svg>
          </div>
          <div className="progress-balloon-value">{`${progressValue}%`} </div>
        </span>
      </div>
    </div>
              
            </div>
          </div>
        )}

        
        <div className='upload-multipleVideos'>
          <h2>Multiple videos</h2>
        </div>
      </div>
    
     
    </React.Fragment>
  );
}
