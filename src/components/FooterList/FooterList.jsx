import React from "react";
import "./FooterList.css";
import linkedin from "./logo-linkedin.png";
import github from "./git.png";
import facebook from "./facebook.png";

export default class FooterList extends React.Component{
    render(){
        return(
            <ul className="lista-rodape" itemProp="mainEntity" itemScope itemType="http://schema.org/Person" >
                <li itemProp="mainEntityOfPage">
                    <a  href="https://www.linkedin.com/in/andrefreitas10/ " target="_blank">
                        <img className="linkedin" src={linkedin} itemProp="image" alt="logo-linkedin"/>
                    </a>
                    
                </li>
                <li itemProp="mainEntityOfPage">
                    <a href="https://github.com/afcarioca" target="_blank" >
                        <img className="github" src={github} itemProp="image" alt="logo-github" />
                    </a>
                    
                </li>
                <li itemProp="mainEntityOfPage">
                    <a href="https://facebook.com/andre.gama.92" target="_blank" >
                        <img className="" src={facebook} itemProp="image" alt="logo-facebook"/>
                    </a>
                    
                </li>
            </ul>
        );
    }
}