import React from 'react'
export default function Signup(){
const Funcalert=()=>{
  alert("hey!Account has been created successfully")
}

  return (
    <>
     <div className='container'>
      <h1>Sign-up</h1>
   <form>
   <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone-Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm-Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={Funcalert}>Submit</button>
</form>
    </div>
    </>
   
  )
}

