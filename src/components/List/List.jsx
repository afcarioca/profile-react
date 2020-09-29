import React from "react";
import "./List.css";
export default class List extends React.Component{
   
    render(){
        return(
            
            <ul itemScope itemType ="http://schema.org/Person">
                <li itemProp="name">André Freitas </li>
                <li itemProp="address">Braga</li>
                <li itemProp="email">afcarioca@hotmail.com</li>
                <li itemProp="affiliation"><a href="http://www.fam.ulusiada.pt/" itemProp="url">Universidade Lusíada em Vila Nova de Famalicão</a></li>
               
            </ul>
        );
    }
}