import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { addAllCategory, deleteACategories, getAllCategories } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Category() {


// import  {commonAPI}  from "./commonAPI"
// import { serverURL } from "./serverURL"


// // upload video

// export const uploadVideo = async(reqBody)=>{
//       //return the response to Add.jsx component
//    return await commonAPI('POST',${serverURL}/videos,reqBody)
// }

// //get all uploaded videos

// export const getAllVideos = async()=>{
//    //return the value to View.jsx component
//    return await commonAPI('GET',${serverURL}/videos,'')
// }

// //to delete a video
// export const deleteAVideo = async(id)=>{
//    return await commonAPI('DELETE',${serverURL}/videos/${id},{})
// }


// //api to add history
// export const addToHistory= async(VideoDetails)=>{
// return await commonAPI('POST',${serverURL}/history,VideoDetails)
// }


// //API to fet history from json-server


// export const getAllHistory  = async()=>{
//    return await commonAPI('GET',${serverURL}/history,'')
// }

// //API to delelte history

// export const deleteAHistory = async(id)=>{
//    return await commonAPI('DELETE',${serverURL}/history/${id},{})
// }

// //api to add category
// export const addAllCategory= async(body)=>{
//    return await commonAPI('POST',${serverURL}/categories,body)
//    }


// //API to get all Category

// export const getAllCategories  = async()=>{
//    return await commonAPI('GET',${serverURL}/categories,'')
// }

// //API to delete categories

// export const deleteACategories = async(id)=>{
//    return await commonAPI('DELETE',${serverURL}/categories/${id},{})
// }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName,setCategoryName] = useState('');
  const [categories,setCategories] = useState([])

  //function to add  category
  const addCategory =async()=>{
    console.log(categoryName);
    if (categoryName) {
      let body ={
        categoryName,
        allVideo:[]
      }
       const response= await  addAllCategory(body)
      //  console.log(response);
       if (response.status>=200 && response.status<=300) {
       toast.success('Category Added Successfully')
       //state value null

       setCategoryName("")
       //close the modal
       handleClose()
       }
       else{
        toast.error('Something Went Wrong')
       }
      
    }
    else{
      toast.warning('Please Enter Category Name')
    }
  }
  //function to get all categories

  const allCategory = async()=>{
   const{data} = await getAllCategories()
   setCategories(data)
  //  console.log(data);
  }

  const deleteCategory=async(id)=>{
    await deleteACategories(id)
    allCategory()
  }
  console.log(categories);
  useEffect(()=>{
    allCategory()
  },[allCategory])
  
  return (
    <>
      <div>
        <div>  <button onClick={handleShow} className='btn btn-primary ps-5 pe-5'>Add New Category</button></div>
  
        {categories.length>0?
        categories?.map((item)=>(
          <div className='m-5 border-secondary p-3 rounded' >
          <div className='d-flex justify-content-center p-3 rounded'>
            <h6 className='me-5'>{item.categoryName}</h6>
            <button onClick={()=>deleteCategory(item?.id)} style={{float:'right'}} className='btn btn-danger  '><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        ))
          :
        <p>No Categories Added</p>
        }
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i class="fa-solid fa-pencil text-primary me-2"></i>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <form action="" className='border border-secondary p-3 rounded'>
          <Form.Group className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
             onChange={(e)=>setCategoryName(e.target.value)}
              required
              type="text"
              placeholder="Enter Category Name"
            />
          </Form.Group>
           </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Cancel
            </Button>
            <Button onClick={addCategory} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      </div>
    </>
  )
}

// export default Category
