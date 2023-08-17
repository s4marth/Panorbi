import React from 'react';
import { useLocation, Link, useParams } from "react-router-dom";
import {Button, Card, CardContent, Typography } from '@material-ui/core'
import {
  List,
  ListItem,
  Avatar,
  Box,
  TextField,
  Tabs,
  Tab,
} from "@material-ui/core";
import img from '../map.png';
 

const ProfilePage = ()=> {
  // const { userId } = useParams();
  const location = useLocation();
  const state = location.state;
  let n = state.name;
  

  

  return (
    <div style={{display: 'grid',gridTemplateColumns: '0.4fr 1.6fr',gridGap: '20px'}}>
      <div>
        <Card variant='outlined' style={{height: '800px', marginTop:'30px', backgroundColor:'royalblue', borderRadius:'20px'}}>
          <CardContent style={{marginTop: '200px', marginBottom: 'auto', textAlign:'center', color:'white'}}>
          <Link to="/ProfilePage"  style={{textDecoration:'none', color:'white', fontSize:'20px'}}> Profile </ Link><br /><hr />
          <Link to="/Posts" state={state} style={{textDecoration:'none', color:'white', fontSize:'20px'}}> Posts </ Link><br /><hr />
          <Link to="/Gallery" state={state} style={{textDecoration:'none', color:'white', fontSize:'20px'}}> Gallery </ Link><br /><hr />
          <Link to="/Todo" state={state} style={{textDecoration:'none', color:'white', fontSize:'20px'}}> Todos </ Link><br />
          </CardContent>
        </Card>
      </div>

      <div>
        <div>
          {/* <h2 style={{marginTop:'0'}}>Profile Page</h2> */}
          <div style={{display: 'grid',gridTemplateColumns: '0.4fr 1.6fr',gridGap: '20px'}}>
          <Typography style={{position:'absolute', left:'350px', top:'50px', fontSize:'30px', color:'gray'}} variant="h6">Profile</Typography>
            <Avatar style={{ backgroundColor: state.profilePictureColor, position:'absolute', top:'50px', right:'20px'}} src={state.profilepicture} />
            <Typography style={{position:'absolute', top:'50px', right:'70px'}} variant="h6">{state.name}</Typography>
          </div>
        </div>
        <hr style={{marginTop:'100px'}}/>

        <div style={{display: 'grid',gridTemplateColumns: '0.4fr 1.6fr',gridGap: '20px', marginTop:'0', marginLeft:'20px'}}>
          <div >
            <img src={state.profilepicture} style={{borderRadius:'500px', height:'200px', width:'200px'}} alt="Profile" />
            <h2>{state.name}</h2>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Username:</b> {state.username}</p>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Email:</b> {state.email}</p>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Phone: </b>{state.phone}</p>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Website:</b> {state.website}</p>
            <Button variant="contained"  color="primary" href="/">Logout</Button>

            <br /><br />
            <p style={{textAlign:'center', fontSize:'20px', color:'gray'}}>Company: </p>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Name:</b> {state.company.name}</p>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Catchphrase:</b> {state.company.catchPhrase}</p>
            <p style={{fontSize:'18px'}}><b style={{color:'gray'}}>Bs:</b> {state.company.bs}</p>

          </div>

          <div style={{borderLeft:'2px solid silver'}}>
          <p style={{textAlign:'left', paddingLeft:'50px', fontSize:'30px', color:'gray'}}>Address: </p>
          <p style={{ paddingLeft:'100px',fontSize:'18px'}}><b style={{color:'gray'}}>Street:</b> {state.address.street}</p>
          <p style={{ paddingLeft:'100px',fontSize:'18px'}}><b style={{color:'gray'}}>Suite:</b> {state.address.suite}</p>
          <p style={{ paddingLeft:'100px',fontSize:'18px'}}><b style={{color:'gray'}}>City:</b> {state.address.city}</p>
          <p style={{ paddingLeft:'100px',fontSize:'18px'}}><b style={{color:'gray'}}>Zip code:</b> {state.address.zipcode}</p>
          <img style={{marginLeft:'200px', borderRadius:'20px', height:'350px', width:'600px'}} src={img} />
          <p style={{ textAlign:'right', marginRight:'150px'}}>{state.address.geo.lat}   {state.address.geo.lng}</p>
          </div>
           
        </div>

       
      </div>

    </div>
  );
}

export default ProfilePage;