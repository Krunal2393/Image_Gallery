import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Navigation from './Components/Navigation';
import Gallery from './Pages/Gallery';
import Home from './Components/Home';
import Laptop from './Pages/Laptop';
import Mobile from './Pages/Mobile';


function App() {
  return (
    <>
    {/* we use the navigation and rotes,routr for to redirect that page  */}
    <Navigation/>
    <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Gallery' element={<Gallery/>}></Route>
    <Route path='/Mobile' element={<Mobile/>}></Route>
    <Route path='/Laptop' element={<Laptop/>}></Route>

    </Routes>

    </>
  );
}




export default App;




// import React from 'react'
// import useFileHandlers from './Components/Home';
// import './App.css'

// const Input = (props) => (
//   <input
//     type="file"
//     accept="image/*"
//     name="img-loader-input"
//     multiple
//     {...props}
//   />
// )

// const App = () => {
//   const {
//     files,
//     pending,
//     next,
//     uploading,
//     uploaded,
//     status,
//     onSubmit,
//     onChange,
//   } = useFileHandlers()

//   return (
//     <div className="container">
//       <form className="form" onSubmit={onSubmit}>
//         {status === 'FILES_UPLOADED' && (
//           <div className="success-container">
//             <div>
//               <h2>Congratulations!</h2>
//               <small>You uploaded your files. Get some rest.</small>
//             </div>
//           </div>
//         )}
//         <div>
//           <Input onChange={onChange} />
//           <button type="submit">Submit</button>
//         </div>
//         <div>
//           {files.map(({ file, src, id }, index) => (
//             <div
//               style={{
//                 opacity: uploaded[id] ? 0.2 : 1,
//               }}
//               key={`thumb${index}`}
//               className="thumbnail-wrapper"
//             >
//               <img className="thumbnail" src={src} alt="" />
//               <div className="thumbnail-caption">{file.name}</div>
//             </div>
//           ))}
//         </div>
//       </form>
//     </div>
//   )
// }

// export default App
