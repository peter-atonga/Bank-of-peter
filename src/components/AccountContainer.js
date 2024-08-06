import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import { useEffect } from "react";
import { useState } from "react";

function AccountContainer() {
  const [items,itemshandler] = useState([])
  const [word,setword]=useState("")
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(Response=>Response.json())
    .then(data=>itemshandler(data))
  },[])
    function underChange(event){
      setword(event.target.value)
      console.log(event.target.value)
    }
    const filterFunction=items.filter((item)=>{
      if(item.category.toLowerCase().includes(word.toLowerCase()))
        return(item)
      else if(word==="")
      return(true)
    })
function cash(event){
  event.preventDefault()
  let dataobject={
    date:event.target.date.value,
    description:event.target.description.value,
    category:event.target.category.value,
    amount:event.target.amount.value,
    id:items.length+1
 
  }
  let updateddata=[...items,dataobject]

  fetch("http://localhost:8001/transactions",{
    method:"POST",
    body:JSON.stringify(dataobject),
    headers:{
      'content-type':'application/json'
    }
  })
  .then(res=>{
    if(res.ok===true){itemshandler(updateddata)
    }
  })
  event.target.reset()
}


  return (
  <div>
      <Search Searchfunction={underChange}/>
      <AddTransactionForm AddFunction={cash}/>
      <TransactionsList tools={filterFunction}/>

    </div>
  );
}

export default AccountContainer;

function submitFn(event){
  event.preventDefault()

  
}