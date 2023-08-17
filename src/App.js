// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ProfilePage from './components/ProfilePage';
// import LandingPage from './components/LandingPage';

// function App() {
//   return (
//    <div>
//     <LandingPage />
//    </div> 
//   );
// }

// export default App;
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage";

import ProfilePage from "./components/ProfilePage";
import Todo from "./components/Todo";
import Gallery from "./components/Gallery";
import Posts from "./components/Posts";

function App(){
  return (
    <>
    <BrowserRouter>
       <Routes>  
          <Route exact path='/' element={< LandingPage />}></Route>  
          <Route exact path='/ProfilePage' element={< ProfilePage />}></Route>    
          <Route exact path='/Todo' element={<Todo />}></Route>  
          <Route exact path='/Gallery' element={<Gallery />}></Route>  
          <Route exact path='/Posts' element={< Posts />}></Route>  
        </Routes>  
      
        {/* <LandingPage />
        <Route path="/profile/:id" component={ProfilePage} /> */}
      
    </BrowserRouter>
    </>
  );
};

export default App;