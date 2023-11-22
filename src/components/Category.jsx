import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { addAllCategory, addhistory, deleteACategories, deleteACatvid, getAllCategories, getdargv, updateACategory, updatecat, updatecatvid } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Videocard from './Videocard';
import { Row } from 'react-bootstrap';
function Category() {
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
   allCategory()

  //  console.log(data);
  }
  
  const deleteCategory=async(id)=>{
    await deleteACategories(id)
    allCategory()
  }
  // console.log(categories);
  useEffect(()=>{
    allCategory()
  },[])
  // function prevent refresh
  const dragover=(e)=>{
    e.preventDefault()
  }


    const  videodrop=async(e,categoryid)=>{
  // console.log("catid:",categoryid);
let videoid=e.dataTransfer.getData("videoId") 
// console.log(videoid);
const {data}=await getdargv(videoid)
// console.log("data",data);
const selectedcat=categories.find(item=>item.id===categoryid)
selectedcat.allVideo.push(data)
// console.log("sc",selectedcat);
await updatecat(categoryid,selectedcat)
allCategory()
}
// to delete a singel category details
const removeCVideo = async(cid,categoryID)=>{
  // console.log(cid,'img');
  // console.log(categoryID,'cst');
  const A = categories.map(item=>item)
// console.log(A);
 A[categoryID-1].allVideo.splice(cid, 1);
 const k=A[categoryID-1]
 await updatecat(categoryID,k)
  allCategory()
}
  return (
    <>
      <div className='d-grid ms-3'><button onClick={handleShow} className='btn btn-warning mt-3 mb-3 ms-5'>Add New Category</button>
      </div>
    {  
  categories.length>0?
  categories?.map((item)=>(<div droppable onDragOver={(e)=>dragover(e) } onDrop={(e)=>videodrop(e,item?.id)} className='ms-5 mb-3 mt-2 border border-2 border-info p-1'><ul class="list-group">
  <li  class="list-group-item d-flex justify-content-between align-items-center">
{item.categoryName}    <span class="badge "><button onClick={()=>deleteCategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button></span>
  </li></ul>
  <Row><Col>
  {item?.allVideo?.length>0?
item?.allVideo?.map((card,index)=>(<div 
 class="list-group d-flex mb-2 mt-2">{index+1}
            <iframe  width="100%" height="" src={card.embedlink} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

 <button onClick={()=>removeCVideo(index,item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button>

</div>)): <p>Nothing to display</p> 
}

  </Col></Row>
</div>)):<p>No Category Added</p> 
}
        
      <Modal
   show={show}
   onHide={handleClose}
   backdrop="static"
   keyboard={false}
  >
   <Modal.Header closeButton>
     <Modal.Title >Add New Category</Modal.Title>
   </Modal.Header>
   <Modal.Body>
     <form className='border border-info p-3 rounded'>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
        
      </Form.Group>

     </form>
   </Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Cancel
     </Button>
     <Button variant="primary" onClick={addCategory}>ADD</Button>
   </Modal.Footer>
  </Modal>
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

export default Category