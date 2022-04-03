import {useState,useEffect} from 'react';
import NavBar from "./components/NavBar";
import Card from "./components/cards/Card"; 
import Filter from "./components/filters/Filter";


function App() {
  const [search,setSearch]=useState('');
  const[fetchedData,setFetchedData] =useState('');
  const[status,setStatus]=useState('');
  const[gender,setGender]=useState('');
  const[species,setSpecies]=useState('');
  let api=`https://rickandmortyapi.com/api/character/?name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let {results}=fetchedData;

  useEffect(()=>{
  (async function(){
     let data= await fetch(api).then(res=>res.json());
      setFetchedData(data);
   })()
  },[api])

  return (
  <>
     <h1 className="text-center my-4">Ricky and Morty Tracker.</h1>
     <NavBar setSearch={setSearch}></NavBar>
     <div className="container">
        <div className="row my-3">
          <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
           <div className='col-8'>
                      <div className="row">
                         <div><Card results={results}/></div>
                      </div>  
           </div>
         </div>
      </div>      
  </>
  );
}

export default App;
