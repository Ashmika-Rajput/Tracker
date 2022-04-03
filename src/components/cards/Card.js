import React from 'react';
import styles from './Cards.module.css';

export default function Card(props) {
  let display;

  if(props.results){
    display=props.results.map((arr)=>{
      let {id,name,image,location,status} = arr;
      return(
            <div key={id} className="col-4 mb-4 position-relative" >
              <div className={styles.cards}>
                <img src={image} alt=""  className={`${styles.img} img-fluid`}/>
                <div style={{padding:"10px"}} className="content">
                  <div className="fs-4 fw-bold mb-4">{name}</div>
                  <div className="fs-6">Last Location</div>
                  <div className="fs-5" >{location.name}</div>
                </div>
              </div>
              { (()=>{
                if(status==='Alive'){
                  return(
                    <div className={` ${styles.badge} badge bg-success`}>{status}</div>
                  )
                }
                else if(status==='Dead'){
                  return(
                    <div className={` ${styles.badge} badge bg-danger`}>{status}</div>
                  )
                }
                else{
                  return(
                    <div className={` ${styles.badge} badge bg-secondary`}>{status}</div>
                  )
                }
              })()}

              
            </div>
      );
    });
  }
  else{
    display='No Character Found...'
  }
  return (
    <div className='row'>{display}</div>
  )
}
