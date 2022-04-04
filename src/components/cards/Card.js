import React,{useContext} from 'react';
import styles from './Cards.module.css';
import FavButton from '../Fav/FavButton';
import ListContext from '../../store/list-context';


export default function Card(props) {
const ctx=useContext(ListContext);

let display;

  if(props.results){
    display=props.results.map((arr)=>{
      let {id,name,image,location,status} = arr;

  const addToListHandler=list=>{
     ctx.addList({
       id:id,
       name:name,
       image:image,
       loaction:location.name,
       status:status
     })
  }
 
     
      return(
            <div key={id} className="col-4 mb-4 position-relative" >
              <div className={styles.cards}>
                <img src={image} alt=""  className={`${styles.img} img-fluid`}/>
                <div style={{padding:"10px"}} className="content">
                  <div className="fs-4 fw-bold mb-4">{name}</div>
                  <div className="fs-6">Last Location</div>
                  <div className="fs-5" >{location.name}</div>
                  <FavButton addToList={addToListHandler} />
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
