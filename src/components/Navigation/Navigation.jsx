import React from "react";
import List from "../List/List.jsx" 
import "./Navigation.css"; 

export default class Navigation extends React.Component{
    render(){
        return(
            <nav className="navegacao">
                
            
                    <List />
               

            </nav>
        );
    }
}