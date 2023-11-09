import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
//     <div><Navbar className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="#home">
//         {/* <img
//           alt=""
//           src="/img/logo.svg"
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//         /> */}
//         
//       </Navbar.Brand>
//     </Container>
//   </Navbar>
// {/* <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark"> */}

<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">

  <div class="container-fluid">
  <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>

    {/* <a class="navbar-brand" href="#"> */}
      <h2>
        {/* <i  class="fa-solid fa-video fa-bounce me-2  ms-3 text-warning"></i> */}
        <i class="ms-5 me-3 fa-solid fa-video fa-beat"></i>        {' '}VidPlay</h2>
      {/* </a> */}
    </Link>
  </div>
</nav>
  )
}

export default Header