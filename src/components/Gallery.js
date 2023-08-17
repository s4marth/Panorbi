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

 

const Gallery = ()=> {

  const location = useLocation();
  const state = location.state;
  

  

  return (
    <div style={{display: 'grid',gridTemplateColumns: '0.4fr 1.6fr',gridGap: '20px'}}>
      <div>
        <Card variant='outlined' style={{height: '800px', marginTop:'30px', backgroundColor:'royalblue', borderRadius:'20px'}}>
          <CardContent style={{marginTop: '200px', marginBottom: 'auto', textAlign:'center', color:'white'}}>
          <Link to="/ProfilePage" state={state} style={{textDecoration:'none', color:'white', fontSize:'20px'}}> Profile </ Link><br /><hr />
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
          <Typography style={{position:'absolute', left:'350px', top:'50px', fontSize:'30px', color:'gray'}} variant="h6">Gallery</Typography>
          <Avatar style={{ backgroundColor: state.profilePictureColor, position:'absolute', top:'50px', right:'20px'}} src={state.profilepicture} />
            <Typography style={{position:'absolute', top:'50px', right:'70px'}} variant="h6">{state.name}</Typography>
          </div>
        </div>
        <hr style={{marginTop:'100px'}}/>

            <div style={{textAlign:'Center', marginBottom:'auto', marginTop:'200px', fontSize:'75px', color:'#F8F0E3'}}><b>Comming soon</b></div>
       
      </div>

    </div>
  );
}

export default Gallery;