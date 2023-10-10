import React, { useState } from  'react';
import axios from 'axios';

    
const SCAPostForm = (props) => {
    const [sphere, setSphere] = useState("");
    const [cylinder, setCylinder] = useState("");
    const [axis, setAxis] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
      e.preventDefault();
      
      const newUser = { sphere, cylinder, axis };
    	setSphere("");
    	setCylinder("");
    	setAxis("");
      sendDataToServer(newUser);
    };

      // Function to handle the POST request
  const sendDataToServer = (newUser) => {
    console.log('Sending JSON data:', newUser);
    const apiUrl = 'http://localhost:8000/api';

    // Make a POST request using Axios
    axios
      .post(apiUrl, newUser, {
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      })
      .then((response) => {
        // Handle the response data here
        console.log('Response from server:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('There was a problem with the Axios request:', error);
      });
  };

    
    return(
        <div>
            <p>{props.myProp}</p>
        <form onSubmit={ createUser }>
            <div>
                <label>sphere: </label> 
                <input type="text" value={sphere} onChange={ (e) => setSphere(e.target.value) } />
            </div>
            <div>
                <label>cylinder: </label> 
                <input type="text" value={cylinder} onChange={ (e) => setCylinder(e.target.value) } />
            </div>
            <div>
                <label>axis: </label>
                <input type="text" value={axis} onChange={ (e) => setAxis(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
};
    
export default SCAPostForm;
