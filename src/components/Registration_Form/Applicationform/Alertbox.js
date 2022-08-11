import React from "react";
function AlertBox({registerNumber}){
    return(
       <div>
          <p>Your Application is successfully Submitted</p>
           <p>Your Registration Number is {registerNumber}</p>
       </div>
    )
}
export default AlertBox;