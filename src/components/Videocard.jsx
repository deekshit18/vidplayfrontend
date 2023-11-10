import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addhistory, deletevid } from '../services/allAPI';
function Videocard({vd,setDeletevidstatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => { setShow(true)
  const {caption,embedlink}=vd
  let today=new Date()
  console.log(today);
  let timestamp=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
console.log(timestamp);
let viddetails={
caption,embedlink,timestamp
}
await addhistory(viddetails)
  }
  // console.log({vd});
const removevideo=async(id)=>{
  const response=await deletevid(id)
  setDeletevidstatus(true)
}
  //func drag
  const carddrag=(e,id)=>{
    console.log(`${id}`);
    // data transfer to cat...
    e.dataTransfer.setData("videoId",id)
  } 
return (
    <div><Card style={{ width: '18rem' }} draggable onDragStart={(e)=>carddrag(e,vd.id)}>
    <Card.Img onClick={handleShow} variant="top" src={vd?.url} />

    <Card.Body>
      <Card.Title style={{alignItems:"center",display:"flex",justifyContent:"space-between"}}>
<h4>
{vd.caption}  
</h4>      <button onClick={()=>removevideo(vd?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button>
      </Card.Title> </Card.Body>
  </Card>
  <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title className='ms-5'>        {vd.caption}
</Modal.Title>
        <Modal.Body>
          <iframe width="100%" height="400" src={`${vd.embedlink}?autoplay=1`} title={vd.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        
      </Modal></div>
  )
}

export default Videocard
