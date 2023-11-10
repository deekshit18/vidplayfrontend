import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAllvideos } from '../services/allAPI'

function View({uploadvidstatus}) {
  const [allvideo,setAllvideo]=useState([])
  const [deletevidstatus,setDeletevidstatus]=useState(false)
  const getAllUploadedVideo=async()=>{
    const response=await getAllvideos()
    const {data}=response
    // console.log({data});
setAllvideo(data)
  }
  const vdata=allvideo
 useEffect(()=>{
  getAllUploadedVideo()
  setDeletevidstatus(false)
 },[uploadvidstatus,deletevidstatus])
  return (
    <div>

      <Row>
      { allvideo.length>0?
      allvideo.map((video)=>(
<Col sm={12} md={6} lg={4} xl={4}>
       <Videocard vd={video} setDeletevidstatus={setDeletevidstatus}/>
        </Col>
      ))
       :<p>Nothing to display</p> }
      </Row>
      
    </div>
  )
}

export default View