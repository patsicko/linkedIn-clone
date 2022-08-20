import React from "react";
import styles from "./components/container.module.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/header";
import NetworkPage from "./pages/network/networkPage";
import HomePage from "./pages/home/homePage";
import Messages from "./components/messages";




function App() {
  return (
   
   <Router>
   
   <Header/>
 
  
        <Routes>
            <Route path="/network" exact element={<NetworkPage/>}/>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/homepage" exact element={<HomePage/>}/>
        
        </Routes>
      <Messages/>
   
 </Router>
   
   
   
  );
}

export default App;



  