import React from 'react'
import FilterBtn from './FilterBtn';

export default function Species(props) {
  let species=["Human","Alien","Humanoid","Robot"];

  return (
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Species
              </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
               <div className="accordion-body d-flex  flex-wrap gap-3">
                 {species.map((items,index)=>(
                   <FilterBtn key={index} name={species} index={index} items={items} task={props.setSpecies} />
                 ))}
              </div>
          </div>
    </div>
  )
}
