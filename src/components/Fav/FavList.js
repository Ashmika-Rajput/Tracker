import React from 'react';

import { useContext } from 'react';
import ListContext from '../../store/list-context';
import styles from './FavItem.module.css';
//import FavItem from './FavItem';

export default function FavList(props) {
  const ctx=useContext(ListContext);

const  favItems=<ul>{
        ctx.list.map((item)=>{
           return (
            <div key={item.id} className="col-4 mb-4 position-relative" >
            <div className={styles.cards}>
              <img src={item.image} alt=""  className={`${styles.img} img-fluid`}/>
              <div style={{padding:"10px"}} className="content">
                <div className="fs-4 fw-bold mb-4">{item.name}</div>
                {/* <button className='btn btn-primary' >Remove</button> */}
              </div>
            </div>
            { (()=>{
                  if(item.status==='Alive'){
                    return(
                      <div className={` ${styles.badge} badge bg-success`}>{item.status}</div>
                    )
                  }
                  else if(item.status==='Dead'){
                    return(
                      <div className={` ${styles.badge} badge bg-danger`}>{item.status}</div>
                    )
                  }
                  else{
                    return(
                      <div className={` ${styles.badge} badge bg-secondary`}>{item.status}</div>
                    )
                  }
                })()}
             </div>
            
           )
         })
         }</ul>
 
     
                    


  return (
    <>
         <button onClick={props.onHide} className='btn btn-primary'>Close</button>
         {favItems}
    </>
  )
}

