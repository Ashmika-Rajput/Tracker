import React from "react";

const ListContext=React.createContext({
     list:[],
     addList:(item)=>{},
     removeList:(id)=>{}
});
export default ListContext;