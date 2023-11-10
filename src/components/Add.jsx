// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { uploadvideo } from '../services/allAPI';
// // import {  } from "module";
// function Add() {
//   const[Videos,setVideos]=useState({
//     id:"",
//     caption:"",
//     url:"",
//     ylink:""
// })
//   console.log(Videos);
//   // const [id,setID]=useState("")
//   // const [url,setURL]=useState("")
//   // const [caption,setCaption]=useState("")
//   // const [link,setLink]=useState("")
 
//   const emblink=(e)=>{
// //  e.preventDefault()
// const {value}=e.target
// console.log(value.slice(-11));
// const link=`https://www.youtube.com/embed/${value.slice(-11)}`
// setVideos({...Videos,ylink:link})
// }

// const handleupload=async()=>{
//   const {id,caption,url,ylink}=Videos
//   if(!id || !caption || !url || !ylink){
//     alert("Please Fill The Form Completly")
// //     
//   }
//   else{
//     const response=await uploadvideo(Videos)
//     console.log(response);
//     if (response.status>=200 && response.status<300) {
//       alert("Upload Successfully")
//       handleClose()
//     }
//     else{
//       console.log(response);
//       alert('Something Went Wrong.Try Again Later')
//     }
//   }

// }  
// const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//    <>
      
//    <Modal
//    show={show}
//    onHide={handleClose}
//    backdrop="static"
//    keyboard={false}
//   >
//    <Modal.Header closeButton>
//      <Modal.Title><i class="fa-solid fa-film me-3"></i>Upload Videos</Modal.Title>
//    </Modal.Header>
//    <Modal.Body>
//      <form  className='border border-info p-3 rounded'>
//      <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control onChange={(e)=>setVideos({...Videos,id:e.target.value})} type="text" placeholder="Enter Video ID" />
        
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control onChange={(e)=>setVideos({...Videos,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
        
//       </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control onChange={(e)=>setVideos({...Videos,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
        
//       </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control onChange={emblink} type="text" placeholder="Enter Youtube Link" />
        
//       </Form.Group>

//      </form>
//    </Modal.Body>
//    <Modal.Footer>
//      <Button variant="secondary" onClick={handleClose}>
//        Cancel
//      </Button>
//      <Button variant="primary" onClick={handleupload}>Upload</Button>
//    </Modal.Footer>
//   </Modal>
//    </>
//   )
// }

// export default Add
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { uploadVideo } from '../services/allAPI';
import { Link } from 'react-router-dom'

function Add({setUploadvidstatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video,setVideo]=useState({
    id:'',
    caption:'',
    url:'',
    embedlink:''

  });

  const embedVideoLink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedlink:link})
  }
  // console.log(video);
 const handleUpload=async()=>{
  const {id,caption,url,embedlink}=video
  if (!id || !caption || !url || !embedlink) {
    toast.warning('please fill the form completely')
    
  }
  else{
    const response = await uploadVideo(video)
    console.log(response);
    if (response.status>=200 && response.status<=300) {
      setUploadvidstatus(response.data)
      toast.success('upload success')
      //close model
      handleClose()
      
    }
    else{
      console.log(response);
      toast.error('try again later')

    }
  }
 }
  return (
   <>
      <div>
         <div className='d-flex' style={{alignItems:"center",justifyContent:"space-between"}}>
            <h3 className='mt-4 mb-4'>Upload New Video
    <button className='btn' onClick={handleShow}>
              <i class="fs-3 ms-3 fa-solid fa-cloud-arrow-up fa-bounce"></i>
      
    </button>        </h3>
            <Link className='mt-4 fs-3' to={'/watchhistory'} style={{textDecoration:"none"}}>Watch History</Link>
    
     </div>
           <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-3"></i>Upload Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <form action="" className=' w-100 border border-secondary p-3 rounded'>
           <Form.Group onChange={(e)=>setVideo({...video,id:e.target.value})} className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              name="id"
              required
              type="text"
              placeholder="Enter Video Id"
            />
           
          </Form.Group>
          <Form.Group  onChange={(e)=>setVideo({...video,caption:e.target.value})}  className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              name="caption"
              required
              type="text"
              placeholder="Enter Video Caption"
            />
           
          </Form.Group>
          <Form.Group onChange={(e)=>setVideo({...video,url:e.target.value})}   className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              name="url"
              required
              type="text"
              placeholder="Enter Video Image URL"
            />
           
          </Form.Group>
          <Form.Group  onChange={(e)=>embedVideoLink(e)}   className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              name="embedlink"
              required
              type="text"
              placeholder="Enter Youtube Video Link"
            />
           
          </Form.Group>
           </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Cancel
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
        
      </div>
      
<ToastContainer
position="top-center"
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   </>
  )
}

export default Add