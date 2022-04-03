import React from 'react'
import FilterBtn from './FilterBtn';

export default function Gender(props) {
  let genders=["female","male","unknown","genderless"];
  return (
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Gender
            </button>
          </h2>
         <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex  flex-wrap gap-3">
              {genders.map((items,index)=>(
                <FilterBtn key={index} name={genders} index={index} items={items} task={props.setGender}/>
              ))}
           </div>
         </div>
    </div>
  )
}
