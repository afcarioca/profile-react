import React from "react";
import "./List.css";
export default class List extends React.Component{
   
    render(){
        return(
            
            <ul>
                <li>Nome: André Freitas </li>
                <li>Cidade: Braga</li>
                <li>Email: afcarioca@hotmail.com</li>
                <li><a href="http://www.fam.ulusiada.pt/">Universidade Lusíada em Vila Nova de Famalicão</a></li>
            </ul>
        );
    }
}