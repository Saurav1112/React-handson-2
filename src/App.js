import React, {useState} from "react";
//  import logo from './logo.svg';
import './App.css';


function App() {
  const [allFormData, setAllFormData] = useState([]);
  const [formData, setFormData] = useState ({
    name: "",
    department: "",
    rating: "",
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log("handleChange : ", formData);
    };
  return (
<>
<h1>EMPLOYEE FEEDBACK FORM</h1>
<form>
  <label>
    Name :
    <input type="text" name="name" placeholder='Name'   onChange={handleChange} value={formData.name} required/>
  </label>
  <br />
  <br />
  <label>
    Department :
    <input type="text" name="department" placeholder='Department' onChange={handleChange} value={formData.department} required/>
  </label>
  <br />
  <br />
  <label>
    Rating : 
    <input type="number" name="rating" placeholder='Rating' onChange={handleChange} value={formData.rating} required/>
  </label>
  <br />
  <br />
  <button type="submit" value="Submit"  onClick={(e)=> {
    e.preventDefault();
    // const tempObj = [...allFormData];
    // tempObj.push(FormData);
    // setAllFormData(tempObj);
    setAllFormData([...allFormData, formData])
    console.log("All FormData : ", allFormData);
    setFormData ({
      name: "",
      department: "",
      rating: "",
    });
  }
  } 
  >
 Submit
</button>

</form>
<br />
<div className="container">
{allFormData.map((value, index)=> {
 
 return (
<div key={index} className="flexbox">
Name : {value.name} | Department : {value.department} | Rating : {value.rating}

</div>
  );
})}
</div>
</>
  );
}

export default App;
