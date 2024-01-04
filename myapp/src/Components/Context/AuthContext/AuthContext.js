import { createContext, useEffect, useState } from "react";
export let AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [accessToken, setAccessToken] = useState(null);
useEffect(()=>{
 // Function to obtain and set the access token
 const refreshToken = async () => {
  const Username = process.env.REACT_APP_CLINT_ID;
  const Password = process.env.REACT_APP_SECRET;
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const requestBody = new URLSearchParams();
  requestBody.append("grant_type", "password");
  requestBody.append("username", username);
  requestBody.append("password", password);

  const authHeader = `Basic ${btoa(`${Username}:${Password}`)}`;

  try {
    // Exchange authorization code for access token
    const response = await fetch(
      "https://www.reddit.com/api/v1/access_token",
      {
        method: "POST",
        headers: {
          Authorization: authHeader,
        },
        body: requestBody,
      }
    );
    if (response.ok) {
      const data = await response.json();
      setAccessToken(data?.access_token); 
    } else {
      console.error(
        "Failed to get access token:",
        response.status,
        response.statusText
      );
    }
    
  } 
  catch (error) {
    console.error("Error during access token request:", error);
  
};

}
refreshToken()
},[])

  return (
    <>
      <AuthContext.Provider
        value={{accessToken}}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
