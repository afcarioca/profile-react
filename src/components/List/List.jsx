import React from "react";
import "./List.css";
export default class List extends React.Component{
   
    render(){
        return(
            
            <ul itemScope itemtype ="http://schema.org/Person">
                <li itemProp="name">André Freitas </li>
                <li itemProp="address">Braga</li>
                <li itemProp="email">afcarioca@hotmail.com</li>
                <div itemProp="affiliation" itemScope itemtype ="http://schema.org/Organization">
                    <li itemProp="name"><a href="http://www.fam.ulusiada.pt/" itemprop="url">Universidade Lusíada em Vila Nova de Famalicão</a></li>
                </div>
            </ul>
        );
    }
}