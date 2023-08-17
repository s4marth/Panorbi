// src/components/LandingPage.js
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    List,
    ListItem,
    Button,
    Avatar,
    Box,
    Typography,
    TextField,
    Tabs,
    Tab,
    Card,
  } from "@material-ui/core";
import ProfilePage from './ProfilePage';
import Axios from 'axios';




function LandingPage() {
  const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const fetchUserData = () => {
         fetch("https://jsonplaceholder.typicode.com/users")
        //fetch("https://panorbit.in/api/users.json")
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
      }

    // const fetchUserData = ()=>{
    //   axios.get("https://panorbit.in/api/users.json")
    //     .then(response => {
    //         console.log(response)
    //         setUsers(response.data)
    //     })
    // }


      // useEffect(() => {
      //   fetchUserData();
      //   console.log(users)
      // }, [])
      useEffect(() => {
        const getUsers = async () => {
          const url = "https://panorbit.in/api/users.json"; 
          const res = await Axios.get(url);
          setUsers(res.data.users);
          console.log(users);
        };
        getUsers();
      }, []);

      const handleUserSelect = (user) => {
        navigate("/ProfilePage", user); 
      };
    

  return (
    <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80")',height:'750px', backgroundSize:'cover', backgroundRepeat: "no-repeat"}}>
      <h1 style={{textAlign: 'center', color:'gray'}}>Select an Account</h1>
      {users.length > 0 && (
        <ul style={{
            textAlign: 'center',
            width: "600px",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
      <Card style={{borderRadius:'30px'}} variant="outlined">
          {users.map(user => (
            <ListItem key={user.id} >
                <Avatar style={{ backgroundColor: user.profilePictureColor }} src={user.profilepicture} />
                <Link to="/ProfilePage" style={{textDecoration:'none',color:'grey', paddingLeft:'20px'}} state={user}><Typography onClick={handleUserSelect} variant="h6">{user.name}</Typography></Link>
            </ListItem>
          ))}
      </Card>
          
        </ul>
      )}
      
    </div>
  );
}

export default LandingPage;


