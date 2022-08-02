import React,{ useState } from 'react'
export default function Dashboard(props) {
  
  var[count1, setCount1]=useState('0');
 const handlecount1Click =()=>{
  console.log(count1);
  
  let newcount1=++count1;
  
  setCount1(newcount1)
 }
 var[count2, setCount2]=useState('0');
 const handlecount2Click =()=>{
  console.log(count2);
  
  let newcount2=++count2;
  
  setCount2(newcount2)
 }

  return (
    <div className="container">
        <form>
       <h1>Dashboard</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlcount1area1" placeholder='Enter your message here' rows="4"></textarea>
  <div>
    <button type="button" className="btn btn-primary mx-0" onClick={handlecount1Click}>like {count1}</button>
   
  <button type="button" className="btn btn-dark my-3" onClick={handlecount2Click}>dislike {count2}</button>
  
  
 
  </div>
 
</div>
</form>
</div>
  )
}
