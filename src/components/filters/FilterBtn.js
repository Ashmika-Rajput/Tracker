import React from 'react'

export default function FilterBtn(props) {
const clickHandler=()=>{
   props.task(props.items);
}

  return (
<>
  <style> 
     {`
          .x:checked + label{
                background-color:#0b5ed7;
                color:white;
           }
           input[type="radio" ]{
                display:none
           }
     `}
  </style>
    <div className="form-check">
         <input onClick={clickHandler} className="form-check-input x" type="radio" name={props.name} id={`${props.name}-${props.index}`}/>
         <label className="btn btn-outline-primary" htmlFor={`${props.name}-${props.index}`}>{props.items}</label>
    </div>
   
</>
  )
}
