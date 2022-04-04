import React,{useRef,useState} from "react";


export default function FavButton(props) {
  const[fav,showFav]=useState(true);
  const listRef=useRef();

  const submitHandler = () => {
   const finalList=listRef.current.value;
    
     if(fav===true){
         props.addToList(finalList); 
         showFav(false);
     }
     else{
        props.removeList(finalList); 
     }
  };

  return (
    <button ref={listRef} onClick={submitHandler} type="button" className="btn btn-primary">
      {fav && 'Add to Favourite'}
      {!fav && 'Added'}
     
    </button>
  );
}
