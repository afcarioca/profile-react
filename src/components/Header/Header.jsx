import React from "react";
import "./Header.css"; 
import profile from "./profile.jpg";
export default class Header extends React.Component{
    render(){
        return(
            <header>
                <figure>
                    <img src={profile} alt="Profile" />
                </figure>
             </header>
            
        );
    }
}