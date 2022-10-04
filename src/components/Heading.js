import React from 'react'
import '../App.css'
import { BsArrowRight } from 'react-icons/bs';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';



export default function Heading() {
  return (
    <div id='Home' className='Heading' style={{ backgroundImage: "url(/img/2.jpg)" }}>
    <div className='texts'>
    <span>
    <Roll left cascade>
      <h1>Udoy Foundation..</h1>
      </Roll>
      <hr/>
      <h5>DONATE BLOOD,SAVE LIFE</h5>
      <h1 className='text2'>
      <Bounce left cascade>
      DONATE YOUR BLOOD AND INSPIRE <br/>
      OTHERS TO DONATE
      </Bounce>
      </h1>
      <div className='button-group'>
      <span className="fw-bold px-1">If You want to add your Blood group,then click here</span><br></br> 
     <button type="button" className="btn btn-outline-danger text-light fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
     JOIN WITH US  <BsArrowRight/>
      </button>
      </div>
     </span>
     
    </div>
    </div>
  )
}
