import React from "react";
import "./FooterList.css";
import linkedin from "./logo-linkedin.png";
import github from "./git.png";
import facebook from "./facebook.png";

export default class FooterList extends React.Component{
    render(){
        return(
            <ul className="lista-rodape">
                <li>
                    <a href="https://www.linkedin.com/in/andrefreitas10/">
                        <img className="" src={linkedin} />
                    </a>
                    
                </li>
                <li>
                    <a href="https://github.com/afcarioca">
                        <img className="github" src={github} />
                    </a>
                    
                </li>
                <li>
                    <a href="https://facebook.com/andre.gama.92">
                        <img className="" src={facebook} />
                    </a>
                    
                </li>
            </ul>
        );
    }
}