import React from "react";
import "./Header.css"; 
import profile from "./profile.jpg";
export default class Header extends React.Component{
    render(){
        return(
            <header>
                <figure itemScope itemtype ="http://schema.org/Person">
                    <img className="foto-profile" src={profile} itemprop="image"  alt="foto de André" />
                </figure>
             </header>
            
        );
    }
}