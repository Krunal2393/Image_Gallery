// import axios from 'axios';

// import React,{Component} from 'react';

// class App extends Component {

// 	state = {

// 	// Initially, no file is selected
// 	selectedFile: null
// 	};
	
// 	// On file select (from the pop up)
// 	onFileChange = event => {
	
// 	// Update the state
// 	this.setState({ selectedFile: event.target.files[0] });
	
// 	};
	
// 	// On file upload (click the upload button)
// 	onFileUpload = () => {
	
// 	// Create an object of formData
// 	const formData = new FormData();
	
// 	// Update the formData object
// 	formData.append(
// 		"myFile",
// 		this.state.selectedFile,
// 		this.state.selectedFile.name,
// 		this.state.selectedFile.image
// 	);
	
// 	// Details of the uploaded file
// 	console.log(this.state.selectedFile);
	
// 	// Request made to the backend api
// 	// Send formData object
// 	axios.post("api/uploadfile", formData);
// 	};
	
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
	
// 	if (this.state.selectedFile) {
		
// 		return (
// 		<div className='Add'>
// 			<h2>File Details:</h2>
// 			<p>File Name: {this.state.selectedFile.name}</p>

// 			<p>File Type: {this.state.selectedFile.type}</p>
// 			<p>File Image:{this.state.selectedFile.image}</p>

// 			<p>
// 			Last Modified:{" "}
// 			{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			</p>

// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div className='Add'>
      
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<h1>
// 			UPLOAD THE IMAGE
// 			</h1>
			
// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }

// export default App;



import React, { useEffect, useState } from "react";





export default function Home() {
  const [file, setFile] = useState();
  // const [data,setData] = useState();
  // we create one function and that file to give url and give indexed to the file
  // console to we check the file name and all 
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
	
	
  }

  useEffect(() => {
	console.log("set file state log --> ", file)
  },[file])
 
  
  return (
    <div>
      
  
      <div className="Add">
            <h2>UPLOAD IMAGE TO THE GELLERY</h2>
            {/* we have create one input box and onchange we call function handleChange  */}
            <input type="file" onChange={handleChange} />
            <img src={file} />
  
        </div>
            <div className="Add Adds">

            
            <button >upload </button>
            </div>
    </div>
            


  )
};








// import { useCallback, useEffect, useReducer, useRef } from 'react'

// const api = {
//   uploadFile({ timeout = 550 }) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve()
//       }, timeout)
//     })
//   },
// }

// const logUploadedFile = (num, color = 'green') => {
//   const msg = `%cUploaded ${num} files.`
//   const style = `color:${color};font-weight:bold;`
//   console.log(msg, style)
// }

// // Constants
// const LOADED = 'LOADED'
// const INIT = 'INIT'
// const PENDING = 'PENDING'
// const FILES_UPLOADED = 'FILES_UPLOADED'
// const UPLOAD_ERROR = 'UPLOAD_ERROR'

// const initialState = {
//   files: [],
//   pending: [],
//   next: null,
//   uploading: false,
//   uploaded: {},
//   status: 'idle',
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'load':
//       return { ...state, files: action.files, status: LOADED }
//     case 'submit':
//       return { ...state, uploading: true, pending: state.files, status: INIT }
//     case 'next':
//       return {
//         ...state,
//         next: action.next,
//         status: PENDING,
//       }
//     case 'file-uploaded':
//       return {
//         ...state,
//         next: null,
//         pending: action.pending,
//         uploaded: {
//           ...state.uploaded,
//           [action.prev.id]: action.prev.file,
//         },
//       }
//     case 'files-uploaded':
//       return { ...state, uploading: false, status: FILES_UPLOADED }
//     case 'set-upload-error':
//       return { ...state, uploadError: action.error, status: UPLOAD_ERROR }
//     default:
//       return state
//   }
// }

// const useFileHandlers = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault()
//       if (state.files.length) {
//         dispatch({ type: 'submit' })
//       } else {
//         window.alert("You don't have any files loaded.")
//       }
//     },
//     [state.files.length],
//   )

//   const onChange = (e) => {
//     if (e.target.files.length) {
//       const arrFiles = Array.from(e.target.files)
//       const files = arrFiles.map((file, index) => {
//         const src = window.URL.createObjectURL(file)
//         return { file, id: index, src }
//       })
//       dispatch({ type: 'load', files })
//     }
//   }

//   // Sets the next file when it detects that its ready to go
//   useEffect(() => {
//     if (state.pending.length && state.next == null) {
//       const next = state.pending[0]
//       dispatch({ type: 'next', next })
//     }
//   }, [state.next, state.pending])

//   const countRef = useRef(0)

//   // Processes the next pending thumbnail when ready
//   useEffect(() => {
//     if (state.pending.length && state.next) {
//       const { next } = state
//       api
//         .uploadFile(next)
//         .then(() => {
//           const prev = next
//           logUploadedFile(++countRef.current)
//           const pending = state.pending.slice(1)
//           dispatch({ type: 'file-uploaded', prev, pending })
//         })
//         .catch((error) => {
//           console.error(error)
//           dispatch({ type: 'set-upload-error', error })
//         })
//     }
//   }, [state])

//   // Ends the upload process
//   useEffect(() => {
//     if (!state.pending.length && state.uploading) {
//       dispatch({ type: 'files-uploaded' })
//     }
//   }, [state.pending.length, state.uploading])

//   return {
//     ...state,
//     onSubmit,
//     onChange,
//   }
// }

// export default useFileHandlers

