import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadvidstatus,setUploadvidstatus]=useState({})
  return (
    <>
    <div className='container'><Add setUploadvidstatus={setUploadvidstatus}/></div>
    <div className='container'>
      <div className='d-flex container-fluid w-100 mt-3 mb-3' style={{justifyContent:"space-between"}}>            
      <div className='col-lg-9 mb-5'>
      <h2>All Videos</h2>
      <View uploadvidstatus={uploadvidstatus}/>

      </div>
      <div className='col-lg-3'>
      <Category/>

      </div>
    </div>
    </div>

    </>
  )
}

export default Home