import React from "react";

function Transaction({items}) {
  const displayItems=items.map((item)=>{
   return(
    <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
    </tr>
   ) 
  })
  return (
    <>{displayItems}</>
  );
}

export default Transaction;
