import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src="images.png" alt="" width="30" height="40"/>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-left mb-3 mb-lg-0 mx-500">
        <li className="nav-item">
          <a className="nav-link active mx-10 px-100" aria-current="page" href="/">Dashbord</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Sign-up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href=".box2">Sign-in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
