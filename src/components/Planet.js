import React,{useState} from 'react'
import useSuperHeroesData, { useAddData } from '../useSuperHeroesData'
import {RotateLoader} from 'react-spinners'
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player'



export default function Planet(exampleModal) {
  const[name,setName]=useState('');
  const[blood,setBlood]=useState('');
  const[thana,setThana]=useState('');
  const[districk,setDistrick]=useState('');
  const[phon,setPhon]=useState('');
  const [searchTerm,setSearchTerm]=useState('');

  const isValid=name && blood && thana && districk && phon!=null && name.trim() && blood.trim() && thana.trim() && districk.trim() && phon.trim() .length>0

  const {isLoading,isError,error,data}=useSuperHeroesData()
  const{mutate:addHero}=useAddData();

  const handleClick=()=>{
    console.log({name,blood,thana,districk,phon})
    const hero={name,blood,thana,districk,phon}
    addHero(hero)
    setName("");
    setBlood("");
    setThana("");
    setDistrick("");
    setPhon("");
    alert("Thanks for Your task");
  }

  if(isLoading){
    return <div className='pt-5 mt-5 text-center'><RotateLoader color="#36d7b7" /></div>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <div className='px-5 mx-3'>
    
    <ReactPlayer className='video pt-4 w-auto' url='https://youtu.be/d4CEu4aAumM' />
     
   
    <h2 className='pt-5 text-bolder'>if you are necessary for the blood, then search below...</h2>
    <hr className='pb-4'/>
     <input className='form-control my-4' type="text" placeholder="Search Blood here..." onChange={(e)=>{setSearchTerm(e.target.value)}}/>

     <input className='form-control my-4' type="text" placeholder="Search Upazila here..." onChange={(e)=>{setSearchTerm(e.target.value)}}/>

     <input className='form-control my-4' type="text" placeholder="Search Districk here..." onChange={(e)=>{setSearchTerm(e.target.value)}}/>
     
      <div className='row'>
      {data?.data.filter((hero)=>{
        if(searchTerm===''){
          return hero
        }
        else if(hero.blood.toLowerCase().includes(searchTerm.toLowerCase())){
          return hero
        }
        else if(hero.thana.toLowerCase().includes(searchTerm.toLowerCase())){
          return hero
        }
        else if(hero.districk.toLowerCase().includes(searchTerm.toLowerCase())){
          return hero
        }
        else if(searchTerm===''){
          return hero
        }
      }).map((hero)=>{
        return <div key={hero.index} className='col-md-6 card'>
        <Fade left>
        <h4>Name : {hero.name}</h4>
        <h4>Blood-Group : {hero.blood}</h4>
        <h4>Thana : {hero.thana}</h4>
        <h4>Zilla : {hero.districk}</h4>
        <a href=''><h4>Mobile : {hero.phon} </h4></a>
        </Fade>
        </div>
        
      })}
      </div>
      <div>



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content bg-dark">
    <div className="modal-header">
      <h5 className="modal-title text-light" id="exampleModalLabel">Add Blood-Group</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <form className="pt-5">
    <input className='form-control ' type='text' name='name' placeholder='Enter Add Your name' value={name} onChange={(e)=>setName(e.target.value)} requird=''/>
    <input className='form-control mt-4' type='text' name='blood' placeholder='Enter Add Your Blood' value={blood} onChange={(e)=>setBlood(e.target.value)} requird=''/>
    <input className='form-control mt-4' type='text' name='thana' placeholder='Enter Thana' value={thana} onChange={(e)=>setThana(e.target.value)} requird=''/>
    <input className='form-control mt-4' type='text' name='districk' placeholder='Enter District' valu={districk} onChange={(e)=>setDistrick(e.target.value)} requird=''/>
    <input className='form-control mt-4' type='number' name='phone' placeholder='Enter Mobile Number' value={phon} onChange={(e)=>setPhon(e.target.value)} requird=''/>
    </form>
    </div>
    <button disabled={!isValid} className='m-4 fw-bold' onClick={handleClick}>Add Your Blood</button>
    </div>
  </div>
</div>
</div>
    </div>
  )
}


 

