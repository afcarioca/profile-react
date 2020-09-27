import React from 'react';
import Header from "../Header/Hearder.jsx"
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer.jsx"
import DocumentMeta from 'react-document-meta';



export default class App extends React.Component{
  
  render(){
    document.title = "Exemplo";
    return(
     
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      
      
    );
  }
}

