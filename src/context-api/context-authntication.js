import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';


//use to create the context 
export const Login_Create_Context=React.createContext();


const testUsers = {
    Admininistrator: {
      password: 'admin',
      name: 'Administrator',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
    },
    Editor: {
      password: 'editor',
      name: 'Editor',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
    },
    Writer: {
      password: 'writer',
      name: 'Writer',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
    },
    User: {
      password: 'user',
      name: 'User',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
    },
  };
  

export function Login_Provider(props) {
    const [UserName_Password,setUserName_Password]=useState(window.localStorage.token!==undefined?JSON.parse(window.localStorage.token):"");
    const [error,setError]=useState(false)
    //check the username and password are valid or not 
    if(UserName_Password!==""){
        const {UserName,Password}=UserName_Password;

        useEffect(()=>{
              if(testUsers[UserName]){
                if(testUsers[UserName].password==Password){
                    let DataUse=jwt_decode(testUsers[UserName].token)
                    window.localStorage.token=JSON.stringify(DataUse);
                    window.location.href="/home";
                }else{
                  setError(true)
              }
            }
        },[UserName,Password])
    }



  return (
    <Login_Create_Context.Provider value={{setUserName_Password,UserName_Password,error}}>
        {props.children}
    </Login_Create_Context.Provider>
  )


  
}

