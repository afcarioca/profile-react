import React from 'react';
import Header from "../Header/Header.jsx"
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer.jsx"
import Navigation from "../Navigation/Navigation.jsx"
import styles from "./App.css";



export default class App extends React.Component{
  
  render(){
    document.title = this.props.title;
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

