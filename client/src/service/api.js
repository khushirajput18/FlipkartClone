import axios from 'axios';

export const authentication = async (signupData) => {
  try {
    const response = await fetch('http://localhost:8000/signup', {  // Replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',  // Changed to URL encoded
      },
      body: new URLSearchParams(signupData).toString(),  // Using URLSearchParams to encode the form data
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    const result = await response.text();  // Parsing the response as plain text
    return result;  // Return the response text
  } catch (error) {
    console.error("Error during authentication:", error);
    alert("Error: " + error.massage);
    throw error;
  }
};

 // services/api.js




 const authenticateLogin = async (data) => {
  try {
    return await axios.post("http://localhost:8000/login", data);
  } catch (error) {
    console.log("error calling login api ",error);
    return error.response;
    
  }
};

export default authenticateLogin;