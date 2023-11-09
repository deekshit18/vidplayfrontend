import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (


    <div style={{width:'100%', height:'300px' }} className='d-flex justify-content-center align-items-center w-100 mt-5 flex-column'>
        <div className='footer d-flex justify-content-evenly align-items-center w-100'>
         <div className='website' style={{width:'400px'}}>
            <h4>  <i class="fa-solid fa-video fa-bounce me-4"></i> {' '}
    VidPlay</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum accusantium error odit! Illum velit tempora nulla nemo quo.</p>
    <p>Lorem, quod recusandae excepturi rerum quae.</p>
         </div>
<div className='links d-flex flex-column'>
  <h4 className='mb-4'>Links</h4>
  <Link to={'/'} style={{textDecoration:"none",}}>Landing Page</Link>
  <Link to={'/home'} style={{textDecoration:"none",}}>Home Page</Link>
  <Link to={'/watchhistory'} style={{textDecoration:"none",}}>Watch History</Link>

</div>
<div className='guides d-flex flex-column'>
<h4 className='mb-4'>Guides</h4>

<Link to={'https://react.dev/'} style={{textDecoration:"none",}}>React</Link>
<Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:"none",}}>React Bootstrap</Link>
<Link to={'https://bootswatch.com/'} style={{textDecoration:"none",}}>Bootswatch</Link>

</div>
<div className='contact'>
<h4 className='mb-3 ms-4'>Contact Us</h4>
<div className='d-flex flex-column'>
  <input type="text" className='form-control' placeholder='Enter Your Email ID' />
<button className='btn btn-warning mt-3 mb-3'>Subscribe</button>
</div>
<div className='icon d-flex justify-content-evenly'>
<Link to={'https://www.instagram.com/?hl=en'} style={{textDecoration:"none"}}><i class="fa-brands fa-instagram"></i></Link>
<Link to={'https://twitter.com/?lang=en-in'} style={{textDecoration:"none"}}><i class="fa-brands fa-x-twitter"></i></Link>
<Link to={'https://in.linkedin.com/'} style={{textDecoration:"none"}}><i class="fa-brands fa-linkedin"></i></Link>
<Link to={'https://www.facebook.com/'} style={{textDecoration:"none"}}>
<i class="fa-brands fa-square-facebook"></i> </Link>

</div>

</div>
        </div>
        <p>Copyright &copy; 2023 VidPlay.Bulid with React</p>
    </div>
  )
}

export default Footer