import React from "react";
import "./Header.css"; 
import profile from "./profile.jpg";
import java from "./logo-java.jpg";
import php from "./logo-php.png";

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <ul>
                   <li className="header-php">
                        <a href="/projetos">
                            
                            <img className="java" src={php} alt="foto de André" />
                           

                        </a>
                   
                   </li>
                   <li>
                        <figure itemScope itemType ="http://schema.org/Person">
                            <img className="foto-profile" src={profile} alt="foto de André" />
                        </figure>
                    </li> 
                    <li className="header-java">
                        <a href="/projetos">
                            <img className="java" src={java} alt="foto de André" />
                            

                        </a>
                          
                    </li>
                </ul>
                
             </header>
            
        );
    }
}