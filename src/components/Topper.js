import React,{useState} from 'react'
import '../App.css'

export default function Topper() {
 const[position,setPosition]=useState(false);

 const changePosition=()=>{
    if(window.scrollY>=300){
      setPosition(true);
    }
    else{
      setPosition(false);
    }
  }

  window.addEventListener('scroll',changePosition)
  return (
    <div className={position?'Topper Topper2':'Topper'}>
    <div className='bg-dark text-light py-2'>
      <h5><a href='#Home'>Home</a></h5>
      <h5>Created By <a target='blank' href='https://www.facebook.com/welcome.robin/'> Robin Hossain</a></h5>
    </div>
    </div>
  )
}
