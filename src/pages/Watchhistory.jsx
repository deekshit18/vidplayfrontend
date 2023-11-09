import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deletevidhis, gethisall } from '../services/allAPI';
function Watchhistory() {
  const [history,setHistory]=useState([])
  const allhistory=async()=>{
    const {data}=await gethisall()
    setHistory(data);
  }
  console.log(history);
  const removehis=async(id)=>{
    await deletevidhis(id)
    //to get all remaining his
    allhistory()
  }
  // const removeallhis=async()=>{
  //   await deleteallhis()
  //   allhistory()
  // }
  useEffect(()=>{
    allhistory()
  },[])
  return (
    <div className='container'>
      <div className='d-flex' style={{alignItems:"center",justifyContent:"space-between"}}>
        <h2>Watch History
          </h2>
          <Link to={'/home'} style={{textDecoration:"none"}}><h4 className='mt-4'><i class="fa-sharp fa-solid fa-arrow-left me-3"></i>Back to Home</h4>
  </Link>
      </div>
  <Table className='container mt-3'  striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>YT LINK</th>
            <th>Time Stamp</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
         {history?.length>0?
         history?.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.url}>{item.url}</a>
            <a href={`${item.embedlink}?autoplay=1`}>{item.embedlink}</a></td>
          <td>{item.timestamp}</td>
          <td><button onClick={()=>removehis(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i></button></td>

        </tr>))
          :<p className='text-danger fs-5'>No Watch History</p>}
          
        </tbody>
      </Table>
</div>

  )
}

export default Watchhistory