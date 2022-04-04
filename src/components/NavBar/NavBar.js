//import FavList from "../Fav/FavList";
//import { useContext } from "react";
//import ListContext from "../../store/list-context";


export default function NavBar(props) {
 //const ctx=useContext(ListContext);

 

  const inputHandler=(event)=>{
    props.setSearch(event.target.value);
  } 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Characters Tracker!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <button className="btn btn-primary" onClick={props.onShow}>Favourite</button>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search Character" aria-label="Search" onChange={inputHandler}/>
          <button className="btn btn-outline-success" type="submit" onClick={props.setSearch}>Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
