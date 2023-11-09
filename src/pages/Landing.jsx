import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Landing() {
 const navigateurlhome=useNavigate()
  return (
    <>
    <Row className='mt-4'>
        <Col></Col>
        <Col lg={5}>
          <h1>Welcome to <span className='text-warning'>VidPlay</span></h1>
       <p className="mt-5" style={{textAlign:"justify"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nobis, facilis odit non corrupti quibusdam laboriosam eius molestiae nulla nam tenetur debitis harum consequuntur excepturi laborum dicta beatae nesciunt quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis dolore pariatur ab quam, animi alias facilis eveniet labore odit enim. Consequatur dicta voluptate voluptates soluta labore culpa aliquid dolore. 
       </p>
       
<button type="button" class="btn btn-outline-warning" fdprocessedid="8hb4ap" onClick={()=>navigateurlhome("/home")}>Get Started</button>

       
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/2wq1PfInyYkAAAAj/music-note-dancing.gif" alt="" />
          <img className='ms-5' src="https://media.tenor.com/15YUsMWt4FEAAAAi/music.gif" alt="" />
 <img className='ms-5' src="https://media.tenor.com/dmb-UuLw7w4AAAAi/milk-and.gif" alt="" />
        </Col>

      </Row>
      <div className='container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column'>

      <h2 className='mb-3'>Features</h2>      

      <div className='d-flex justify-content-evenly align-items-center w-100'> 
       <Card className='p-4 border border-info' style={{ width: '22rem' }}>
        <Card.Img style={{width:"100%",height:"300px"}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card><Card className='p-4 border border-info' style={{ width: '22rem' }}>
        <Card.Img style={{width:"100%",height:"300px"}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card><Card className='p-4 border border-info' style={{ width: '22rem' }}>
        <Card.Img style={{width:"100%",height:"300px"}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>

      <div className='container border border-2 border-info rounded p-5 mt-5 mb-5'>
<Row>
  <Col lg={5}>
    <h3 className='text-warning'>Dimple Fast And Powerful</h3>
    <p><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis molestias rerum expedita deserunt pariatur velit, maxime quod quibusdam incidunt error? Autem itaque tempora aut, amet laudantium similique consectetur eaque?</p>
    <p><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis molestias rerum expedita deserunt pariatur velit, maxime quod quibusdam incidunt error? Autem itaque tempora aut, amet laudantium similique consectetur eaque?</p>
    <p><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis molestias rerum expedita deserunt pariatur velit, maxime quod quibusdam incidunt error? Autem itaque tempora aut, amet laudantium similique consectetur eaque?</p>

  </Col>
  <Col></Col>
  <Col lg={6}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rBLCjz8as0E?si=2ifRoKOPeGDI6ZzV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </Col>
</Row>
      </div>
    </>
  )
}

export default Landing