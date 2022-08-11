
import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import AlertBox from './Alertbox';
function Form(){
    const [allValues, setAllValues] = useState({
        name: '',	
        email:'',
        gender:	'',
        dob:'',
        age:''	,
        state:'',
        degree_of_Hearing_Loss:	'',
        type_of_hearing_loss:'',	
        address:''
     });
     const [registerNumber, setRegisterNumber] = useState()
    //  const history = useNavigate();
     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }
     const data = {
        name: allValues.name,
        email:allValues.email,
        gender:	allValues.gender,
        dob:allValues.dob,
        age:allValues.age,
        state:allValues.state,
        degree_of_Hearing_Loss:	allValues.degree_of_Hearing_Loss,
        type_of_hearing_loss:allValues.type_of_hearing_loss,	
        address:allValues.address
    };  
    const url = 'http://localhost:5000/app'; 
     async function handleSubmit(event){
        event.preventDefault();
        const response = await fetch(url,{
          method :'POST',
          cache: 'no-cache',
          headers: {
              'Content-Type':'application/json',
          },
          body : JSON.stringify(data),
         })
         const parameter =await response.json();
            console.log(parameter);
          setRegisterNumber(parameter.insertid);
      }
    
    //  const header = { 'Content-Type': 'application/json' };
//      const handleSubmit  = async(e) => {
//      e.preventDefault();
   
//     await fetch(url,{
//      method: 'POST', // *GET, POST, PUT, DELETE, etc.    
//      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached     
//      headers: header,
//      body: JSON.stringify(data) // body data type must match "Content-Type" header
//      }).then((response)=>{
//        console.log('finish api call - response:::',response);
//        const parameter = response.json();
//      if(parameter.status==='ok')
//           history('/request')
//      }).catch((error)=>{
//          console.log('something wrong:::',error);
//      });   
//      console.log(data);
     
//  };
    return (
    <div>
        {registerNumber ? <AlertBox registerNumber={registerNumber} /> : <form onSubmit={handleSubmit}>
        <h1>Details Of The Child</h1>
        <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text" name="name" id="child1"required onChange={changeHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Email Id:
                    </td>
                    <td>
                        <input name="email" type="email" onChange={changeHandler}/>
                    </td>
                </tr> 
                <tr>
                <td>
                    Gender:
                </td>
                <td>
                    <input type="radio" name="gender" value="male" required onChange={changeHandler}/>male           
                    <input type="radio" name="gender"  value='Female' onChange={changeHandler}/>Female
                    <input type="radio" name="gender" onChange={changeHandler}/>Transgender
                </td>
               </tr>
               <tr>
                <td>
                    Date of Birth:
                </td>
                <td>
                    <input type="date" name='dob' onChange={changeHandler}/>
                </td>
             </tr>
            <tr>
                <td>
                    Age:
                </td>
                <td>
                    <input type="year" name='age' onChange={changeHandler}/>
                </td>
            </tr>
            <tr>
                <td>
                    Select State:
                </td>
                <td>
                    <select name='state' onChange={changeHandler}>
                        <option>Tripura</option>
                        <option>Tamilnadu</option>
                        <option>Andaman and Nicobar Islands</option>
                        <option>Andhra Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chandigarh</option>
                        <option>Gujarat</option>
                        <option>Kerala</option>
                        <option>Karntaka</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Degree of Hearing Loss:
                </td>
                <td>
                    <select name='degree_of_Hearing_Loss' onChange={changeHandler} >
                        <option>mild</option>
                        <option>moderate</option>
                        <option>moderately severe</option>
                        <option>severe</option>
                        <option>profound</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Type of hearing loss:
                </td>
                <td>
                    <select name='type_of_hearing_loss' onChange={changeHandler}>
                        <option>conductive</option>
                        <option>mixed</option>
                        <option>sensorineural</option>
                    </select>
                </td>
            </tr>
            </table>
            <div>
                <h1>
                    FATHER'S DETAILS (Fill care giver's details if applicable and indicate in remark)DETAILS
                </h1>
              <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Mobile Number:
                    </td>
                    <td>
                        <input type="phone" placeholder="xxx-xxx-xxxx"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Religion:
                        <input type="religion"/>    
                        select category:
                    </td>
                    <td>
                        <select>
                            <option>GEN</option>
                            <option>OBC</option>
                            <option>SC</option>
                            <option>ST</option>
                            <option>NT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Profession:
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Age:
                </td>
                <td>
                    <input type="year"/>
                </td>
             </tr>
              <tr>
                <td>
                    Education Qualification:
                </td>
                <td>
                    <select>
                        <option>Select Option</option>
                        <option>10th</option>
                        <option>12th</option>
                        <option>Graduation</option>
                        <option>Postgraduation</option>
                        <option>anyother</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Permanent Address :
                </td>
                <td>
                    <textarea rows="5" col="30"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    Address for communication(with pin code):
                    If want the communication address same as permanent address then select the checkbox<input type="checkbox"/>
                </td>
                <td>
                    <textarea rows="5" col="100"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    Residence number:
                </td>
                <td>
                    <input type="phone" placeholder="(xxx)xxx-xxxx"/>
                </td>
            </tr>
            <tr>
                <td>
                    Income(rs.):
                </td>
                <td>
                    <input type="income"/>
                </td>
                <td>
                    <select>
                        
                        <option>monthly</option>
                        <option>annual</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    AADHAAR CARD NO:
                </td>
                <td>
                    <input type="aadhar"/>
                </td>
            </tr>
            </table>
            </div>
        <div>
        <h1>
            MOTHER'S DETAILS (Fill care giver's details if applicable and indicate in remark)DETAILS
        </h1>
            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Mobile Number:
                    </td>
                    <td>
                        <input type="phone" placeholder="xxx-xxx-xxxx"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Religion:
                        <input type="religion"/>    
                        select category:
                    </td>
                    <td>
                        <select>
                            <option>GEN</option>
                            <option>OBC</option>
                            <option>SC</option>
                            <option>ST</option>
                            <option>NT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    
                    <td>
                        Profession:
                    </td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    
                    <td>
                    Age:
                </td>
                <td>
                    <input type="year"/>
                </td>
            </tr>
            <tr>
                <td>
                    Education Qualification:
                </td>
                <td>
                    <select>
                        <option>Select Option</option>
                        <option>10th</option>
                        <option>12th</option>
                        <option>Graduation</option>
                        <option>Postgraduation</option>
                        <option>anyother</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    Permanent Address :
                </td>
                <td>
                    <textarea rows="5" col="30"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    Address for communication(with pin code):
                    If want the communication address same as permanent address then select the checkbox<input type="checkbox"/>
                </td>
                <td>
                    <textarea rows="5" col="100"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    Residence number:
                </td>
                <td>
                    <input type="phone" placeholder="(xxx)xxx-xxxx"/>
                </td>
            </tr>
            <tr>
                <td>
                    Income(rs.):
                </td>
                <td>
                    <input type="income"/>
                </td>
                <td>
                    <select>
                        
                        <option>monthly</option>
                        <option>annual</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    AADHAAR CARD NO:
                </td>
                <td>
                    <input type="aadhar"/>
                </td>
            </tr>
            <tr>
                <td>
                    Remarks:</td>
                    <td>
                        <textarea rows="5" col="30"></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <div>
        <h1>FAMILY DETAILS</h1>
            <table>
                <tr>
                    <td>
                        Family setup:
                    </td>
                    <td>
                        <input type="radio" name="family setup"/>joint
                        <input type="radio" name="family setup"/>nuclear
                    
                    </td>
                </tr>
                <tr>
                    <td>
                        No.of siblings:
                           
                        brothers:<input type="brothers"/> 
                        sisters:<input type="sisters"/>

                    </td>
                </tr>
                <tr>
                <td>
                    Any person with disability in the family? YES/NO If yes, give details :
                </td>
                <td>
                    <input type="radio" name="disability"/>yes
                    <input type="radio" name="disability"/>no
                </td>
                <td>
                    <textarea rows="5" col="30"></textarea>
                </td>
            </tr>
            <tr>
            <td>
                Any person in the family with cochlear implant? YES/NO If yes, give details :
            </td>
            <td>
                <input type="radio" name="implant"/>yes
                <input type="radio" name="implant"/>no
            </td>
            <td>
                <textarea rows="5" col="30"></textarea>
            </td>
        </tr>
        </table>
        </div>
        <div>
        <h1>DETAILS ABOUT HEARING AND SPEECH STATUS OF CHILD</h1>
        <table>
            <tr>
                <td>
                    Has your child's hearing testing been done?:
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <tr>
                <td>
                    Is your child using hearing aids?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no

                </td>
            </tr>
            <tr>
                <td>
                    If yes, give following details. Which ear?
                </td>
                <td>
                    <input type="radio" name="ear"/>right
                    <input type="radio" name="ear"/>left
                    <input type="radio" name="ear"/>both
                </td>
            </tr>
            <tr>
                <td>
                    Name of the hearing aid:<input type="name of the hearing aid"/>
                    since when:<input type="since when"/>
                </td>
            </tr>
            <tr>
                <td>
                    For how many hours each day?:<input type="for how many hours each day"/>
                </td>
            </tr>
            <tr>
                <td>
                Does your child have a cochlear implant?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <tr>
                <td>
                Is your child's speech-language assessment done?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <tr>
                <td>
                Is your child attending speech therapy?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <p>If yes, give following details :</p>
            <label>Name of the centre:</label><input type='text'/>
            <label>since when:</label><input type='text'/>
            <label>How many times per week?:</label><input type='text'/>
            <tr>
                <td>
                Has your child been seen by any other medical specialist(e.g. ENT, Neurologist, Pediatrician, etc.)?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <tr>
                <td>
                Has your child been investigated radiologically for cochlear implantation (CT/MRI)?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <tr>
                <td>
                Is your child attending Early Intervention/Preschool/School?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            <p>If yes, give following details :</p>
            <label>Name of the centre:</label><input type='text'/>
            <label>class</label><input type='text'/>
            <label>Type of school</label><input type='text'/>
            <label>since when:</label><input type='text'/>
            <label>How many times per week?:</label><input type='text'/>
            <tr>
                <td>
                Does your child have problem other than hearing loss (e.g. mental retardation, autism, cerebral palsy, visual impairment, hyperactivity, etc.)?
                </td>
                <td>
                    <input type="radio" name="test"/>yes
                    <input type="radio" name="test"/>no
                
                </td>
            </tr>
            </table>
        </div>
        <div>
                <h2>SELECT PREFFERED HOSPITALS AMONG THESE STATES :</h2>
                <h4>PREFERENCE 1</h4>
                <select name="option">
                    <option value="">---please choose an option---</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                <h4>PREFERENCE 2 </h4>
                <select name="option">
                    <option value="">---please choose an option---</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                <h4>PREFERENCE 3</h4>
                
                <select name="option">
                        <option value="">---please choose an option---</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                </select>
                
                <h4 >PREFERENCE 4</h4>
        
                <select name="option">
                            <option value="">---please choose an option---</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                </select>
                <button type="submit">submit </button>
               
        </div>
        </form>}
   
        {/* {registerNumber && <AlertBox registerNumber={registerNumber} />} */}
    </div>
    )
}
export default Form