import React from 'react';
import Header from "../Header/Header.jsx"
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer.jsx"
import Navigation from "../Navigation/Navigation.jsx"
import "./Home.css";



export default class Home extends React.Component{
  
  render(){
    document.title = "Profile";
    return(
        
        <div className="envolvente" >
          <Header/>
          <Navigation />
          <Main />
          <Footer />
        </div>
      
      

    );
  }
}

