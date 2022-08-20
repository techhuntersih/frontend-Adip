import React from "react";
const CheckApplicationStatus= ({registerNumber}) =>{
    const url = 'http://localhost:5000/check'; 
    async function handleshow(){
       const response = await fetch(url,{
         method :'POST',
         cache: 'no-cache',
         headers: {
             'Content-Type':'checkApplicsation/json',
         },
         body :  JSON.stringify(registerNumber),
        })
        const parameter =await response.json();
        console.log(parameter)
     }
   handleshow();
    return (
       <div></div>
    )
}
export default CheckApplicationStatus