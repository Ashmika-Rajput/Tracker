import {useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Card from "./components/cards/Card"; 
import Filter from "./components/filters/Filter";
import FavList from './components/Fav/FavList';
import ListProvider from './store/ListProvider';



function App() {
  const [search,setSearch]=useState('');
  const[fetchedData,setFetchedData] =useState('');
  const[status,setStatus]=useState('');
  const[gender,setGender]=useState('');
  const[species,setSpecies]=useState('');
  const[listShown,setListShown]=useState(false);
  
  let api=`https://rickandmortyapi.com/api/character/?name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let {results}=fetchedData;

  useEffect(()=>{
  (async function(){
     let data= await fetch(api).then(res=>res.json());
      setFetchedData(data);
   })()
  },[api])

 const showHandler=()=>{
   setListShown(true);
 }

 const hideHandler=()=>{
    setListShown(false);
 }

  return (

  <ListProvider>
     <h1 className="text-center my-4">Ricky and Morty Tracker.</h1>
        <NavBar setSearch={setSearch} onShow={showHandler} ></NavBar>
       
           {/* {listShown && <FavList onHide={hideHandler} />} */}
        
      
     <div className="container">
        <div className="row my-3">
          <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
           <div className='col-8'>
                      <div className="row">
                         <div>
                            {listShown && <FavList onHide={hideHandler} />}
                            {!listShown && <Card results={results}/>}
                            </div>
                      </div>  
           </div>
         </div>
      </div>      
  </ListProvider>
  );
}

export default App;
