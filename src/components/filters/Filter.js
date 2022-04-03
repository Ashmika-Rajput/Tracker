import React from 'react';
import Species from './Species';
import Status from './Status';
import Gender from './Gender';

export default function Filter(props) {
  const clearHandler=()=>{
    props.setStatus('');
    props.setSpecies('');
    props.setGender('');
  }
  return (
  <div className='col-3'>
      <div className="text-center fw-bold fs-4 mb-2 ">Filter</div>
      <div  onClick={clearHandler} style={{cursor:'pointer'}} className="text-center text-primary text-decoration-underline mb-4">Clear Filters</div>
      <div className="accordion" id="accordionExample"> 
         <Status setStatus={props.setStatus}/>
         <Species setSpecies={props.setSpecies} />
         <Gender setGender={props.setGender} />
      </div>
  </div>
  )
}
